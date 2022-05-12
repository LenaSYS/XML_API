<html>
<body>
<pre>
<?php
	$output=Array();
	$name="";
  $place="";
  $outputstr="";
	
	function startElement($parser, $entityname, $attributes) {
			global $output;
      global $outputstr;
			global $name;
      global $place;

			$name=$entityname;

			if($name=="TIME"){
          $output=Array();
          $output['place']=$place;

          foreach($attributes as $name=>$value){
            if(trim($value)!="") $output[strtolower($name)]=$value;
          }
          $outputstr="{";
      } 

      if($name=="TEMPERATURE"){
          $outputstr.='"temperature":{';
          foreach($attributes as $name=>$value){
            if (substr($outputstr, -1)!="{") $outputstr.=",";
            if(trim($value)!="") $outputstr.='"'.$name.'":"'.$value.'"';
          }
          $outputstr.="}";
      }else if($name=="SYMBOL"){
        $outputstr.=',"symbol":{';
        foreach($attributes as $name=>$value){
          if (substr($outputstr, -1)!="{") $outputstr.=",";
          if(trim($value)!="") $outputstr.='"'.$name.'":"'.$value.'"';
        }
        $outputstr.="}";
      }else if($name=="PERCIPITATION"){
        $outputstr.=',"percipitation":{';
        foreach($attributes as $name=>$value){
          if (substr($outputstr, -1)!="{") $outputstr.=",";
          if(trim($value)!="") $outputstr.='"'.$name.'":"'.$value.'"';
        }
        $outputstr.="}";
      }else if($name=="WINDDIRECTION"){
        $outputstr.=',"winddirection":{';
        foreach($attributes as $name=>$value){
          if (substr($outputstr, -1)!="{") $outputstr.=",";
          if(trim($value)!="") $outputstr.='"'.$name.'":"'.$value.'"';
        }
        $outputstr.="}";
      }else if($name=="WINDSPEED"){
        $outputstr.=',"windspeed":{';
        foreach($attributes as $name=>$value){
          if (substr($outputstr, -1)!="{") $outputstr.=",";
          if(trim($value)!="") $outputstr.='"'.$name.'":"'.$value.'"';
        }
        $outputstr.="}";
      }else if($name=="PRESSURE"){
        $outputstr.=',"pressure":{';
        foreach($attributes as $name=>$value){
          if (substr($outputstr, -1)!="{") $outputstr.=",";
          if(trim($value)!="") $outputstr.='"'.$name.'":"'.$value.'"';
        }
        $outputstr.="}";
      }      
      
      
      if($name=="FORECAST") $place=$attributes['NAME'];

	}
  
	function endElement($parser, $entityname) {
			global $output;
      global $outputstr;
      global $place;

			if($entityname=="TIME"){
					// print_r($output);

          $outputstr.="}";
          $output['tempdata']=str_replace('"',"__",$outputstr);

					$cols="";
					$values="";

					foreach($output as $name=>$value){
              if($name=="from") $name="fromtime";
              if($name=="to") $name="totime";
							if($cols!="") $cols.=",";
							$cols.=$name;
							if($values!="") $values.=",";
							$values.='"'.$value.'"';

					}

					echo "INSERT INTO FORECAST(".$cols.") VALUES(".$values.");\n";
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
  
   $file = 'Consolidated.xml';
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