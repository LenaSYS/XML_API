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

function formatXml($data,$attname,$jsonattrs,$attrs,$elements,$convert)
{
    if($data==null){

    }else{
      foreach($data as $item){
        if(gettype($item)=="string"){
             $convertedname=$convert[$attname];
             echo "<$convertedname>";
             echo $item;
             echo "</$convertedname>";
        }else if(gettype($item)=="object"){
            if(isset($convert[$attname])){
                $attname=$convert[$attname];
            }
            echo "<$attname ";  
            foreach ($item as $key => $value) {       
                  if(in_array($key,$attrs)){
                    echo $key."='".$value."' ";
                  }
            }
            echo ">";
            foreach ($item as $key => $value) {   
              if(in_array($key,$elements)){
                    echo "<$key>".$value."</$key>";
                }
                if(in_array($key,$jsonattrs)){
                    formatXml($value,$key,$jsonattrs,$attrs,$elements,$convert);
                }
            }
            echo "</$attname>";
        }else{
            echo "Other".gettype($item);
        }
      }
    }
}

function makeXml($rootnode,$rowelement,$rows,$jsonattrs,$attrs,$elements,$convert)
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
            formatXml(json_decode(str_replace('__','"',$val)),$nam,$jsonattrs,$attrs,$elements,$convert);
            echo "</$nam>";    
          }
			}			
			echo "</$rowelement>";

		}		

		echo "</$rootnode>";
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

?>