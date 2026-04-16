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
						if($child->nodeName=="address"){
								echo "<td>".$child->getAttribute("street")."</td>";
						}else if($child->nodeName=="car"){
									echo "<td style='color:teal;'>";
									$child->getAttribute("lpno");						
									echo "</td><td>";
									$text=trim($child->nodeValue);
									if($text!=""){
											echo "&nbsp;".$text;
									}
									echo "</td>";					
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