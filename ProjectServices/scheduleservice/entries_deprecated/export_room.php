<html>
<body>
<pre>
<?php
	$output=Array();
	$name="";
  $outputstr="";
  $rooms=Array();
	
	function startElement($parser, $entityname, $attributes) {
			global $output;
			global $name;
      global $outputstr;
      global $rooms;

			$name=$entityname;

			if($name=="COURSE"){
          $output=Array();
          foreach($attributes as $name=>$value){
            if(trim($value)!="") $output[strtolower($name)]=$value;
          }
    }else if($name=="PERIOD"){

    }else if($name=="ENTRY"){
        $entry=Array();

        $entry['courseid']=$output['id'];
        $entry['coursename']=$output['name'];

        foreach($attributes as $name=>$value){
            $entry[strtolower($name)]=$value;
        }
        $roomNo=$entry['room'];
        if(!isset($rooms[$roomNo])){
          $rooms[$roomNo]=Array();
        }

//        if(!isset($entry['group'])) $entry['group']="none";
        if($entry['group']=="") $entry['group']="none";
        array_push($rooms[$roomNo],$entry);
    }    
	}
  
	function endElement($parser, $entityname) {
			global $output;
      global $outputstr;
      global $rooms;

			if($entityname=="PERIOD"){

      }
			if($entityname=="COURSE"){
      
      }
			if($entityname=="ENTRIES"){
          foreach($rooms as $rname=>$room){

              $values="[";
              foreach($room as $name=>$entry){
                  if (substr($values, -1)=="}") $values.=",";
                  $values.="{";
                  $i=0;
                  foreach($entry as $ename=>$value){
                    if($ename!="room"){
                        if (substr($values, -1)!="{") $values.=",";
                        $values.='"'.strtolower($ename).'":"'.$value.'"';
                    }
                  }                  
                  $values.="}";
  					  }
              $values.="]";

              echo 'INSERT INTO ROOM(number,entries) VALUES("'.$rname.'","'.str_replace('"','__',$values).'");'."\n";
          }
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