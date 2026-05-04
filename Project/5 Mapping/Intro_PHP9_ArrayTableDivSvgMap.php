<html>
	<head>
		<style>
			body{ font-family: arial narrow;}
			.grad{
					background: linear-gradient(to right, blue 0px, green 60px, yellow 120px, orange 180px, red 240px);
					height: 20px;
			}	
			.grae{
					position: absolute;
					bottom:0px;
					width:40px;
					background: linear-gradient(to right, #a84 0%, #fed 40%,#fed 65%, #a84 90%);
					text-align: center;
			}
			.graf{
					height:100px;
					width:42px;
					position:relative;
					background: linear-gradient(to right, #310 0%, #861 40%,#750 65%, #310 90%);
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
			array("Spain",46,array(array("Madrid",3180, -3.7, 40.41),
														 array("Barcelona",1600, 2.17, 41.38),
														 array("Seville",690, -5.98, 37.38))),
			array("Norway",5,array(array("Oslo",650, 10.75, 59.91)))
		);
  		
		foreach ($arr as $country) {
				echo "<tr>";
				echo "<td>".$country[0]."</td>";
				echo "<td>";
				echo "<table>";
				foreach($country[2] as $city){
						echo "<tr>";
					
						echo "<td style='width:100px;'>".$city[0]."</td>";	
						
						// With svg
						echo "<td>";
						echo "<div style='width:200px;height:200px;position:relative;'>";
						echo "<img src='europe.png' style='position:absolute;left:0xp;top:0px;' >";
						echo "<svg viewBox='0 0 200 200' style='position:absolute;left:0px;top:0px;border:1px dotted red;z-index:500;' >";
						echo "<circle cx='".((3.10*$city[2])+30.20)."' cy='".((-3.73*$city[3])+305.26)."' r='3' fill='#8d4' stroke='#000' >";
						echo "</svg>";
						echo "</div>";
					
						// With div
						echo "<td>";
						echo "<div style='width:200px;height:200px;position:relative;'>";
						echo "<img src='europe.png' style='position:absolute;left:0xp;top:0px;' >";
						echo "<div style='position:absolute;z-index:500;left:".round((3.10*$city[2])+30.20-3)."px;top:".round((-3.73*$city[3])+305.26-3)."px;width:4px;height:4px;border-radius:3px;border:1px solid black;background:#8d4;'></div>";
						echo "</div>";					
						echo "</td>";
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