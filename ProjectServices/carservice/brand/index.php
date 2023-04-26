<?php

include '../../formatData.php';

//Endpoint filters
// carservice/brand?mode=(json/xml)
// carservice/brand?sort=(brandid/founded/country/totalsales)
// carservice/brand?(brandid/country)=(Matching Term) 
//     carservice/brand?brandid=Volvo 
//
// Example:
// carservice/brand?country=France&sort=totalsales&mode=xml

$mode=getParam("mode","xml");
$sort=urlencode(getParam("sort","none"));
if(!in_array($sort,Array("brandid","founded","country","totalsales"))) $sort="none";

$param="";
$search=getParam("modelsearch","none");
if($search!="none") $param=" WHERE models like '%".$search."%' ";

if($param=="") $param=makeMatches(Array("brandid","country"));

try {
	$log_db = new PDO('sqlite:../Carsales.db');
	$str='select * from brand ';
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="order by ".$sort;
	$str.=";";	
	$query = $log_db->prepare($str);	
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["geolocation","models"]);
	}else{
			makeXml("brands","brand",$rows,["geolocation","models"],["brandid","groupid","name","number","founded","totalsales"],["logo","country","city"],[]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>