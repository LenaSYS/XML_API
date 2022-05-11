<?php

include '../../formatData.php';

// Endpoint filters (search and sorting can be combined)
// https://wwwlab.iit.his.se/gush/XMLAPI/bookservice/category/?categorysearch=Myst
// https://wwwlab.iit.his.se/gush/XMLAPI/bookservice/category/?sort=Category

$mode=getParam("mode","xml");
$sort=urlencode(getParam("sort","none"));
if($sort!="category") $sort="none";
$search=getParam("categorysearch","none");
if($search!="none") $search=" where category like '%".$search."%' ";

try {
	$log_db = new PDO('sqlite:../books.db');

	$str="select * from category ";
	if($search!="none") $str.=$search;
	if($sort!="none") $str.="order by ".$sort;
	$str.=";";

	$query = $log_db->prepare($str);
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,[]);
	}else{
			makeSimpleXml("categories","category",$rows,[],[],["category"]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>