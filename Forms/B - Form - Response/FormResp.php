<html>
<body>
<?php
	echo "<div>In selectbox: ";
	if(isset($_POST['selectbox'])){
			echo $_POST['selectbox'];
	}
	echo "</div>";

	if(isset($_POST['textbox'])){
			echo "<div style='border:1px solid blue;'>In textbox: ";
			echo $_POST['textbox'];
			echo "</div>";	
	}

	echo "<pre style='border:1px solid red;'>";
	print_r($_POST);
	echo "</pre>";
?>
</body>
</html>
