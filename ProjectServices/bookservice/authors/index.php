<?php
header("Content-type: text/xml");
?>
<AUTHORS>
<?php
	
	// Check if paper is set otherwise set to default
	if(isset($_GET['firstname'])){
			$firstname=$_GET['firstname'];
	}else{
			$firstname="ALL";
	}
	if(isset($_GET['lastname'])){
			$lastname=$_GET['lastname'];
	}else{
			$lastname="ALL";
	}	
	if(isset($_GET['role'])){
		  $role=$_GET['role'];
	}else{
			$role="UNK";
	}		
	if(isset($_GET['aboutsearch'])){
		  $about=$_GET['aboutsearch'];
	}else{
			$about="UNK";
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
			global $firstname;
			global $lastname;
			global $ffirstname;
			global $flastname;		
			global $attrs;
			global $lname;
			global $found;
      global $fabout;
			if($entityname=="AUTHOR"){
					$output='';
					$attrs=$attributes;
					$found=false;
          $fabout="UNK";
			}
			if($entityname=="AUTHORS"){
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
			global $firstname;
			global $lastname;
			global $ffirstname;
			global $flastname;
			global $fabout;
			global $output;
			global $attrs;
			global $role;
			global $about;
			global $found;
			if($entityname=="AUTHORS"){
			
			}else{
						$output=$output."</";
						$output=$output.$entityname;
						$output=$output." >\n";
			}
			
			// echo $firstname." ".$ffirstname." ".$entityname." ".$found;

			if(((($ffirstname==$firstname)&&($flastname==$lastname))||(($ffirstname==$firstname)&&($lastname=="ALL"))||(($firstname=="ALL")&&($flastname==$lastname)))&&($entityname=='LASTNAME')){		
					$found=true;
			}
		
			if(($found==true)&&($entityname=='AUTHOR')){
					echo $output;
			}else if(($attrs['ROLE']==$role||$role=="ALL")&&$entityname=='AUTHOR'){
					echo $output;
			}else if((strpos(strtoupper($fabout),strtoupper($about))>0)&&($entityname=='AUTHOR')){	
          echo $output;
      }
	}
  
   function charData($parser, $chardata) {
			global $ffirstname;
			global $flastname;
		 	global $fabout;		 
		 	global $output;
		 	global $lastname;
		 	global $lname;

			$chardata=trim($chardata);
   		if($chardata=="") return;
		 
		 	$output=$output.$chardata;
   
		 	if($lname=="FIRSTNAME") $ffirstname=$chardata;
		 	if($lname=="LASTNAME") $flastname=$chardata;
		 	if($lname=="ABOUT") $fabout.=$chardata;		 
	 }
  
   $parser = xml_parser_create();
   xml_set_element_handler($parser, "startElement", "endElement");
   xml_set_character_data_handler($parser, "charData");
  
   $file = 'books_authors.xml';
   $data = file_get_contents($file);
  
   if(!xml_parse($parser, $data, true)){
      printf("<P> Error %s at line %d</P>", xml_error_string(xml_get_error_code($parser)),xml_get_current_line_number($parser));
   }else{
      // print "<br>Parsing Complete!</br>";
   }
  
   xml_parser_free($parser);
?>
</AUTHORS>