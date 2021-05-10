<?php
header("Content-type: text/xml");
?>
<COMMITS>
<?php
	
	// Check if paper is set otherwise set to default
	if(isset($_GET['login'])){
			$login=$_GET['login'];
	}else{
			$login="UNK";
	}

	if(isset($_GET['time'])){
		  $time=$_GET['time'];
	}else{
			$time="UNK";
	}		
	if(isset($_GET['timeval'])){
		  $timeval=$_GET['timeval'];
	}else{
			$timeval="UNK";
	}		
	if(isset($_GET['spaceval'])){
		  $spaceval=$_GET['spaceval'];
	}else{
			$spaceval="UNK";
	}			

	if(isset($_GET['id'])){
		  $id=$_GET['id'];
	}else{
			$id="UNK";
	}		  
	if(isset($_GET['repo'])){
		  $repo=$_GET['repo'];
	}else{
			$repo="UNK";
	}	
	
	$output="";
	$lname="";
	$attrs=null;
	$log="UNK";
		
	function startElement($parser, $entityname, $attributes) {
			global $output;
			global $attrs;
			global $lname;
			global $reponame;
			if($entityname=="COMMIT"){
					$output='';
					$attrs=$attributes;
			}
			if($entityname=="COMMITS"){
					$reponame=$attributes['REPO'];
			}else{
					$output=$output."<";
					$output=$output.$entityname;
					$output=$output." ";
				
					if(isset($reponame)&&$entityname=="COMMIT") $output.="repo='".$reponame."' ";
				
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
			global $login;
			global $time;
			global $log;
			global $id;
			global $reponame;
			global $repo;
			global $timeval;
			global $spaceval;

		if($entityname=="COMMITS"){
			
			}else{
						$output=$output."</";
						$output=$output.$entityname;
						$output=$output." >\n";
			}
				
//			echo $repo." ".$reponame."##";
			
			//echo $attrs['SPACE']." ".$spaceval."(".($attrs['SPACE']==$spaceval).")";
		
			if(($time!="UNK"||$timeval!="UNK"||$spaceval!="UNK")&&$entityname=='COMMIT'){
					if(substr($attrs['TIMESTAMP'],0,10)==$time||$attrs['TIME']==$timeval||$attrs['SPACE']==$spaceval||$time=="ALL"){
							if($login=="UNK"&&$repo=="UNK"){
									echo $output;					
							}else if(($login=="ALL")||($repo=="ALL")||($repo==$reponame)||($log==$login)){
									echo $output;
							}
					}
			}else if((($log==$login)||($login=="ALL"))&&$entityname=='COMMIT'){
					if(($repo=="UNK")||($repo==$reponame)){
							echo $output;
					}
			}else if(($attrs['ID']==$id)&&($entityname=='COMMIT')){
					echo $output;
			}else if(($repo==$reponame||$repo=="ALL")&&($entityname=='COMMIT')){
					if($login!="UNK"){
							if(($login=="ALL")||($log==$login)){
									echo $output;			
							}
					}else{
							echo $output;
					}
			}
	}
  
   function charData($parser, $chardata) {
		 	global $output;
		 	global $lname;
		 	global $log;

			$chardata=trim($chardata);
   		if($chardata=="") return;
		 
		 	if($lname=="LOGIN") $log=$chardata;
		 
		 	$output=$output.$chardata;	 
	 }
  
		if(isset($_GET['login'])||isset($_GET['time'])||isset($_GET['id'])||isset($_GET['repo'])||isset($_GET['spaceval'])||isset($_GET['timeval'])){
			 $parser = xml_parser_create();
			 xml_set_element_handler($parser, "startElement", "endElement");
			 xml_set_character_data_handler($parser, "charData");

			 $file = 'github_commits.xml';
			 $data = file_get_contents($file);

			 if(!xml_parse($parser, $data, true)){
					printf("<P> Error %s at line %d</P>", xml_error_string(xml_get_error_code($parser)),xml_get_current_line_number($parser));
			 }else{
					// print "<br>Parsing Complete!</br>";
			 }

			 xml_parser_free($parser);
		}else{
				echo "ERROR: Either id/login/time must be set ";				
		}			

?>
</COMMITS>