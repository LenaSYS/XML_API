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
	$query = $log_db->prepare('select * from forecast;');
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["tempdata"]);
	}else{
			makeXml("weatherdata","forecast",$rows,["tempdata"],["place","fromtime","totime","period","name","UNIT","VALUE","ALTUNIT","ALTVALUE","WSYMB3NUMBER","NUMBER","NAME","DEG","CODE","MPS","DEF"],[],[]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>