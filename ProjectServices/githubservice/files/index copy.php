<?php
header("Content-type: text/xml");
?>
<BOOKS>
<?php
	
	// Check if paper is set otherwise set to default
	if(isset($_GET['id'])){
			$id=$_GET['id'];
	}else{
			$id="UNK";
	}
	if(isset($_GET['titlesearch'])){
		  $titlesearch=$_GET['titlesearch'];
	}else{
			$titlesearch="UNK";
	}		  
	
	//print_r($_GET);

	
	$output="";
	$lname="";
	$ffirstname="";
	$flastname="";
	$attrs=null;
	$fabout="";
	
	function startElement($parser, $entityname, $attributes) {
			global $output;
			global $attrs;
			global $lname;
			if($entityname=="BOOK"){
					$output='';
					$attrs=$attributes;
			}
			if($entityname=="BOOKS"){
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
			global $titlesearch;
			if($entityname=="BOOKS"){
			
			}else{
						$output=$output."</";
						$output=$output.$entityname;
						$output=$output." >\n";
			}
			
			if((($id==$attrs['ID'])||($id="ALL"))&&$entityname=='BOOK'){
					echo $output;
			}
			if((strpos($attrs['TITLE'],$titlesearch)!=false)&&$entityname=='BOOK'){
					echo $output;
			}		
	}
  
   function charData($parser, $chardata) {
		 	global $output;
		 	global $lname;

			$chardata=trim($chardata);
   		if($chardata=="") return;
		 
		 	$output=$output.$chardata;	 
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
</BOOKS>