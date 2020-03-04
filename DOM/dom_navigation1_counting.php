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
				echo "<td>".$person->getElementsByTagName('address')->length." addresses</td>";
				echo "<td>".$person->getElementsByTagName('car')->length." cars</td>";
					
				echo "</tr>";
				
    }
  
?>
</table>
</body>
</html>