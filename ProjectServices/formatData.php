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

?>