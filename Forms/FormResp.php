<html>
<body>
<?php
	echo "<div>In textbox: ";
	if(isset($_POST['textbox'])){
			echo $_POST['textbox'];
	}
	echo "</div>";
	print_r($_POST);
?>
</body>
</html>