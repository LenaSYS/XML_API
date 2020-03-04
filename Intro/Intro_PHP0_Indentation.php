<html>    
	<head>
			<style>
					span{
						padding-left:8px;
					}
			</style>
	</head>
<body>                                                                                                                                                
<table border='1'>                                                                                                                                                 
<?php                                                                                                                                                 

		// Indentation of array not according to rules
		// For easier reading of data structure
		$arr=array(
			array("Sweden",10,array(array("Stockholm",962),
				                      array("Gothenburg",572))),
			array("France",67,array(array("Paris",2200),
															array("Lyon",513),
															array("Toulouse",458),
															array("Lille",235))),
			array("Spain",46,array(array("Madrid",3180),
														 array("Barcelona",1600),
														 array("Seville",690))),
			array("Norway",5,array(array("Oslo",650)))
		);

		// Same level since this happens once for each PHP tag
		echo "<tr><th>Country</th><th>Population</th><th>Cities</th></tr>";
		foreach ($arr as $country) {
				// One level in/up since this code happens once per country
				echo "<tr>";
				echo "<td>".$country[0]."</td>";
				echo "<td>".$country[1]."</td>";

				// If we open the td tag _before_ opening the div
				echo "<td>";
			
				// We open the div tag here
				echo "<div style='padding:3px;margin:3px;border:1px solid green;background:#dfe;'>";
			
				foreach($country[2] as $city){
					// One further level up since this code happens once per city
					echo "<div>".$city[0]."</div>";
					echo "<div>".$city[1]."</div>";
				}
			
				// We close the div tag here
				echo "</div>";
			
				// We close the td tag _after_ the div
				echo "</td>";
			
				echo "</tr>";
		}

?>                                                                                                                                                    
</table>                                                                                                                                                
</body>                                                                                                                                               
</html>                                                                                                                                               