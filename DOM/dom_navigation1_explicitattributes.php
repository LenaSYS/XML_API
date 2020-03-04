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

				echo "<td>".$person->getAttribute("ssn")."</td>";
				echo "<td>".$person->getAttribute("shoesize")."</td>";			

				// Name
				foreach ($person->getElementsByTagName('name') as $name){
						$text=trim($name->nodeValue);
						if($text!=""){
								echo "<td>".$text."</td>";
						}
				}
			
				// Get us all addresses below person
				echo "<td style='vertical-align:top;background:#def;'><table>";
				foreach ($person->getElementsByTagName('address') as $address){
						echo "<tr>";
						echo "<td>".$address->getAttribute("street")."</td>";
						echo "</tr>";
				}
				echo "</table></td>";
			
				// Get us all cars below person
				echo "<td><table>";
				foreach ($person->getElementsByTagName('car') as $car){
						echo "<tr>";
						echo "<td>".$car->getAttribute("lpno")."</td>";
						echo "<td>".$car->nodeValue."</td>";
						echo "</tr>";
				}
				echo "</table></td>";

				echo "</tr>";
				
    }
  
?>
</table>
</body>
</html>