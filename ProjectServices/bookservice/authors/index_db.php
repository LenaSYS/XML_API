<?php

include '../../formatData.php';

// bookservice/authors?mode=(json/xml)
// bookservice/authors?sort=(role/firstname/lastname/birthyear/deathyear)
// bookservice/authors?aboutsearch=(searchterm)
//     bookservice/authors?aboutsearch=Club
// bookservice/authors?namesearch=(searchterm)
//     bookservice/authors?namesearch=ark
// bookservice/authors?(firstname/lastname/role/birthyear/deathyear)=(Matching Term) 
//     bookservice/authors?firstname=Mark&lastname=Twain
//     bookservice/authors?birthyear=1866

$mode=getParam("mode","xml");
$sort=urlencode(getParam("sort","none"));
if(!in_array($sort,Array("role","firstname","lastname","birthyear","deathyear"))) $sort="none";

$param="";
$search=getParam("aboutsearch","none");
if($search!="none") $param=" WHERE about like '%".$search."%' ";
$search=getParam("namesearch","none");
if($search!="none") $param=" WHERE firstname like '%".$search."%' or lastname like '%".$search."%' ";

if($param=="") $param=makeMatches(Array("firstname","lastname","role","birthyear","deathyear"));

try {
	$log_db = new PDO('sqlite:../books.db');

	$str="SELECT * FROM author ";
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="ORDER BY ".$sort;
	$str.=";";	
	
	$query = $log_db->prepare($str);
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,[]);
	}else{
			makeXml("authors","author",$rows,[],["role"],["about","lastname","firstname","birthyear","deathyear","imgurl","signature"],[]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>