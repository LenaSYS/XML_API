<?php

include '../../formatData.php';

//Endpoint filters
// bookservice/books?mode=(json/xml)
// bookservice/books?sort=(id/title)
// bookservice/books?titlesearch=(searchterm)
//     bookservice/books?titlesearch=News
// bookservice/authors?prefacesearch=(searchterm)
//     bookservice/books?prefacesearch=slow
// bookservice/authors?authorsearch=(searchterm)
//     bookservice/books?authorsearch=Mark
// bookservice/authors?categorysearch=(searchterm)
//     bookservice/books?categorysearch=Young
// bookservice/books?(id/title)=(Matching Term) 
//     bookservice/books?id=131
//     bookservice/books?title=Beyond%20the%20City
// 
// Example:
// bookservice/books?categorysearch=Ghost&sort=title&mode=json

$mode=getParam("mode","xml");
$sort=urlencode(getParam("sort","none"));
if(!in_array($sort,Array("title","id"))) $sort="none";

$param="";
$search=getParam("titlesearch","none");
if($search!="none") $param=" WHERE title like '%".$search."%' ";
$search=getParam("prefacesearch","none");
if($search!="none") $param=" WHERE preface like '%".$search."%' ";
$search=getParam("authorsearch","none");
if($search!="none") $param=" WHERE authors like '%".$search."%' ";
$search=getParam("categorysearch","none");
if($search!="none") $param=" WHERE categories like '%".$search."%' ";

if($param=="") $param=makeMatches(Array("title","id"));

try {
	$log_db = new PDO('sqlite:../books.db');

	$str="SELECT * FROM book ";
	if($param!="none") $str.=$param;
	if($sort!="none") $str.="ORDER BY ".$sort;
	$str.=";";	
	$query = $log_db->prepare($str);
	$query->execute();
	$rows = $query->fetchAll(PDO::FETCH_ASSOC);

	if($mode=="json"){
			makeJson($rows,["authors","categories","preface"]);
	}else{
			makeXml("books","book",$rows,["authors","categories","preface"],["title","id","role"],["url","name"],array("preface"=>"p", "categories"=>"category"));
	}
	
}catch (PDOException $e){
    echo $e->getMessage();
}

?>