<html>                                                                                                                                                
<body>                                                                                                                                                
<table border='1'>                                                                                                                                                 
<?php                                                                                                                                                 

		$url="https://wwwlab.iit.his.se/gush/XMLAPI/citiesservice/city?country=Sweden";
		$jsontext = file_get_contents($url);
		$arr = json_decode($jsontext);
  		
		echo "<tr><th>Country</th><th colspan='4'>Cities</th></tr>";
		echo "<tr>";
		echo "<td>Sweden</td>";
		foreach($arr as $city){
				echo "<td>";
				echo "<table>";
				echo "<tr><td>".$city[0]."</td></tr>";	
				echo "<tr><td>".$city[1]."</td></tr>";
				echo "</table>";
				echo "</td>";
		}
		echo "</tr>";

?>                                                                                                                                                    
</table>                                                                                                                                                
</body>                                                                                                                                               
</html>                                                                                                                                               