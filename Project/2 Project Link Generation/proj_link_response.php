<html>
<body>
<div style='width:300px;padding:10px;margin:10px;'>
<?php
 
		// Assign country variable - Sweden is default
		if(isset($_GET['ssn'])){
				$ssn=$_GET['ssn'];
		}else{
				$ssn="Unknown";
		}
		
		echo "<div>You clicked on ssn".$ssn."</div>";
  
?>
</div>
</body>
</html>