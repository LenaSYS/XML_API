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
	$query = $log_db->prepare('select * from repo;');
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["tempdata"]);
	}else{
			makeXml("repos","repo",$rows,["files","subdirectory"],["name","url","type","fullname"],[],["subdirectory"=>"file","files"=>"file"]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>