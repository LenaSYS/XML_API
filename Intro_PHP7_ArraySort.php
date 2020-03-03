<html>                                                                                                                                                
<body>                                                                                                                                                                                                                                                                                                
<?php                                                                                                                                                 

		$arr=array(
			array("Sweden",10,array(array("Stockholm",962),
				                      array("Gothenburg",572))),
			array("France",67,array(array("Paris",2200),
															array("Lyon",513))),
			array("Spain",46,array(array("Madrid",3180),
														 array("Barcelona",1600),
														 array("Seville",690))),
			array("Norway",5,array(array("Oslo",650))),
			array("France",67,array(array("Toulouse",458),
															array("Lille",235)))
			
		);
  		
		// If country is not already in array, add it
		$countries=Array();
		foreach($arr as $country){
				if(!in_array($country[0],$countries)){
						array_push($countries,$country[0]);
				}
		}
	
		// Sort country array
		sort($countries);

		echo "<form method='POST' action='Intro_PHP_ArraySort.php'>";
		echo "<select name='country'>";
		foreach ($countries as $country) {
				echo "<option value='".$country."'>".$country."</option>";
		}
		echo "</select>";
		echo "</form>"
	
?>                                                                                                                                                                                                                                                                                                    
</body>                                                                                                                                               
</html>                                                                                                                                               