<?php
	$xslDoc = new DOMDocument();
	$xslDoc->load("xslt_response.xsl");

	if(isset($_POST['paper'])){
			$paper=$_POST['paper'];
	}else{
			$paper="Greger";
	}

	$xml = file_get_contents('https://wwwlab.iit.his.se/gush/XMLAPI/articleservice/articles?paper='.$paper);
	$xmlDoc = new DomDocument;
	$xmlDoc->preserveWhiteSpace = FALSE;
	$xmlDoc->loadXML($xml);

	$proc = new XSLTProcessor();
	$proc->importStylesheet($xslDoc);
	echo $proc->transformToXML($xmlDoc);
?>