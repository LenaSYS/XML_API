<html>
	<body>
		<form metod='POST' action='response.php'>
		<select name='person'>
<?php
  
	$output=false;
			
	function startElement($parser, $entityname, $attributes) {
			if($entityname=="PERSON"){
					echo "<option value='".$attributes['SSN']."'>";
					echo $attributes['NAME'];
			}
	}
  
	function endElement($parser, $entityname) {
			if($entityname=="PERSON"){
					echo "</option>";
			}
	}
  
   function charData($parser, $chardata) {
		 	// Ignore Char Data 
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
		</select>
		<button>Submit!</button>
		</form>
	</body>
</html>