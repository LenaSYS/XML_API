<?php

include '../../formatData.php';

//Endpoint filters
// scheduleservice/rooms?mode=(json/xml)
// scheduleservice/rooms?sort=(number)
// scheduleservice/rooms?(number)=(Matching Term) 
//     scheduleservice/rooms?number=E304  
// scheduleservice/course?programsearch=(searchterm)
//     scheduleservice/course?programsearch=Biolog
//
// Example:
// scheduleservice/rooms?programsearch=Kognition&sort=number&mode=json

$mode=getParam("mode","xml");
$sort=urlencode(getParam("sort","none"));
if(!in_array($sort,Array("number"))) $sort="none";

$param="";
$search=getParam("programsearch","none");
if($search!="none") $param=" WHERE entries like '%".$search."%' ";

if($param=="") $param=makeMatches(Array("number"));

try {
	$log_db = new PDO('sqlite:../scheduleservice.db');

	$str='select * from room ';
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="order by ".$sort;
	$str.=";";	
	$query = $log_db->prepare($str);
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["entries"]);
	}else{
			makeXml("rooms","room",$rows,["entries"],["number","courseid","coursename","starttime","endtime","sign","comment","group","type"],[],Array("entries"=>"entry"));
			
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>