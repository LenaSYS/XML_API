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

				$attributes = $person->attributes;
				echo "<td>".$person->getAttribute("name")."</td>";	
			
				echo "<td><table>";
				foreach ($person->childNodes as $child){
						echo  "<tr>";

						$text=trim($child->nodeValue);
            if($text!=""){
              	echo "<td>".$text."</td>";
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