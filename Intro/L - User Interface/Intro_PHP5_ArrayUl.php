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
	
		//echo "<tr><th>Country</th><th>Population</th><th>Cities</th></tr>";
		echo "<ul>";
		foreach ($arr as $country) {
				echo "<li>";
				echo $country[0]." ".$country[1];
				echo "<br>";
				foreach($country[2] as $city){
						echo "<ul>";
						echo "<li>".$city[0]."&nbsp;".$city[1]."</li>";
						echo "</ul>";
				}
				echo "</li>";
		}
		echo "</ul>";

?>                                                                                                                                                    
</table>                                                                                                                                                
</body>                                                                                                                                               
</html>                                                                                                                                               