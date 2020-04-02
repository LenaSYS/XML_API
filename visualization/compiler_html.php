<html>  
<head>
 <meta charset="UTF-8">
<!-- Include css file and VM data -->
<link rel="stylesheet" type="text/css" href="examples.css">	

<style>
	#leftpane{
			position:absolute;
			left:0px;
			top:0px;
			right:50%;
			bottom:0px;
			border: 1px solid red;
			background-color:#fed;
	}
	#rightpane{
			position:absolute;
			left:50%;
			top:0px;
			right:0px;
			bottom:50%;
			border: 1px solid navy;
			background-color:#cef;
			font-family:lucida console;
			font-size:12px;
			
	}	
</style>

</head>
<body>
	
<?php
	
//-------------------------------------------------------------------------------------------------
// colorize - Assign the class depending on the kind of token
//-------------------------------------------------------------------------------------------------
		
$tags=array("link"=>"htmltag","meta"=>"htmltag","tbody"=>"htmltag","script"=>"htmltag","body"=>"htmltag","html"=>"htmltag","style"=>"htmltag","table"=>"htmltag","tr"=>"htmltag","td"=>"htmltag",
						"head"=>"htmltag",
						"function"=>"func","if"=>"func","else"=>"func",
						"for"=>"func","foreach"=>"func","array"=>"func","echo"=>"func","var"=>"func","let"=>"func","as"=>"func");
		
function colorize($token,$prevop)
{
		global $tags;

		$testtoken=trim($token);
		$token=str_replace("\t","&nbsp;&nbsp;",$token);
		
		if((isset($tags[$testtoken]))&&($prevop=="<")){ // 
				return "<span class='".$tags[$testtoken]."'>".$token."</span>";
		}else if((isset($tags[$testtoken]))&&($prevop=="/")){
				return "<span class='".$tags[$testtoken]."end'>".$token."</span>"; // </&gt;></div>
		}else if((isset($tags[$testtoken]))){
				return "<span class='".$tags[$testtoken]."'>".$token."</span>";		
		}else if($prevop=="$"){
				return "<span class='variable' >".$token."</span>";				
		}else if(is_numeric($token)||$token=="true"||$token=="false"||$token=="null"||$token=="undefined"){
				return "<span class='numeric' >".$token."</span>";				
		}else{
				return "<span class='name' >".$token."</span>";					
		}
		return $token;
}	
	
function syntax($content)
{
		global $tags;
		$contentarr=explode("\n",$content);
	
		$divider=0;
		$ret="";
		$strmode=0;	
		$rowno=0;
		foreach($contentarr as $contentrow){
				$ret.="<span id='row".$rowno."' class='coderow'>";
				$rowno++;
	//			str_replace("\n","",$contentrow);
	//			str_replace("\r","",$contentrow);			
				$length = strlen($contentrow);
				$token="";
				$prevop="";
				$strmode=0;
				$tabs="";
				for ($i=0; $i<$length; $i++) {
						$curstr=$contentrow[$i];
						// Comment is strmode 
						if($curstr=="/"&&$prevop=="/"&&$strmode!=3){
								$ret.=colorize($token,$prevop);
								$prevop=$curstr;	
								$strmode=3;
								$token="";
						}else if(($curstr=='"'||$curstr=="'")&&$strmode==0){
								// Start string mode!
								$ret.=colorize($token,$prevop);
								$prevop=$curstr;
								if($curstr=='"'){
										$strmode=1;
								}else{
										$strmode=2;
								}
								$token="";									
						}else if(($curstr=='"'&&$strmode==1)||($curstr=="'"&&$strmode==2)){
								// Print string and disable string mode!
								if($strmode==1){
										$ret.="<span class='string'>&quot;".fixhtml($token)."&quot;</span>";						
								}else{
										$ret.="<span class='string'>&apos;".fixhtml($token)."&apos;</span>";						
								}
								$strmode=0;
								$token="";
						}else if($strmode>0){
								// Process content in string mode!
								if($curstr=="<") $curstr="&lt;";
								if($curstr==" ") $curstr="&nbsp;";
								$token.=$curstr;						
						}else if($curstr=="\t"){
								$tabs.="&nbsp;&nbsp;";
						}else if($curstr==" "||$curstr=="<"||$curstr==">"||$curstr==","||$curstr==":"||$curstr=="/"||$curstr=="("||$curstr==")"||$curstr=="."||$curstr=="{"||$curstr=="}"||$curstr=="$"||$curstr=="="||$curstr=="-"||$curstr=="["||$curstr=="]"){
								// If there are tabs ... add in before token
								if($tabs!=""){
										//if($curstr=="<") $ret.="<div style='border-left:1px solid red;'>";
										$ret.=$tabs;
										$tabs="";
								}
								$ret.=colorize($token,$prevop);
								$prevop=$curstr;							
								if($curstr=="<") $curstr="&lt;";
								if($curstr==">") $curstr="&gt;";
								if($curstr!=" "){
										$ret.="<span class='divider' id='".$divider."' >".$curstr."</span>";
										$divider++;
								}else{
										$ret.=$curstr;
								}
								$token="";
						}else{
								$token.=$curstr;
						}
						// End of row!
				}

				if($strmode!=3){
						if($tabs!=""){
								//if($curstr=="<") $ret.="<div style='border-left:1px solid red;'>";
								$ret.=$tabs;
								$tabs="";
						}					
						$ret.=colorize($token,$prevop)."</span></span>";
				}else{
						// We are at end of line and print preceding comment line
						$ret.="<span class='comment'>/".$token."</span></span>";							
				}
		}
	
		return $ret;
}
	
//-------------------------------------------------------------------------------------------------
// fixhtml - Removes html tags by swapping < and > for html entities
//-------------------------------------------------------------------------------------------------
		
function fixhtml($token)
{
		$token=str_replace("<","&lt;",$token);
		$token=str_replace(">","&gt;",$token);
		return $token;
}	
	
if(isset($_POST['area'])){
		$outp=syntax($_POST['area']);
}else{
		$outp="NOTHING!";
}
	
?>
	
<div id="leftpane">
		<form action='compiler_html.php' method='post'>
			<textarea name="area" style="width:100%;height:90%;position:absolute;">
					<?php 
						if(isset($_POST['area'])){
								echo $_POST['area'];
						}else{
								echo "empty!";
						}
					?>
			</textarea>
			<button style='position:absolute;bottom:8px;height:30px;width:80px;'>Compile!</button>
		</form>
</div>
<div id="rightpane">
	<?php echo $outp; ?>
</div>
	
</body>
</html>