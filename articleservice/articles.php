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
	if(isset($_GET['kind'])){
			$kind=$_GET['kind'];
	}else{
			$kind="All";
	}	
  
	$output=false;
	$articleoutput=false;
	
	function startElement($parser, $entityname, $attributes) {
			global $output;
			global $articleoutput;
			global $paper;
			global $kind;
			if($entityname=="NEWSPAPER"){
					$output=false;
					if($attributes['TYPE']==$paper){
							echo "<NEWSPAPER ";
							foreach ($attributes as $attname => $attvalue) {
									echo $attname."='".$attvalue."' ";
							}							
							echo ">";						
						
							$output=true;
					}
			}else if($entityname=="ARTICLE"){
					if($output){
							if($kind=="All"||$attributes['DESCRIPTION']==$kind) $articleoutput=true;
							
							if($articleoutput){
									echo "<ARTICLE ";
									foreach ($attributes as $attname => $attvalue) {
											echo $attname."='".$attvalue."' ";
									}							
									echo ">";
							}
					}
			}else if($entityname=="HEADING"||$entityname=="TEXT"||$entityname=="STORY"){
					if($articleoutput) echo "<".$entityname.">";
			}else if($entityname=="COMMENT"){
					if($articleoutput){
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
			global $articleoutput;
			if($entityname=="NEWSPAPER"){
					if($output) echo "</NEWSPAPER>";
					$output=false;
			}else if($entityname=="ARTICLE"){
					if($articleoutput) echo "</ARTICLE>";
					$articleoutput=false;
			}else if($entityname=="HEADING"||$entityname=="TEXT"||$entityname=="STORY"||$entityname=="COMMENT"){
					if($articleoutput) echo "</".$entityname.">";
			}			
	}
  
   function charData($parser, $chardata) {
			global $output;
		 	global $articleoutput;
		 	$chardata=trim($chardata);
   		if($chardata=="") return;
		 	if($articleoutput) echo $chardata;
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