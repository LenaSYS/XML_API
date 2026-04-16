<html>
<body>
<table border='1'>
<?php
 
 		$xml = file_get_contents('example1.xml');
    $dom = new DomDocument;
    $dom->preserveWhiteSpace = FALSE;
    $dom->loadXML($xml);
    
    $people = $dom->getElementsByTagName('person');
    foreach ($people as $person){
				echo "<tr>";

				// Iterate over Attributes in person
				$attributes = $person->attributes;
				foreach ($attributes as $index=>$attr) {
						echo "<td>".$attr->value."</td>";
				}	
			
				echo "</tr>";
				
    }
  
?>
</table>
</body>
</html>