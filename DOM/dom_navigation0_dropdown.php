<html>
	<body>
		<form metod='POST' action='response.php'>
		<select name='person'>
<?php
 
 		$xml = file_get_contents('example1.xml');
    $dom = new DomDocument;
    $dom->preserveWhiteSpace = FALSE;
    $dom->loadXML($xml);
    
    $people = $dom->getElementsByTagName('person');
    foreach ($people as $person){
				echo "<option value='".$person->getAttribute("ssn")."'>";
				echo $person->getAttribute("name");       
    }
  
?>
		</select>
		<button>Submit!</button>
		</form>
	</body>
</html>