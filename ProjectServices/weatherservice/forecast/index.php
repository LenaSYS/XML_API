<?php
header("Content-type: text/xml");
?>
<forecast>
<?php
	
	// Check if paper is set otherwise set to default
	if(isset($_GET['start'])){
			$start=$_GET['start'];
	}else{
			$start="UNK";
	}
	if(isset($_GET['end'])){
			$end=$_GET['end'];
	}else{
			$end="UNK";
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
			if($entityname=="TIME"){
					$output='';
					$attrs=$attributes;
					$outputsection="";
			}
			if($entityname=="FORECAST"||$entityname=="WEATHERDATA"){
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
			global $start;
			global $end;
			if($entityname=="FORECAST"||$entityname=="WEATHERDATA"){
			
			}else{
						$output=$output."</";
						$output=$output.$entityname;
						$output=$output." >\n";
			}

			if($start=="UNK"&&$end!="UNK"){
					if(($attrs['FROM']<$end)&&($entityname=='TIME')){
							echo $output;					
					}
			}else if(($attrs['FROM']>$start)&&($attrs['FROM']<$end)&&($entityname=='TIME')){
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
  
	 $towns=Array("Arjeplog","Barcelona","Gavle","Gothenburg","Grums","Halmstad","Havanna","Helsingborg","Hudikvsvall","Jokkmokk","Jonkoping","Kalmar",
								"Karlskrona","Karlstad","Kiruna","Kristianstad","Lulea","Malmo","Orebro","Oslo","Stockholm","Sundsvall","Uddevalla","Umea","Uppsala"
							 );
	 if(array_search($id,$towns)!==false){
				if(isset($_GET['start'])||isset($_GET['end'])){
						$file = $id.'.xml';
						$data = file_get_contents($file);

						if(!xml_parse($parser, $data, true)){
							printf("<P> Error %s at line %d</P>", xml_error_string(xml_get_error_code($parser)),xml_get_current_line_number($parser));
						}else{
							// print "<br>Parsing Complete!</br>";
						}

						xml_parser_free($parser);
				}else{
						echo "ERROR: Either start, end or both must be set ";				
				}
	 }else{
	 		echo "ERROR: Unknown ID ".$id;
	 }
	
?>
</forecast>