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
	$query = $log_db->prepare('select * from section;');
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["files"]);
	}else{
			makeXml("files","section",$rows,["lines"],["filename","author","commitid","message","row"],["code"],["lines"=>"line"]);
	}
	
  // SECTION(filename,author,commitid,message,timestamp,lines)

}catch (PDOException $e){
    echo $e->getMessage();
}

?>