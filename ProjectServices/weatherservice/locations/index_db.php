<?php

include '../../formatData.php';

//Endpoint filters
// weatherservice/locations?mode=(json/xml)
// weatherservice/locations?sort=(name/type/country/province/county/municipality/charter/elevation/postalcode/areacode)
// weatherservice/locations?(name/type/country/province/county/municipality/charter/elevation/postalcode/areacode)=(Matching Term) 
//     weatherservice/locations?country=Sweden  
// weatherservice/locations?namesearch=(searchterm)
//     weatheerservice/locations?namesearch=ums
// weatherservice/locations?climatesearch=(searchterm)
//     weatheerservice/locations?climatesearch=Tropic
//
// Example:
// weatherservice/locations?namesearch=ona&sort=name&mode=xml

$mode=getParam("mode","xml");
$sort=urlencode(getParam("sort","none"));
if(!in_array($sort,Array("name","type","country","province","county","municipality","charter","elevation","postalcode","areacode"))) $sort="none";

$param="";
$search=getParam("namesearch","none");
if($search!="none") $param=" WHERE name like '%".$search."%' ";
$search=getParam("climatesearch","none");
if($search!="none") $param=" WHERE climate like '%".$search."%' ";

if($param=="") $param=makeMatches(Array("name","type","country","province","county","municipality","charter","elevation","postalcode","areacode"));


try {
	$log_db = new PDO('sqlite:../weatherservice.db');
	$str='select * from location ';
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="order by ".$sort;
	$str.=";";	
	$query = $log_db->prepare($str);		
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["timezone","geolocation","climate","area","rank"]);
	}else{
			makeXml("locations","location",$rows,["timezone","geolocation","climate","area","rank"],["elevation","name","type","country","province","county","municipality","url"],["postalcode","areacode","imgurl","hyperlink"],Array());
  }

}catch (PDOException $e){
    echo $e->getMessage();
}

?>