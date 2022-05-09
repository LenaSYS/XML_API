<?php

include '../../formatData.php';

// Check if paper is set otherwise set to default
if(isset($_GET['mode'])){
		$mode=$_GET['mode'];
}else{
		$mode="xml";
}

try {
	$log_db = new PDO('sqlite:../githubservice.db');
	$query = $log_db->prepare('select * from commits;');
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["parents"]);
	}else{
			makeXml("commits","commit",$rows,[],["repo","id","space","time","timestamp","message","author","login"],["avatar"],[]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>