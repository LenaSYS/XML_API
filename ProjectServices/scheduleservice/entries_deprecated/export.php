<html>
<body>
<pre>
<?php
	$output=Array();
	$name="";
  $outputstr="";
	

	function startElement($parser, $entityname, $attributes) {
			global $output;
			global $name;
      global $outputstr;

			$name=$entityname;

			if($name=="COURSE"){
          $output=Array();
          foreach($attributes as $name=>$value){
            if(trim($value)!="") $output[strtolower($name)]=$value;
          }
          $outputstr="[";
    }else if($name=="PERIOD"){
        // if last character of output is [ we do not output comma outherwise we do before each file
        if (substr($outputstr, -1)=="}") $outputstr.=",";
        $outputstr.="{";
        $i=0;
        foreach($attributes as $name=>$value){
          if($i++>0) $outputstr.=",";
          if(trim($value)!="") $outputstr.='"'.strtolower($name).'":"'.$value.'"';
        }
        $outputstr.=',"entries":[';
        // $outputstr.=',"subdirectory":[';
    }else if($name=="ENTRY"){
        if (substr($outputstr, -1)=="}") $outputstr.=",";
        $outputstr.="{";
        $i=0;
        //if(!isset($attributes['GROUP'])) $attributes['GROUP']="none";
        //print_r($attributes);
        foreach($attributes as $name=>$value){
          if($i++>0) $outputstr.=",";
          $outputstr.='"'.strtolower($name).'":"'.$value.'"';
        }
        $outputstr.="}";
    }    

	}
  
	function endElement($parser, $entityname) {
			global $output;
      global $outputstr;

			if($entityname=="PERIOD"){
          $outputstr.="]";
          $outputstr.="}";
      }
         
			if($entityname=="COURSE"){
					// print_r($output);

          $outputstr.="]";


					$cols="";
					$values="";

          $output['period']=str_replace('"',"__",$outputstr);

					echo 'UPDATE COURSE SET periods="'.str_replace('"',"__",$outputstr).'" WHERE id="'.$output['id'].'";'."\n";
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
  
   $file = 'schedule_entries.xml';
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