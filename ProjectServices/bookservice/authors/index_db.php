<?php

function makeJson($rows,$jsonattrs)
{
		header('Content-Type: application/json; charset=utf-8');		
		echo "[";
		foreach($rows as $no=>$row){
			if($no>0) echo ",";
			echo "{";
			$i=0;
			foreach($row as $nam=>$val){
					if($i++>0) echo ",";	
					echo '"'.$nam.'":"'.$val.'"';
			}
			echo "}";
		}
		echo "]";
}

function makeXml($rootnode,$rowelement,$rows,$jsonattrs,$attrs,$elements)
{
		header("Content-type: text/xml");
		
		// Generate root node
		echo "<$rootnode>";

		// Geneerate attributes for each
		foreach($rows as $no=>$row){
			echo "<$rowelement ";

			foreach($row as $nam=>$val){
					if(in_array($nam,$attrs)){
							echo $nam."='".$val."' ";
					}
			}
			echo ">";
			foreach($row as $nam=>$val){
					if(in_array($nam,$elements)){
							echo "<$nam>".$val."</$nam>";
					}
			}			
			echo "</$rowelement>";

		}		

		echo "</$rootnode>";
}

// header("Content-type: text/xml");
// 
// echo json_encode($data);

// Check if paper is set otherwise set to default
if(isset($_GET['mode'])){
		$mode=$_GET['mode'];
}else{
		$mode="json";
}

//$coursename=getOP('coursename');

try {
	$log_db = new PDO('sqlite:../books.db');
	$query = $log_db->prepare('select * from author;');
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,[]);
	}else{
			makeXml("authors","author",$rows,[],["role"],["about","lastname","firstname","birthyear","deathyear","imgurl","signature"]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

/*
if(!$query->execute()) {
	$rows = $query->fetchAll();
	foreach($rows as $row){
			echo "<pre>";
			print_r($row);
			echo "</pre>";
	}
}else{
		print_r($log_db->errorInfo());
}
*/
?>