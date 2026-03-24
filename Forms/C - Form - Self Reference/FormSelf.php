<html>
<body>
  
<form action='FormSelf.php' method='POST'>
		<div><label>Textbox:</label><input type='text' name='textbox'></div>
		<div>
				<label>Selectbox:</label>
				<select name='selectbox'>
						<option value='AOpt'>First Option</option>
						<option value='BOpt'>Second Option</option>
						<option value='COpt'>Third Option</option>				
				</select>
		</div>
		<div><button >Skicka!</button></div>
</form>

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