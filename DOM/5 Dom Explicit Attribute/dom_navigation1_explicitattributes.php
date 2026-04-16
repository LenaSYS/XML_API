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

				// Does not work on university server until further notice
				// $attributes = $person->attributes;
				// echo "<td>".$attributes['name']->value."</td>";

				echo "<td>".$person->getAttribute("ssn")."</td>";		
			
				echo "</tr>";
				
    }
  
?>
</table>
</body>
</html>