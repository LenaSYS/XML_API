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
			
				if($person->getAttribute("shoesize")>51){
						echo "<tr style='background:#def;'>";				
				}else{
						echo "<tr style='background:#dfe;'>";				
				}

				echo "<td>".$person->getAttribute("name")."</td>";
			
				echo "</tr>";
				
    }
  
?>
</table>
</body>
</html>