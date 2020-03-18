<html>                                                                                                                                                
<body>                                                                                                                                                
<pre>
<?php                                                                                                                                                 

		$url="http://localhost/XML_API/ServiceCall/citiesservice/countries";
		$jsontext = file_get_contents($url);
		$arr = json_decode($jsontext);
	
		print_r($arr);

?>    
</pre>
</body>                                                                                                                                               
</html>                                                                                                                                               