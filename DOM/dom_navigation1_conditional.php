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
				if($person->getAttribute("shoesize")>51){
						echo "<tr style='background:#def;'>";				
				}else{
						echo "<tr style='background:#dfe;'>";				
				}

				echo "<td>";
				echo $person->getAttribute("ssn");
				echo "</td>";

				echo "<td>";
				echo $person->getAttribute("shoesize");
				echo "</td>";			

				// Name
				foreach ($person->getElementsByTagName('name') as $name){
						$text=trim($name->nodeValue);
						if($text!=""){
								echo "<td>";
								echo $text;
								echo "</td>";
						}
				}
			
				// Get us all addresses below person
				echo "<td><table>";
				foreach ($person->getElementsByTagName('address') as $address){
						echo "<tr>";
						echo "<td>";
						echo $address->getAttribute("street");
						echo "</td>";
						echo "</tr>";
				}
				echo "</table></td>";
			
				// Get us all cars below person
				echo "<td><table>";
				foreach ($person->getElementsByTagName('car') as $car){
						echo "<tr>";
					
						echo "<td>";
						echo $car->getAttribute("lpno");
						echo "</td>";
					
						echo "<td>";
						echo "<div style='width:20px;height:20px;border:1px solid black;background:".$car->nodeValue."' ></div>";
						echo "</td>";
			
						echo "</tr>";
				}
				echo "</table></td>";

				echo "</tr>";
				
    }
  
?>
</table>
</body>
</html>