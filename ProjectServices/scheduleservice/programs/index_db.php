<?php

include '../../formatData.php';

// Check if paper is set otherwise set to default
if(isset($_GET['mode'])){
		$mode=$_GET['mode'];
}else{
		$mode="xml";
}

try {
	$log_db = new PDO('sqlite:../scheduleservice.db');
	$query = $log_db->prepare('select * from program;');
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