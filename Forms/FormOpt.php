<html>
<body>
<?php

		$arr=array(
			array('Sweden',10,array(array('Stockholm',962),
				 array('Gothenburg',572))),
			array('France',67,array(array('Paris',2200),
															array('Lyon',513),
															array('Toulouse',458),
															array('Lille',235))),
			array('Spain',46,array(array('Madrid',3180),
														 array('Barcelona',1600),
														 array('Seville',690))),
			array('Norway',5,array(array('Oslo',650)))
		);

		echo "<form method='post' action='formOpt.php'>";

		print_r($_POST);

		echo "<table border='1'><tr><th>Country</th><th>Population</th><th colspan='4'>Cities</th></tr>";	
		foreach($_POST as $key => $val){
				// Show that country
				foreach ($arr as $country) {
						if($country[0]==$val){
								echo "<tr>";
								echo "<td>".$country[0]."</td>";
								echo "<td>".$country[1]."</td>";
								foreach($country[2] as $city){
										echo "<td>";
										echo "<table>";
										echo "<tr><td>".$city[0]."</td></tr>";	
										echo "<tr><td>".$city[1]."</td></tr>";
										echo "</table>";
										echo "</td>";
								}
								echo "</tr>";
						}
				}			
		}
		echo "</table>";

		$i=0;
		foreach ($arr as $country) {
				echo "<div>";
				echo $country[0]."<input type='checkbox' name='ch".$i."' value='".$country[0]."' >";
				echo "</div>";				
				$i++;
		}
		echo "<input type='submit' name='submit' value='send' >";
		echo "</form>";

?>
</body>
</html> 