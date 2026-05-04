<html>
	<head>
		<style>
			body{ font-family: arial narrow;}
			.city2{
				height: 20px;width: 100px;background: linear-gradient(to right, lightblue 0px, #8ad 14px, white 16px);
			}	
			.city5, .city6{
				height: 20px;width: 100px;background: linear-gradient(to right, lightblue 0px, #8ad 24px, white 26px);
			}	
			.city7{
				height: 20px;width: 100px;background: linear-gradient(to right, lightblue 0px, #8ad 30px, white 32px);
			}				
			.city10{
				height: 20px;width: 100px;background: linear-gradient(to right, lightblue 0px, pink 50px, white 52px);
			}	
			.city16{
				height: 20px;width: 100px;background: linear-gradient(to right, lightblue 0px, pink 50px,purple 80px, white 82px);
			}			
			.city22, .city32{
				height: 20px;width: 100px;background: linear-gradient(to right, lightblue 0px, pink 50px,purple 98px, white 100px);
			}	
			
			</style>
	</head>
<body>                                                                                                                                                
<table border='1'>                                                                                                                                                 
<?php            
	
		$arr=array(
			array("Sweden",10,array(array("Stockholm",962, 18.06, 59.32),
				                      array("Gothenburg",572, 11.97, 57.70 ))),
			array("France",67,array(array("Paris",2200, 2.35, 48.85),
															array("Lyon",513, 4.83, 45.76),
															array("Toulouse",458, 1.44, 43.60),
															array("Lille",235, 3.05, 50.62))),
			array("Spain",46,array(array("Madrid",3180, 3.70, 40.41),
														 array("Barcelona",1600, 2.17, 41.38),
														 array("Seville",690, 5.98, 37.38))),
			array("Norway",5,array(array("Oslo",650, 10.75, 59.91)))
		);
  		
		foreach ($arr as $country) {
				echo "<tr>";
				echo "<td>".$country[0]."</td>";
				echo "<td>".$country[1]."</td>";
				echo "<td>";
				echo "<table>";
				foreach($country[2] as $city){
						echo "<tr>";
						echo "<td><div class='city".round($city[1]/100)."'>".$city[0]."</div></td>";
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