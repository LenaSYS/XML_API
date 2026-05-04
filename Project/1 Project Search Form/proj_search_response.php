<html>
<body>
<div style='width:300px;padding:10px;margin:10px;'>
<?php
 
		// Assign country variable - Sweden is default
		if(isset($_POST['ssn'])){
				$ssn=$_POST['ssn'];
		}else{
				$ssn="Unknown";
		}
		
		echo "<div>You are searching in ssn basd on search string".$ssn."</div>";
	
		$url="https://wwwlab.iit.his.se/gush/XMLAPI/personservice/person?ssnsearch=".$ssn;
		$data = file_get_contents($url);
	
		// SAX / XSLT / DOM Code
  
?>
</div>
</body>
</html>