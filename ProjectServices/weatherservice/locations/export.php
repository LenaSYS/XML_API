<html>
<body>
<pre>
<?php
	$output=Array();
	$name="";
	
	function startElement($parser, $entityname, $attributes) {
			global $output;
      global $outputstr;
			global $name;

			if($entityname!="BREAK") $name=$entityname;

			if($name=="LOCATION"){
          $output=Array();
      }else if($name=="TIMEZONE"){
          $outputstr='{';
          foreach($attributes as $name=>$value){
            if (substr($outputstr, -1)!="{") $outputstr.=",";
            if(trim($value)!="") $outputstr.='"'.$name.'":"'.$value.'"';
          }
          $outputstr.="}";
          $output['timezone']=str_replace('"',"__",$outputstr);
      }else if($name=="GOLOCATION"){
          $outputstr='{';
          foreach($attributes as $name=>$value){
            if (substr($outputstr, -1)!="{") $outputstr.=",";
            if(trim($value)!="") $outputstr.='"'.$name.'":"'.$value.'"';
          }
          $outputstr.="}";
          $output['geolocation']=str_replace('"',"__",$outputstr);
      }else if($name=="RANK"){
          $outputstr='{';
          foreach($attributes as $name=>$value){
            if (substr($outputstr, -1)!="{") $outputstr.=",";
            if(trim($value)!="") $outputstr.='"'.$name.'":"'.$value.'"';
          }
          $outputstr.="}";
          $output['rank']=str_replace('"',"__",$outputstr);
      }else if($name=="AREA"){
          $outputstr='{';
          foreach($attributes as $name=>$value){
            if (substr($outputstr, -1)!="{") $outputstr.=",";
            if(trim($value)!="") $outputstr.='"'.$name.'":"'.$value.'"';
          }
          $outputstr.="}";
          $output['area']=str_replace('"',"__",$outputstr);          
      }else if($name=="CLIMATE"&&(count($attributes)>0)){
          $outputstr='{';
          foreach($attributes as $aname=>$value){
            if (substr($outputstr, -1)!="{") $outputstr.=",";
            if(trim($value)!="") $outputstr.='"'.$aname.'":"'.$value.'"';
          }
          $outputstr.=',"climate":[';
      }else{
          // echo "<span style='color:red'>".$name."</span>";
      }	
  }
  
	function endElement($parser, $entityname) {
			global $output;
      global $outputstr;

			if($entityname=="CLIMATE"){
          $outputstr.="]}";
          $output['climate']=str_replace('"',"__",$outputstr);
          
          //echo $outputstr;
      }

			if($entityname=="LOCATION"){
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
      global $outputstr;
		 	global $name;

      if($name=="NAME"||$name=="TYPE"||$name=="COUNTRY"||$name=="PROVINCE"||$name=="COUNTY"||$name=="MUNICIPALITY"||$name=="ELEVATION"||$name=="POSTALCODE"||$name=="AREACODE"||$name=="URL"||$name=="IMGURL"||$name=="CHARTER"||$name=="LICENCE"||$name=="HYPERLINK"){
    			if(trim($chardata)!=""){
    					if(isset($output[strtolower($name)])){
    							$output[strtolower($name)].=trim($chardata);
    					}else{
    							$output[strtolower($name)]=trim($chardata);
    					}
    			}
      }else if($name=="CLIMATE"){
        if (substr($outputstr, -1)!="[") $outputstr.=",";
        if(trim($chardata)!=""){
            $outputstr.='"'.str_replace('"',"",trim($chardata)).'"';
        }
      }
	 }
  
   $parser = xml_parser_create();
   xml_set_element_handler($parser, "startElement", "endElement");
   xml_set_character_data_handler($parser, "charData");
  
   $file = 'weather_locations.xml';
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