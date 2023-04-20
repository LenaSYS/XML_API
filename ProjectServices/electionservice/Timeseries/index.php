<?php

include '../../formatData.php';

//Endpoint filters
// electionservice/timeseries?mode=(json/xml)
// electionservice/timeseries?sort=(stateid,name,votes,electoralvotes,absenteevotes,rating)
// electionservice/timeseries?(stateid)=(Matching Term) 
//     electionservice/timeseries?stateid=AK 
// electionservice/timeseries?timezonesearch=(searchterm)
//
// Example:
// electionservice/timeseries?namesearch=New&sort=population&mode=xml

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
	$str='select * from timeseries ';
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="order by ".$sort;
	$str.=";";	
	$query = $log_db->prepare($str);	
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["series"]);
	}else{
			makeXml("election","timeseries",$rows,["series"],["timestamp","votes","biden","trump","stateid"],[],["stateid"],Array());
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>