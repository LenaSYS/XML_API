<html>
<body>
<pre>
<?php
	$output=Array();
	$name="";
  $authors="Hello!";
  $author="";
  $cat="";
  $cats=Array();
  $preface=Array();
	
	function startElement($parser, $entityname, $attributes) {
			global $output;
			global $name;
      global $authors;
      global $author;
      global $cats;
      global $cat;
      global $preface;

			if($entityname!="BREAK"){
        $name=$entityname;
      }

			if($name=="BOOK") $output=Array();

      if($name=="CATEGORIES"){
        $cats=Array();
      }else if($name=="PREFACE"){
         $preface=Array(); 
      }else if($name=="CATEGORY"){
        $cat="";
      }else if($name=="AUTHORS"){
          $authors=Array();
      }else if($name=="AUTHOR"){
          $author=Array();
          foreach($attributes as $aname=>$value){
    				if(trim($value)!="") $author[strtolower($aname)]=$value;
    			}
      }else if($name!="AUTHOR"){
          foreach($attributes as $aname=>$value){
    		      if(trim($value)!="") $output[strtolower($aname)]=$value;
    			}
      }
	}
  
	function endElement($parser, $entityname) {
			global $output;
      global $authors;
      global $author;
      global $roles;
      global $role;
      global $cats;
      global $cat;
      global $preface;

			if($entityname=="CATEGORIES"){
          $output['categories']=str_replace('"',"__",json_encode($cats));
      }else if($entityname=="BREAK"){ 
      }else if($entityname=="PREFACE"){
          $output['preface']=str_replace('"',"__",json_encode($preface));          
      }else if($entityname=="CATEGORY"){
          array_push($cats,$cat);
      }else if($entityname=="AUTHORS"){
          $output['authors']=str_replace('"',"__",json_encode($authors));
      }else if($entityname=="AUTHOR"){
          array_push($authors,$author);
      }else if($entityname=="BOOK"){
					$cols="";
					$values="";

          $output['title']=str_replace('"',"",$output['title']);

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
      global $authors;
      global $author;
      global $name;
      global $cat;     
      global $preface;

      if($name=="AUTHOR"){
          if(isset($author['name'])){
            $author['name'].=$chardata;
          }else{
            $author['name']=$chardata;
          }
      }else if($name=="CATEGORY"){
          $cat.=$chardata;
      }else if($name=="PREFACE"){
          array_push($preface,$chardata);
      }else{
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
  
   $file = 'books_books.xml';
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