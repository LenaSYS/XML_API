<?php

include '../../formatData.php';

//Endpoint filters
// scheduleservice/programs?mode=(json/xml)
// scheduleservice/programs?sort=(id/name/hp/level/department/studentcount)
// scheduleservice/programs?(id/name/hp/level/department/studentcount)=(Matching Term) 
//     scheduleservice/programs?department=Teknik  
// scheduleservice/programs?namesearch=(searchterm)
//     scheduleservice/programs?namesearch=System
//
// Example:
// scheduleservice/programs/index_db.php?namesearch=System&sort=studentcount&mode=json

$mode=getParam("mode","xml");
$sort=urlencode(getParam("sort","none"));
if(!in_array($sort,Array("id","name","hp","level","department","studentcount"))) $sort="none";

$param="";
$search=getParam("namesearch","none");
if($search!="none") $param=" WHERE name like '%".$search."%' ";

if($param=="") $param=makeMatches(Array("id","name","hp","level","department","studentcount"));

try {
	$log_db = new PDO('sqlite:../scheduleservice.db');
	$str='select * from program ';
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="order by ".$sort;
	$str.=";";	
	$query = $log_db->prepare($str);	
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["periods"]);
	}else{
			makeXml("programs","program",$rows,["periods","entries"],["number","id","name","level","hp","area","department","studentcount"],[],Array("periods"=>"period","period"=>"course"));
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>