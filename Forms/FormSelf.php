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
	echo "<div>In textbox: ";
	if(isset($_POST['textbox'])){
			echo $_POST['textbox'];
	}
	echo "</div>";
	print_r($_POST);
?>
	
</body>
</html>