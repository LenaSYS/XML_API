<?php

include '../../formatData.php';

//Endpoint filters
// githubservice/repos?mode=(json/xml)
// githubservice/repos?sort=(id/title)
// githubservice/repos?(name/url)=(Matching Term) 
//     githubservice/repos?name=ContextFreeLib  
// githubservice/repos?filesearch=(searchterm)
//     githubservice/repos?filesearch=svg
//
// Example:
// githubservice/repos/index_db.php?filesearch=svg&sort=name&mode=xml

$mode=getParam("mode","xml");
$sort=urlencode(getParam("sort","none"));
if(!in_array($sort,Array("name","url"))) $sort="none";

$param="";
$search=getParam("filesearch","none");
if($search!="none") $param=" WHERE files like '%".$search."%' ";
$search=getParam("namesearch","none");
if($search!="none") $param=" WHERE name like '%".$search."%' ";

if($param=="") $param=makeMatches(Array("name","url"));

try {
	$log_db = new PDO('sqlite:../githubservice.db');
	$str='select * from repo ';
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="ORDER BY ".$sort;
	$str.=";";		
	$query = $log_db->prepare($str);
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["files"]);
	}else{
			makeXml("repos","repo",$rows,["files","subdirectory"],["name","url","type","fullname"],[],["subdirectory"=>"file","files"=>"file"]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>