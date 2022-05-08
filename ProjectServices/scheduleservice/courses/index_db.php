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
	$query = $log_db->prepare('select * from course;');
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