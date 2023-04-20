<?php

include '../../formatData.php';

//Endpoint filters
// electionservice/races?mode=(json/xml)
// electionservice/races?sort=(stateid,name,votes,electoralvotes,absenteevotes,rating)
// electionservice/states?(stateid/name/capital)=(Matching Term) 
//     electionservice/states?name=Montana 
// electionservice/states?timezonesearch=(searchterm)
//     electionservice/states?timezonesearch=CDT
// electionservice/states?namesearch=(searchterm)
//     electionservice/states?namesearch=New
//
// Example:
// electionservice/states?namesearch=New&sort=population&mode=xml

$mode=getParam("mode","xml");
$sort=urlencode(getParam("sort","none"));
if(!in_array($sort,Array("electoralvotes","rating","votes","stateid","name","absenteevotes"))) $sort="none";

$param="";
$search=getParam("timezonesearch","none");
if($search!="none") $param=" WHERE timezone like '%".$search."%' ";
$search=getParam("namesearch","none");
if($search!="none") $param=" WHERE name like '%".$search."%' ";

if($param=="") $param=makeMatches(Array("name","stateid","capital"));

try {
	$log_db = new PDO('sqlite:../presidents.db');
	$str='select * from races ';
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="order by ".$sort;
	$str.=";";	
	$query = $log_db->prepare($str);	
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["candidates","eligible"]);
	}else{
			makeXml("races","race",$rows,["candidates","eligible"],["stateid","name","votes","absenteevotes","electoralvotes","rating","total","party","firstname"."lastname"],["firstname","lastname"],["total"],Array());
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>