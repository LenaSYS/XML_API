<html>
<body>
<pre>
<?php
		// Array containing three strings "one" "two" and "three"
		$arr=array("one","two","three");
  		
		$i=0;
		foreach ($arr as $value) {
				$i++;
				echo $i." ".$value."<br>";
		}
		echo "<br>";
  		
		// It is not possible to print an array directly
		echo $arr."<br><br>";
  		
		// Arrays are printed with print_r
		print_r($arr);
?>
</pre>
</body>
</html>