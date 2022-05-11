<?php

include '../../formatData.php';

//Endpoint filters
// weatherservice/forecast?mode=(json/xml)
// weatherservice/forecast?sort=(place/fromtime/totime/period/name)
// weatherservice/forecast?(place/fromtime/totime/period/name)=(Matching Term) 
//     weatherservice/forecast?place=Grums 
// weatherservice/forecast?timesearch=(searchterm)
//     weatheerservice/forecast?timesearch=2020-01-01

//
// Example:
// weatherservice/forecast/index_db.php?timesearch=2020-01-01&place=Arjeplog

$mode=getParam("mode","xml");
$sort=urlencode(getParam("place","fromtime","totime","period","name"));
if(!in_array($sort,Array("code","color","name"))) $sort="none";

$param="";
$search=getParam("timesearch","none");
if($search!="none") $param=" WHERE fromtime like '%".$search."%' ";

$other=makeMatches(Array("place","fromtime","totime","period","name"));
if($other!=""&&$param==""){
  $param=makeMatches(Array("place","fromtime","totime","period","name"));
}else{
    if($other!=""){
        $param.=" AND ".str_replace("WHERE","",$other);
    }
}

try {
	$log_db = new PDO('sqlite:../weatherservice.db');

	$str='select * from forecast ';
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="order by ".$sort;
	$str.=";";	
	$query = $log_db->prepare($str);		  
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["tempdata"]);
	}else{
			makeXml("weatherdata","forecast",$rows,["tempdata"],["place","fromtime","totime","period","name","UNIT","VALUE","ALTUNIT","ALTVALUE","WSYMB3NUMBER","NUMBER","NAME","DEG","CODE","MPS","DEF"],[],[]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>