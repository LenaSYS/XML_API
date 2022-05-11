<html>
<body>
<pre>
<?php
	$output=Array();
	$soutput=Array();


  $name="";
  $fname="";
  $repo="";
  $file=Array();
  $section=Array();
  $lines=Array();
  $line=Array();

	function startElement($parser, $entityname, $attributes) {
			global $output;
			global $soutput;      
			global $name;
      global $fname;
      global $file;
      global $section;
      global $lines;
      global $line;
      global $repo;

			$name=$entityname;

			if($name=="FILES"){
        $output=Array();
        $soutput=Array();
      }

			if($name=="FILE"){
        $file=Array();
        foreach($attributes as $aname=>$value){
    					if(trim($value)!="") $file[strtolower($aname)]=$value;
    		}
        $fname=$attributes['FULLNAME'];
        $repo=$attributes['REPO'];
      }
      if($name=="SECTION"){
        $section=Array();
        $lines=Array();
        $section['filename']=$fname;
        foreach($attributes as $aname=>$value){
              if($aname=="COMMIT") $aname="commitid";
    					if(trim($value)!="") $section[strtolower($aname)]=str_replace('"',"",$value);
    		}
      }  
      if($name=="LINE"){
        $line=Array();
        foreach($attributes as $aname=>$value){
    					if(trim($value)!="") $line[strtolower($aname)]=$value;
    		}
      }         
	}
  
	function endElement($parser, $entityname) {
      global $output;
      global $soutput;      
      global $name;
      global $fname;
      global $file;
      global $section;
      global $lines;
      global $line;
      global $repo;

			if($entityname=="LINE"){
          array_push($lines,$line);
      }      
			if($entityname=="FILE"){
          array_push($output,$file);
      }
			if($entityname=="SECTION"){
        $section['fullname']=$fname;
        $section['repo']=$repo;        
        $section['lines']=str_replace('"',"__",json_encode($lines));
        array_push($soutput,$section);
      }
			if($entityname=="FILES"){
          //print_r($soutput);
          //print_r($output);

          foreach($soutput as $section){
            $cols="";
            $values="";
            foreach($section as $name=>$value){
  							if($cols!="") $cols.=",";
  							$cols.=$name;
  							if($values!="") $values.=",";
  							$values.='"'.$value.'"';
  					}
  					echo "INSERT INTO SECTION(".$cols.") VALUES(".$values.");\n";
          }

      }			
	}
  
   function charData($parser, $chardata) {
		 	global $output;
		 	global $name;
      global $line;

      if($name=="LINE"){
          $line['code']=stripslashes(str_replace('"',"",str_replace('__',"",$chardata)));
      }

      if($name=="SECTION"){
          if(trim($chardata)!=""){
      			if(isset($output[strtolower($name)])){
      					$output[strtolower($name)].=trim($chardata);
      			}else{
      					$output[strtolower($name)]=trim($chardata);
      			}
      	  }
      }
	 }
  
   $parser = xml_parser_create();
   xml_set_element_handler($parser, "startElement", "endElement");
   xml_set_character_data_handler($parser, "charData");
  
   $file = 'github_blamefiles.xml';
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