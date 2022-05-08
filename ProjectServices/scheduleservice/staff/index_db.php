<?php

include '../../formatData.php';

// Check if paper is set otherwise set to default
if(isset($_GET['mode'])){
		$mode=$_GET['mode'];
}else{
		$mode="json";
}

try {
	$log_db = new PDO('sqlite:../scheduleservice.db');
	$query = $log_db->prepare('select * from staff;');
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,[]);
	}else{
			makeXml("stafflist","staff",$rows,[],["id","fname","lname","title","department","birthyear","telnr"],[]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>