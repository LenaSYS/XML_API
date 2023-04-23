<?php

include '../../formatData.php';

//Endpoint filters
// carservice/group?mode=(json/xml)
// carservice/group?sort=(groupid)
// carservice/group?(groupid)=(Matching Term) 
//     carservice/group?groupid=Stellantis 
//
// Example:
// carservice/brand?country=France&sort=totalsales&mode=xml

$mode=getParam("mode","xml");
$sort=urlencode(getParam("sort","none"));
if(!in_array($sort,Array("groupid"))) $sort="none";

$param="";
$search=getParam("brandsearch","none");
if($search!="none") $param=" WHERE members like '%".$search."%' ";

if($param=="") $param=makeMatches(Array("groupid"));

try {
	$log_db = new PDO('sqlite:../Carsales.db');
	$str='select * from corporation ';
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="order by ".$sort;
	$str.=";";	
	$query = $log_db->prepare($str);	
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["members"]);
	}else{
			makeXml("groups","group",$rows,["members"],["groupid","name","from","to"],["logo"],[]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>