<?php
header("Content-type: text/xml");
?>
<FILES>
<?php
	
	// Check if paper is set otherwise set to default
	if(isset($_GET['filename'])){
			$filename=$_GET['filename'];
	}else{
			$filename="UNK";
	}
	if(isset($_GET['login'])){
		  $login=$_GET['login'];
	}else{
			$login="ALL";
	}		  
	if(isset($_GET['repo'])){
		  $repo=$_GET['repo'];
	}else{
			$repo="ALL";
	}		
	
	$output="";
	$outputsection="";
	$lname="";
	$attrs=null;
	$lauthor="Greger";
	
	function startElement($parser, $entityname, $attributes) {
			global $output;
			global $attrs;
			global $lname;
			global $lauthor;
			global $login;
			if($entityname=="FILE"){
					$output='';
					$attrs=$attributes;
					$outputsection="";
			}
		
			if($entityname=="FILES"){
			}else{
					if($entityname=="SECTION") $lauthor=$attributes['AUTHOR'];
				
					if((($entityname=="SECTION"||$entityname=="LINE")&&(($lauthor==$login)||($login=='ALL')))||($entityname=='FILE')){
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
			}
			if($entityname!="LINE"){
					$lname=$entityname;
			}
	}
  
	function endElement($parser, $entityname) {
			global $output;
			global $attrs;
			global $lname;
			global $login;
			global $filename;
			global $repo;
			global $lauthor;
		
			if($entityname=="FILES"){
			
			}else{
						if($login=="ALL"){
									$output=$output."</";
									$output=$output.$entityname;
									$output=$output." >\n";
						}else if((($lname=="SECTION"&&$lauthor!=$login)&&$entityname!="FILE")){
									// Ignore antything below!
						}else{
									$output=$output."</";
									$output=$output.$entityname;
									$output=$output." >\n";
						}
			}

			if(((strpos(strtoupper($attrs['FULLNAME']),strtoupper($filename))!==false)||$filename=="ALL")&&($entityname=='FILE')){
					echo $output;
			}else if((($attrs['REPO']==$repo)||($repo=="ALL")||($repo=="ALL"))&&($entityname=='FILE')){
							echo $output;					
			}
	}
  
   function charData($parser, $chardata) {
		 	global $output;
		 	global $lname;
		 	global $lauthor;
		 	global $login;

			$chardata=trim($chardata);
   		if($chardata=="") return;
		 
			if(($lname=="SECTION"&&($lauthor!=$login&&$login!="ALL"))){
					// Ignore!
			}else{
					$output=$output.$chardata;
			}
	 }
  
		if(isset($_GET['filename'])||isset($_GET['login'])||isset($_GET['repo'])){
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
		}else{
				echo "ERROR: Either filename/login/repo must be set ";				
		}		
?>
</FILES>