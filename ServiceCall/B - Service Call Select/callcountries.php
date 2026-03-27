<html>                                                                                                                                                
<body>                                                                                                                                                
<form method='post' action='callcitiesDynamic.php'>                       
<?php                                                                                                                                                 

		$url="https://wwwlab.iit.his.se/gush/XMLAPI/citiesservice/countries/";
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