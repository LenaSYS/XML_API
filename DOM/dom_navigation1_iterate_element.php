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

				// Iterate over Attributes in person
				$attributes = $person->attributes;
				foreach ($attributes as $index=>$attr) {
						echo "<td>".$attr->value."</td>";
				}

				foreach ($person->childNodes as $child){
						if($child->nodeName=="name"){
								$text=trim($child->nodeValue);
								if($text!=""){
										echo "<td>".$text."</td>";
								}
						}
						// Addresses are handled as columns
						if($child->nodeName=="address"){
								$attributes = $child->attributes;
								foreach ($attributes as $index=>$attr) {
										echo "<td>".$attr->value."</td>";
								}
						}
				}
			
				// Get us all cars below person, handle as rows
				echo "<td><table>";
				foreach ($person->getElementsByTagName('car') as $child){
						echo "<tr>";
					
						echo "<td>".$child->nodeValue."</td>";
					
						$attributes = $child->attributes;
						foreach ($attributes as $index=>$attr) {
								echo "<td>".$attr->value."</td>";
						}					
						echo "</tr>";
				}
				echo "</table></td>";

				echo "</tr>";
				
    }
  
?>
</table>
</body>
</html>