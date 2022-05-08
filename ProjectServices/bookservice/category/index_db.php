<?php

include '../../formatData.php';

// Check if paper is set otherwise set to default
if(isset($_GET['mode'])){
		$mode=$_GET['mode'];
}else{
		$mode="xml";
}

try {
	$log_db = new PDO('sqlite:../books.db');
	$query = $log_db->prepare('select * from category;');
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["categories","category",""]);
	}else{
			makeSimpleXml("categories","category",$rows,[],[],["category"]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>