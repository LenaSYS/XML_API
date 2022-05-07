<?php
header("Content-type: text/xml");
?>
<NEWSPAPERS>
<?php

	$output=false;
	
	function startElement($parser, $entityname, $attributes) {
			global $output;
			if($entityname=="NEWSPAPER"){
					echo "<NEWSPAPER ";
				
					foreach ($attributes as $attname => $attvalue) {
							echo $attname."='".$attvalue."' ";
					}
						
					echo ">";
					$output=true;
			}
	}
  
	function endElement($parser, $entityname) {
			global $output;
			if($entityname=="NEWSPAPER"){
					echo "</NEWSPAPER>\n";
					$output=false;
			}
	}
  
   function charData($parser, $chardata) {
			global $output;
		 	$chardata=trim($chardata);
   		if($chardata=="") return;
   }
  
   $parser = xml_parser_create();
   xml_set_element_handler($parser, "startElement", "endElement");
   xml_set_character_data_handler($parser, "charData");
  
   $file = 'example1_2019.xml';
   $data = file_get_contents($file);
  
   if(!xml_parse($parser, $data, true)){
      printf("<P> Error %s at line %d</P>", xml_error_string(xml_get_error_code($parser)),xml_get_current_line_number($parser));
   }else{
      // print "<br>Parsing Complete!</br>";
   }
  
   xml_parser_free($parser);

	 ?>
</NEWSPAPERS>