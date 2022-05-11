<?php

include '../../formatData.php';

//Endpoint filters
// scheduleservice/staff?mode=(json/xml)
// scheduleservice/staff?sort=(id/fname/lname/title/department/birthyear/telnr)
// scheduleservice/staff?(id/fname/lname/title/department/birthyear/telnr)=(Matching Term) 
//     scheduleservice/staff?fname=Greger  
// scheduleservice/staff?namesearch=(searchterm)
//     scheduleservice/staff?namesearch=Bark
//
// Example:
// scheduleservice/staff?filesearch=svg&sort=name&mode=xml

$mode=getParam("mode","xml");
$sort=urlencode(getParam("sort","none"));
if(!in_array($sort,Array("id","fname","lname","title","department","birthyear","telnr"))) $sort="none";

$param="";
$search=getParam("namesearch","none");
if($search!="none") $param=" WHERE fname like '%".$search."%' or lname like '%".$search."%' ";

if($param=="") $param=makeMatches(Array("id","fname","lname","title","department","birthyear","telnr"));

try {
	$log_db = new PDO('sqlite:../scheduleservice.db');

	$str="select * from staff ";
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="order by ".$sort;
	$str.=";";	
	$query = $log_db->prepare($str);
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,[]);
	}else{
			makeXml("stafflist","staff",$rows,[],["id","fname","lname","title","department","birthyear","telnr"],[],[]);
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>