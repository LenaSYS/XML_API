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

				echo "<td>".$person->getAttribute("street")."</td>";
				foreach ($person->childNodes as $child){
						if($child->nodeName=="address"){
								echo "<td style='color:red;'>".$child->getAttribute("street")."</td>";
						}else if($child->nodeName=="car"){
								echo "<td style='color:teal;'>".$child->getAttribute("lpno")."</td>";
						}
        }			
			
				echo "</tr>";
				
    }
  
?>
</table>
</body>
</html>