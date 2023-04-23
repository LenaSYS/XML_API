<?php

include '../../formatData.php';

//Endpoint filters
// carservice/carsales?mode=(json/xml)
// carservice/carsales?sort=(groupid/brandid/model/sales/period)
// carservice/carsales?(groupid/brandid/model/class)=(Matching Term) 
//     carservice/carsales?groupid=Stellantis 
//
// Example:
// carservice/carsales?brand=Volvo&sort=sales&mode=xml

$mode=getParam("mode","xml");
$sort=urlencode(getParam("sort","none"));
if(!in_array($sort,Array("groupid","brandid","model","sales","period"))) $sort="none";

$param="";
$search=getParam("timezonesearch","none");
if($search!="none") $param=" WHERE timezone like '%".$search."%' ";
$search=getParam("namesearch","none");
if($search!="none") $param=" WHERE name like '%".$search."%' ";

if($param=="") $param=makeMatches(Array("groupid","brandid","model","class"));

try {
	$log_db = new PDO('sqlite:../Carsales.db');
	$str='select * from Carsales ';
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="order by ".$sort;
	$str.=";";	
	$query = $log_db->prepare($str);	
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,[]);
	}else{
			makeXml("salesnumbers","salesitem",$rows,[],["groupid","brandid","model","country","period","class","sales"],["logo"],[]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>