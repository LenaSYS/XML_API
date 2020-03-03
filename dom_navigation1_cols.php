<html>
<body>
<table border='1'>
<?php
 
    $file = 'example1.xml';
    
    $dom = new DomDocument;
    $dom->preserveWhiteSpace = FALSE;
    $dom->load($file);
    
    $people = $dom->getElementsByTagName('person');
    foreach ($people as $person){
				echo "<tr>";

				$attributes = $person->attributes;
				foreach ($attributes as $index=>$attr) {
						echo "<td>".$attr->value."</td>";
				}

				foreach ($person->childNodes as $child){
					
						$attributes = $child->attributes;
						foreach ($attributes as $index=>$attr) {
									echo "<td>".$attr->value."</td>";
						}					
					
            $text=trim($child->nodeValue);
            if($text!=""){
              	echo "<td>".$text."</td>";
            }
        }			
			
				echo "</tr>";
				
    }
  
?>
</table>
</body>
</html>