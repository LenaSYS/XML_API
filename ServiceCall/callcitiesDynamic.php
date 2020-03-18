<html>                                                                                                                                                
<body>                                                                                                                                                
<table border='1'>                                                                                                                                                 
<?php                                                                                                                                                 

		// Assign country variable - Sweden is default
		if(isset($_POST['country'])){
				$country=$_POST['country'];
		}else{
				$country="Sweden";
		}
	
		// Add country to url and proceed normally
		$url="http://localhost/XML_API/ServiceCall/citiesservice/city?country=".$country;
		$jsontext = file_get_contents($url);
		$arr = json_decode($jsontext);
  		
		// Make headings
		echo "<tr><th>Country</th><th colspan='4'>Cities</th></tr>";
		echo "<tr>";
	
		// Print country
		echo "<td>".$country."</td>";
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