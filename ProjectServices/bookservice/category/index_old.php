<?php
header("Content-type: text/xml");
?>
<CATEGORIES>
<?php
	
	// Check if paper is set otherwise set to default
	if(isset($_GET['categorysearch'])){
		  $categorysearch=$_GET['categorysearch'];
	}else{
			$categorysearch="UNK";
	}		  
	
	//print_r($_GET);
	$output="";
	$lname="";
	$ffirstname="";
	$flastname="";
	$attrs=null;
	$fabout="";
	$cat="UNK";
	
	function startElement($parser, $entityname, $attributes) {
			global $output;
			global $attrs;
			global $lname;
			if($entityname=="CATEGORY"){
					$output='';
					$attrs=$attributes;
			}
			if($entityname=="CATEGORIES"){
			}else{
					$output=$output."<";
					$output=$output.$entityname;
					$output=$output." ";
				
					foreach($attributes as $name=>$value){
							$output=$output.$name;
							$output=$output."='";
							$output=$output.$value;
							$output=$output."' ";
					}
					$output=$output.'>';
			}
			$lname=$entityname;
	}
  
	function endElement($parser, $entityname) {
			global $output;
			global $attrs;
			global $lname;
			global $id;
			global $categorysearch;
			global $cat;
		
			if($entityname=="CATEGORIES"){
			
			}else{
						$output=$output."</";
						$output=$output.$entityname;
						$output=$output." >\n";
			}
			
			if(((strpos(strtoupper($cat),strtoupper($categorysearch))!==false)||($categorysearch=="ALL"))&&$entityname=='CATEGORY'){
					echo $output;
			}		
	}
  
   function charData($parser, $chardata) {
		 	global $output;
		 	global $lname;
		 	global $cat;

			$chardata=trim($chardata);
   		if($chardata=="") return;
		 
		 	$output=$output.$chardata;
		 
		 	$cat=$chardata;
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
</CATEGORIES>