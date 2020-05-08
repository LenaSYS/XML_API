<html>
<body>
<pre>
<?php
 
 		$xml = file_get_contents('example1.xml');
    $dom = new DomDocument;
    $dom->preserveWhiteSpace = FALSE;
    $dom->loadXML($xml);
    
    $people = $dom->getElementsByTagName('person');
    foreach ($people as $person){
    		echo $person->tagName."<br>";
    }
  
?>
</pre>
</body>
</html>