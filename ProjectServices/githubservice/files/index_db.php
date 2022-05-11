<?php

include '../../formatData.php';

//http://localhost/XML_API/ProjectServices/githubservice/files/index_db.php?linesearch=param&sort=author&mode=xml

//Endpoint filters
// githubservice/files?mode=(json/xml)
// githubservice/files?sort=(filename/author/commitid/timestamp/fullname/repo)
// githubservice/files?filename/author/commitid/timestamp/fullname/repo=(Matching Term) 
// githubservice/files?linesearch=(searchterm)
//     githubservice/files?linesearch=svg
// githubservice/files?messagesearch=(searchterm)
//     githubservice/files?messagesearch=svg
//
// Example:
// githubservice/files?linesearch=param&sort=author&mode=xml

$mode=getParam("mode","xml");
$sort=urlencode(getParam("sort","none"));
if(!in_array($sort,Array("filename","author","commitid","timestamp","fullname","repo"))) $sort="none";

$param="";
$search=getParam("linesearch","none");
if($search!="none") $param=" WHERE lines like '%".$search."%' ";
$search=getParam("messagesearch","none");
if($search!="none") $param=" WHERE message like '%".$search."%' ";

if($param=="") $param=makeMatches(Array("filename","author","commitid","timestamp","fullname","repo"));

try {
	$log_db = new PDO('sqlite:../githubservice.db');
  $str='select * from section ';
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="ORDER BY ".$sort;
	$str.=";";		
	$query = $log_db->prepare($str);
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["lines"]);
	}else{
			makeXml("files","section",$rows,["lines"],["fullname","repo","filename","author","commitid","message","row"],["code"],["lines"=>"line"]);
	}
	
  // SECTION(filename,author,commitid,message,timestamp,lines)

}catch (PDOException $e){
    echo $e->getMessage();
}

?>