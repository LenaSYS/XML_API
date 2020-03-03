<?php
header("Content-type: text/xml");
?>
<ARTICLES>
<?php
	
	// Check if paper is set otherwise set to default
	if(isset($_GET['paper'])){
			$paper=$_GET['paper'];
	}else{
			$paper="UNK";
	}
  
	$output=false;
	
	function startElement($parser, $entityname, $attributes) {
			global $output;
			global $paper;
			if($entityname=="NEWSPAPER"){
					$output=false;
					if($attributes['NAME']==$paper){
							$output=true;
					}
			}else if($entityname=="ARTICLE"){
					if($output){
							echo "<ARTICLE ";
							foreach ($attributes as $attname => $attvalue) {
									echo $attname."='".$attvalue."' ";
							}							
							echo ">";
					}
			}else if($entityname=="HEADING"||$entityname=="TEXT"||$entityname=="STORY"){
					if($output) echo "<".$entityname.">";
			}else if($entityname=="COMMENT"){
					if($output){
							echo "<COMMENT ";
							foreach ($attributes as $attname => $attvalue) {
									echo $attname."='".$attvalue."' ";
							}							
							echo ">";
					}
			}
	}
  
	function endElement($parser, $entityname) {
			global $output;
			if($entityname=="NEWSPAPER"){
					$output=false;
			}else if($entityname=="ARTICLE"||$entityname=="HEADING"||$entityname=="TEXT"||$entityname=="STORY"||$entityname=="COMMENT"){
					if($output) echo "</".$entityname.">";
			}			
	}
  
   function charData($parser, $chardata) {
			global $output;
		 	$chardata=trim($chardata);
   		if($chardata=="") return;
		 	if($output) echo $chardata;
   }
  
   $parser = xml_parser_create();
   xml_set_element_handler($parser, "startElement", "endElement");
   xml_set_character_data_handler($parser, "charData");
  
   $file = 'example1_2019.xml';
   $data = file_get_contents($file);
  
   if(!xml_parse($parser, $data, true)){
      printf("<P> Error %s at line %d</P>", xml_error_string(xml_get_error_code($parser)),xml_get_current_line_number($parser));
   }else{
      // print "<br>Parsing Complete!</br>";
   }
  
   xml_parser_free($parser);
?>
</ARTICLES>