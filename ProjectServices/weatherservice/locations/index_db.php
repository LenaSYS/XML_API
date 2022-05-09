<?php

include '../../formatData.php';

// Check if paper is set otherwise set to default
if(isset($_GET['mode'])){
		$mode=$_GET['mode'];
}else{
		$mode="xml";
}

try {
	$log_db = new PDO('sqlite:../weatherservice.db');
	$query = $log_db->prepare('select * from location;');
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