<html>
	<body>
		<form metod='POST' action='response.php'>
<?php
 
 		$xml = file_get_contents('https://wwwlab.iit.his.se/gush/XMLAPI/articleservice/papers');
    $dom = new DomDocument;
    $dom->preserveWhiteSpace = FALSE;
    $dom->loadXML($xml);
    
    $newspapers= $dom->getElementsByTagName('NEWSPAPER');
    foreach ($newspapers as $newspaper){
  				echo $newspaper->getAttribute("NAME");		
    }
		
		echo "<select name='paper'>";
		
		echo "</select>";
		
  
?>
		<button>Submit!</button>
		</form>
	</body>
</html>