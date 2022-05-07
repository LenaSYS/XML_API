<html>
<body>
<pre>
<?php
	$output=Array();
	$name="";

  $file=Array();
  $outputstr="";
	
	function startElement($parser, $entityname, $attributes) {
			global $output;
			global $name;
      global $outputstr;

			$name=$entityname;

			if($name=="REPO"){
          $output=Array();
          foreach($attributes as $name=>$value){
  					if(trim($value)!="") $output[strtolower($name)]=$value;
    			}
          $outputstr="[";
      }else if($name=="FILE"){
          // if last character of output is [ we do not output comma outherwise we do before each file
          if (substr($outputstr, -1)=="}") $outputstr.=",";

          $outputstr.="{";
          $i=0;
          foreach($attributes as $name=>$value){
            if($i++>0) $outputstr.=",";
            if(trim($value)!="") $outputstr.='"'.strtolower($name).'":"'.$value.'"';
          }
          $outputstr.=',"subdirectory":[';
      }

	}
  
	function endElement($parser, $entityname) {
			global $output;
      global $outputstr;

			if($entityname=="REPO"){
					// print_r($output);

          $outputstr.="]";

					$cols="";
					$values="";

          $output['files']=str_replace('"',"__",$outputstr);

					foreach($output as $name=>$value){
							if($cols!="") $cols.=",";
							$cols.=$name;
							if($values!="") $values.=",";
							$values.='"'.$value.'"';
					}
					echo "INSERT INTO ".$entityname."(".$cols.") VALUES(".$values.");\n";
			}else if($entityname=="FILE"){
          $outputstr.="]";
          $outputstr.="}";
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
  
   $file = 'github_repos.xml';
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