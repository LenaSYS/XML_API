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
	$query = $log_db->prepare('select * from code;');
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,[]);
	}else{
			makeXml("climatecodes","code",$rows,[],["code","name","color"],[],[]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>