<?php

include '../../formatData.php';


//Endpoint filters
// weatherservice/climatecode?mode=(json/xml)
// weatherservice/climatecode?sort=(code/color/name)
// weatherservice/climatecode?(code/color)=(Matching Term) 
//     weatherservice/climatecode?country=Sweden  
// weatherservice/climatecode?namesearch=(searchterm)
//     weatheerservice/climatecode?namesearch=trop

//
// Example:
// weatherservice/climatecode?namesearch=tropic&sort=color&mode=xml

$mode=getParam("mode","xml");
$sort=urlencode(getParam("sort","none"));
if(!in_array($sort,Array("code","color","name"))) $sort="none";

$param="";
$search=getParam("namesearch","none");
if($search!="none") $param=" WHERE name like '%".$search."%' ";


if($param=="") $param=makeMatches(Array("code","color"));

try {
	$log_db = new PDO('sqlite:../weatherservice.db');
	$str='select * from code ';
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="order by ".$sort;
	$str.=";";	
	$query = $log_db->prepare($str);	
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,[]);
	}else{
			makeXml("climatecodes","code",$rows,[],["code","name","color"],[],[]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>