<html>
<body>
<pre>
<?php
	$output=Array();
	$name="";
  $reponame="";
  $commit="";
  $parents="";
	
	function startElement($parser, $entityname, $attributes) {
			global $output;
			global $name;
      global $reponame;
      global $commit;
      global $parents;

			$name=$entityname;

			if($name=="COMMITS"){
          $output=Array();
          $reponame=$attributes['REPO'];
      }else if($name=="PARENTS"){
          $parents=Array();
      }else if($name=="PARENT"){
          $parent=Array();
          foreach($attributes as $name=>$value){
            if(trim($value)!="") $parent[strtolower($name)]=$value;
          }
          array_push($parents,$parent);
      }else if($name=="COMMIT"){
        $commit=Array();
        $commit['repo']=$reponame;
        foreach($attributes as $name=>$value){
					if(trim($value)!="") $commit[strtolower($name)]=$value;
			  }
      }
	}
  
	function endElement($parser, $entityname) {
			global $output;
      global $reponame;
      global $commit;
      global $parents;

      if($entityname=="COMMIT"){
          $commit['parents']=str_replace('"',"__",json_encode($commit['parents']));       
          array_push($output,$commit);
      }else if($entityname=="PARENTS"){
          $commit['parents']=$parents;
      }else if($entityname=="COMMITS"){
					// print_r($output);

					foreach($output as $arr){
            $cols="";
            $values="";
            foreach($arr as $aname=>$value){
                  if($cols!="") $cols.=",";
    							$cols.=$aname;
    							if($values!="") $values.=",";
    							$values.='"'.str_replace("'","",$value).'"';
              }
              echo "INSERT INTO ".$entityname."(".$cols.") VALUES(".$values.");\n";
            }
			}			
	}
  
   function charData($parser, $chardata) {
		 	global $output;
		 	global $name;
      global $reponame;
      global $commit;

      if($name=="MESSAGE"||$name=="LOGIN"||$name=="AVATAR"||$name=="AUTHOR"){
        if(isset($commit[strtolower($name)])){
            $commit[strtolower($name)].=str_replace('"',"",trim($chardata));
        }else{
            $commit[strtolower($name)]=str_replace('"',"",trim($chardata));
        }
      }
 	 }
  
   $parser = xml_parser_create();
   xml_set_element_handler($parser, "startElement", "endElement");
   xml_set_character_data_handler($parser, "charData");
  
   $file = 'github_commits.xml';
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