<?php
header("Content-type: text/xml");
?>
<CLIMATECODES>
<?php
	
	// Check if paper is set otherwise set to default
	if(isset($_GET['name'])){
			$filename=$_GET['name'];
	}else{
			$filename="UNK";
	}
	if(isset($_GET['id'])){
		  $id=$_GET['id'];
	}else{
			$id="UNK";
	}		  
	
	$output="";
	$outputsection="";
	$lname="";
	$ffirstname="";
	$flastname="";
	$attrs=null;
	$fabout="";
	
	function startElement($parser, $entityname, $attributes) {
			global $output;
			global $outputsection;
			global $attrs;
			global $lname;
			if($entityname=="CODE"){
					$output='';
					$attrs=$attributes;
					$outputsection="";
			}
			if($entityname=="CLIMATECODES"){
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
			global $outputsection;
			global $attrs;
			global $lname;
			global $login;
			global $filename;
			global $id;
			if($entityname=="CLIMSTECODES"){
			
			}else{
						$output=$output."</";
						$output=$output.$entityname;
						$output=$output." >\n";
			}

			if(((strpos(strtoupper($attrs['NAME']),strtoupper($filename))!==false)||$filename=="ALL")&&($entityname=='CODE')){
					echo $output;
			}
			if(($attrs['CODE']==$id)&&($entityname=='CODE')){
					echo $output;
			}

	}
  
   function charData($parser, $chardata) {
		 	global $output;
		 	global $outputsection;
		 	global $lname;

			$chardata=trim($chardata);
   		if($chardata=="") return;
		 
		 	$output=$output.$chardata;	 
	 }
  
   $parser = xml_parser_create();
   xml_set_element_handler($parser, "startElement", "endElement");
   xml_set_character_data_handler($parser, "charData");
  
   $file = 'weather_climatecodes.xml';
   $data = file_get_contents($file);
  
   if(!xml_parse($parser, $data, true)){
      printf("<P> Error %s at line %d</P>", xml_error_string(xml_get_error_code($parser)),xml_get_current_line_number($parser));
   }else{
      // print "<br>Parsing Complete!</br>";
   }
  
   xml_parser_free($parser);
?>
</CLIMATECODES>