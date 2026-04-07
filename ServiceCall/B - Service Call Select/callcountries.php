<html>                                                                                                                                                
<body>                                                                                                                                                
<form method='post' action='../D - Service Call Dynamic/callcitiesDynamic.php'>   
<div>Note: Form action link posts information to example D (Dynamic service call)</div>                    
<?php                                                                                                                                                 

		$url="https://wwwlab.webug.se/examples/XML/citiesservice/countries/";
		$jsontext = file_get_contents($url);
		$arr = json_decode($jsontext);
	
		echo "<select name='country'>";
		foreach($arr as $country){
				echo "<option>".$country."</option>";
		}
		echo "</select>";

?>    
<input type="submit" value='Post form!'>
</form>                                                                                                                                                
</body>                                                                                                                                               
</html>                                                                                                                                               