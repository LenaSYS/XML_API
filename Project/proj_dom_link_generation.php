<html>
<body>
<div style='width:300px;padding:10px;margin:10px;'>
<?php
 
 		$xml = file_get_contents('example1.xml');
    $dom = new DomDocument;
    $dom->preserveWhiteSpace = FALSE;
    $dom->loadXML($xml);
    
    $people = $dom->getElementsByTagName('person');
    foreach ($people as $person){
				echo "<div>";
			
				echo "<a href='response.php?ssn=".$person->getAttribute("ssn")."'>".$person->getAttribute("name")."</a>";
			
				echo "</div>";
				
    }
  
?>
</div>
</body>
</html>