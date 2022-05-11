<?php

include '../../formatData.php';

//Endpoint filters
// scheduleservice/course?mode=(json/xml)
// scheduleservice/course?sort=(id/name/hp/department)
// scheduleservice/course?(id/name/hp/department)=(Matching Term) 
//     scheduleservice/course?department=Teknik  
// scheduleservice/course?namesearch=(searchterm)
//     scheduleservice/course?namesearch=Klinisk
// scheduleservice/course?programsearch=(searchterm)
//     scheduleservice/course?programsearch=Biolog
//
// Example:
// scheduleservice/course?namesearch=erd&sort=name&mode=xml

$mode=getParam("mode","xml");
$sort=urlencode(getParam("sort","none"));
if(!in_array($sort,Array("id","name","hp","department"))) $sort="none";

$param="";
$search=getParam("namesearch","none");
if($search!="none") $param=" WHERE name like '%".$search."%' ";
$search=getParam("programsearch","none");
if($search!="none") $param=" WHERE programs like '%".$search."%' ";

if($param=="") $param=makeMatches(Array("id","name","hp","department"));

try {
	$log_db = new PDO('sqlite:../scheduleservice.db');
	
	$str='select * from course ';
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="order by ".$sort;
	$str.=";";	
	$query = $log_db->prepare($str);	
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["periods","programs"]);
	}else{
			makeXml("courses","course",$rows,["programs","periods","entries"],["periodnumber","number","id","name","level","hp","area","department","studentcount","starttime","endtime","sign","comment","room","group","type"],[],Array("programs"=>"period","periods"=>"period"));
  }

}catch (PDOException $e){
    echo $e->getMessage();
}

?>