<html>
	<body>
		<table border='1'>
<?php
  
	function startElement($parser, $entityname, $attributes) {
			if($entityname=="PERSONS"){
			}else if($entityname=="PERSON"){
					// Assumes shoesize exists.. if it does not, this gives an error
					if($attributes['SHOESIZE']>51){
							echo "<tr style='background:#def;' >";					
					}else{
							echo "<tr style='background:#fed;' >";					
					}
					echo "<td>";
					echo $attributes['SSN'];
					echo "</td>";
					echo "<td>";
					echo $attributes['SHOESIZE'];
					echo "</td>";
			}else if($entityname=="NAME"){
					echo "<td>";
			}else if($entityname=="CAR"){
					echo "<td>";
					echo $attributes['LPNO'];
			}else if($entityname=="ADDRESS"){
					echo "<td>";
					echo $attributes['STREET'];
			}else{
				echo "<td>";
			}
	}
  
	function endElement($parser, $entityname) {
			if($entityname=="PERSON"){
					echo "</table></td>";
					echo "</tr>";
			}else if($entityname=="NAME"){
					// After name element we start new table for rest of element
					echo "</td><td><table>";
			}else{
					echo "</td></tr>";
			}
	}
  
   function charData($parser, $chardata) {
   		$chardata=trim($chardata);
   		if($chardata=="") return;
		 	echo $chardata;
   }
  
   $parser = xml_parser_create();
   xml_set_element_handler($parser, "startElement", "endElement");
   xml_set_character_data_handler($parser, "charData");
  
   $file = 'example1.xml';
   $data = file_get_contents($file);
  
   if(!xml_parse($parser, $data, true)){
      printf("<P> Error %s at line %d</P>", xml_error_string(xml_get_error_code($parser)),xml_get_current_line_number($parser));
   }else{
      // print "<br>Parsing Complete!</br>";
   }
  
   xml_parser_free($parser);
?>
		</table>
	</body>
</html>