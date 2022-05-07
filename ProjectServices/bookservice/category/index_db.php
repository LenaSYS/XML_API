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
          if(in_array($nam,$jsonattrs)){
              if($i++>0) echo ",";	
              echo '"'.$nam.'":'.str_replace('__','"',$val);
          }else{
              if($i++>0) echo ",";	
              echo '"'.$nam.'":"'.$val.'"';
          }
			}
			echo "}";
		}
		echo "]";
}

function formatXml($data,$attname,$attrs,$elements)
{
    foreach($data as $item){
        foreach ($item as $key => $value) {
            echo "<$attname ";         
					  if(in_array($key,$attrs)){
              echo $key."='".$value."' ";
            }
            echo ">";
					  if(in_array($key,$elements)){
							echo "<$key>".$value."</$key>";
            }
            echo "</$attname>";
            // print "$key => $value\n";
        }
    }
}

function makeSimpleXml($rootnode,$rowelement,$rows,$jsonattrs,$attrs,$elements)
{
		header("Content-type: text/xml");

    echo "<$rootnode>";
		foreach($rows as $no=>$row){
        echo "<$rowelement>";
        foreach($row as $nam=>$val){
					if(in_array($nam,$elements)){
							echo $val;
					}
			  }
        echo "</$rowelement>";
    }
    echo "</$rootnode>";
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
					}else if(in_array($nam,$jsonattrs)){
            echo "<$nam>";
            formatXml(json_decode(str_replace('__','"',$val)),substr($nam,0,-1),$attrs,$elements);
            echo "</$nam>";    
          }
			}			
			echo "</$rowelement>";

		}		

		echo "</$rootnode>";
}

// Check if paper is set otherwise set to default
if(isset($_GET['mode'])){
		$mode=$_GET['mode'];
}else{
		$mode="json";
}

//$coursename=getOP('coursename');

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