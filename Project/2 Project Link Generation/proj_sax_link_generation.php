<html>
	<body>
		<table border='1'>
<?php
  
	function startElement($parser, $entityname, $attributes) {
		if($entityname=="PERSON"){
				echo "<div>";
				echo "<a href='response.php?ssn=".$attributes['SSN']."'>".$attributes['NAME']."</a>";
				echo "</div>";
		}
	}

	function endElement($parser, $entityname) {
	}

	function charData($parser, $chardata) {
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