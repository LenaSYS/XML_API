<html>
	<body>
		<table border='1'>
<?php
  
	$lastelement="";
			
	function startElement($parser, $entityname, $attributes) {
			global $lastelement;	
		
			if($entityname=="PERSONS"){
			}else if($entityname=="PERSON"){
					echo "<tr>";
					echo "<td>".$attributes['SSN']."</td>";
			}else if($entityname=="BICYCLE"){
					echo "<td>";				
			}else if($entityname=="CAR"){
					echo "<td>".$attributes['LPNO']."</td>";
					echo "<td>";
			}
			
			if($entityname!="COLOR") $lastelement=$entityname;
	}
  
	function endElement($parser, $entityname) {
			if($entityname=="PERSON"){
					echo "</td></tr>";
			}else if($entityname=="CAR"||$entityname=="BICYCLE"){
					echo "</td>";
			}
	}
  
   function charData($parser, $chardata) {
		 	global $lastelement;
   		$chardata=trim($chardata);
   		if($chardata=="") return;
		 	if($lastelement=="CAR"){
					echo	"<span style='color:red;background:#fed;'>".$chardata."</span>";
			}else{
					echo $chardata;
			}
   }
  
   $parser = xml_parser_create();
   xml_set_element_handler($parser, "startElement", "endElement");
   xml_set_character_data_handler($parser, "charData");
  
   $file = 'example1b.xml';
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