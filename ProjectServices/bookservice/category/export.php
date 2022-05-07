<html>
<body>
<pre>
<?php
	$output=Array();
	$name="";
	
	function startElement($parser, $entityname, $attributes) {
			global $output;
			global $name;

			$name=$entityname;

			if($name=="CATEGORY") $output=Array();

			foreach($attributes as $name=>$value){
					if(trim($value)!="") $output[strtolower($name)]=$value;
			}
	}
  
	function endElement($parser, $entityname) {
			global $output;

			if($entityname=="CATEGORY"){
					// print_r($output);

					$cols="";
					$values="";

					foreach($output as $name=>$value){
							if($cols!="") $cols.=",";
							$cols.=$name;
							if($values!="") $values.=",";
							$values.='"'.$value.'"';

					}
					echo "INSERT INTO ".$entityname."(".$cols.") VALUES(".$values.");\n";
			}			
	}
  
   function charData($parser, $chardata) {
		 	global $output;
		 	global $name;

			if(trim($chardata)!=""){
					if(isset($output[strtolower($name)])){
							$output[strtolower($name)].=trim($chardata);
					}else{
							$output[strtolower($name)]=trim($chardata);
					}
			}
	 }
  
   $parser = xml_parser_create();
   xml_set_element_handler($parser, "startElement", "endElement");
   xml_set_character_data_handler($parser, "charData");
  
   $file = 'books_category.xml';
   $data = file_get_contents($file);
  
   if(!xml_parse($parser, $data, true)){
      printf("<P> Error %s at line %d</P>", xml_error_string(xml_get_error_code($parser)),xml_get_current_line_number($parser));
   }else{
      // print "<br>Parsing Complete!</br>";
   }
  
   xml_parser_free($parser);
?>
</pre>
</body>
</html>