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
	if(isset($_GET['category'])){
		  $category=$_GET['category'];
	}else{
			$category="UNK";
	}	
	
	if(isset($_GET['author'])){
		  $author=$_GET['author'];
	}else{
			$author="UNK";
	}		
	
	//print_r($_GET);

	
	$output="";
	$lname="";
	$found=false;
	$attrs=null;
	
	function startElement($parser, $entityname, $attributes) {
			global $output;
			global $attrs;
			global $lname;
			global $catlist;
			global $found;
			if($entityname=="BOOK"){
					$found=false;
					$output='';
					$attrs=$attributes;
					$catlist=Array();
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
			global $catlist;	
			global $category;
			global $found;
		
			if($entityname=="BOOKS"){
			
			}else{
						$output=$output."</";
						$output=$output.$entityname;
						$output=$output." >\n";
			}
			
			if((($id==$attrs['ID'])||($id=="ALL"))&&$entityname=='BOOK'){
					echo $output;
			}else if((strpos(strtoupper($attrs['TITLE']),strtoupper($titlesearch))!==false)&&$entityname=='BOOK'){
					// echo "FOO".$category."FOO";
					if($category!="UNK"){
							if(in_array(strtoupper($category),$catlist)){
									echo $output;							
							}
					}else{
							echo $output;					
					}
			}else if(in_array(strtoupper($category),$catlist)&&$entityname=='BOOK'){
					if($titlesearch=="UNK"){
							echo $output;					
					}
			}else if($found&&$entityname=='BOOK'){
					echo $output;
			}
			//print_r($catlist);
	}
  
   function charData($parser, $chardata) {
		 	global $output;
		 	global $lname;
		 	global $catlist;
		 	global $found;
		 	global $author;

			$chardata=trim($chardata);
   		if($chardata=="") return;
		 
		 	if($lname=="CATEGORY"){
					array_push($catlist,strtoupper($chardata));
			}
		 
		 	if($lname=="AUTHOR"){
					if($chardata==$author){
							$found=true;
					}
			}
		 
		 	$output=$output.$chardata;	 
	 }
  
	 if(isset($_GET['titlesearch'])||isset($_GET['id'])||isset($_GET['author'])||isset($_GET['category'])){
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
		}else{
				echo "ERROR: Either id/titlesearch/category/author must be set ";				
		}	
	
	?>
</BOOKS>