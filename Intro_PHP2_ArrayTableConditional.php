<html>                                                                                                                                                
<body>                                                                                                                                                
<table border='1'>                                                                                                                                                 
<?php                                                                                                                                                 

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
  		
		echo "<tr><th>Country</th><th>Population</th><th>Cities</th></tr>";
		foreach ($arr as $country) {
				if($country[1]>30){
						echo "<tr style='background:#def;'>";
				}else{
						echo "<tr style='background:#fed;'>";				
				}
				echo "<td>".$country[0]."</td>";
				echo "<td>".$country[1]."</td>";
				echo "<td>";
				echo "<table>";
				echo "<tr><th>Name</th><th>Population</th></tr>";
				foreach($country[2] as $city){
						echo "<tr>";
						echo "<td>".$city[0]."</td>";	
						echo "<td>".$city[1]."</td>";
						echo "</tr>";
				}
				echo "</table>";
				echo "</td>";
				echo "</tr>";
		}

?>                                                                                                                                                    
</table>                                                                                                                                                
</body>                                                                                                                                               
</html>                                                                                                                                               