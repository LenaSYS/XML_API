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
	$query = $log_db->prepare('select * from room;');
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["entries"]);
	}else{
			makeXml("rooms","room",$rows,["entries"],["courseid","coursname","starttime","endtime","sign","comment","group","type"],[]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>