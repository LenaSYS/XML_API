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

				echo "<td>".$person->getAttribute("name")."</td>";
				foreach ($person->childNodes as $child){
            $text=trim($child->nodeValue);
            if($text!=""){
              	echo "<td>".$text."</td>";
            }
        }			
			
				echo "</tr>";	
    }
  
?>
</table>
</body>
</html>