<html>                                                                                                                                                
<body>                                                                                                                                                
<pre>
<?php                                                                                                                                                 

		$url="https://wwwlab.webug.se/examples/XML/citiesservice/countries/";
		$jsontext = file_get_contents($url);
		$arr = json_decode($jsontext);
	
		print_r($arr);

?>    
</pre>
</body>                                                                                                                                               
</html>                                                                                                                                               