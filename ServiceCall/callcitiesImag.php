<html>                                                                                                                                                
<body>                                                                                                                                                
<?php                                                                                                                                                 

		$url="https://wwwlab.iit.his.se/gush/XMLAPI/citiesservice/countries/";
		$jsontext = file_get_contents($url);
		$arr = json_decode($jsontext);
	
		echo "<table border='1'>";
		foreach($arr as $country){
				echo "<tr>";
        echo "<td>".$country."</td>";
        echo "<td><img src='https://wwwlab.iit.his.se/gush/XMLAPI/citiesservice/cityimages/".$country.".png' style='width:100px;'></td>";
        echo "</tr>";
		}
		echo "</table>";
?>    
</body>                                                                                                                                               
</html>                                                                                                                                                   