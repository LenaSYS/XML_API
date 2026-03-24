<html>
<body>
<table border="1">
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
    
		echo "<form method='post' action='formRespSelect.php'>";
		echo "<select name='country'>";
		foreach ($arr as $country) {
				echo "<option value='".$country[0]."' >".$country[0]."</option>";
		}
		echo "</select>";
		echo "<button>Go!</button>";
		echo "</form>";

?>
</table>
</body>
</html> 