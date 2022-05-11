<?php

include '../../formatData.php';

//Endpoint filters
// githubservice/commits?mode=(json/xml)
// githubservice/commits?sort=(id/title)
// githubservice/commits?(repo/id/space/time/timestamp/author/login)=(Matching Term) 
//     githubservice/commits?author=a97marbr  
// githubservice/commits?messagesearch=(searchterm)
//     githubservice/
//
// Example:
// githubservice/commits?messagesearch=Update&sort=timestamp&mode=json

$mode=getParam("mode","xml");
$sort=urlencode(getParam("sort","none"));
if(!in_array($sort,Array("name","url"))) $sort="none";

$param="";
$search=getParam("messagesearch","none");
if($search!="none") $param=" WHERE message like '%".$search."%' ";

if($param=="") $param=makeMatches(Array("repo","id","space","time","timestamp","author","login"));

try {
	$log_db = new PDO('sqlite:../githubservice.db');
	$str='select * from commits ';
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="ORDER BY ".$sort;
	$str.=";";	
	$query = $log_db->prepare($str);
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["parents"]);
	}else{
			makeXml("commits","commit",$rows,[],["repo","id","space","time","timestamp","message","author","login"],["avatar"],[]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>