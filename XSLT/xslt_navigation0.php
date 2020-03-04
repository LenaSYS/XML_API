<?php
   $xslDoc = new DOMDocument();
   $xslDoc->load("xslt_navigation0.xsl");
   $xmlDoc = new DOMDocument();
 
   $xmlDoc->load("example1_2019.xml");
   $proc = new XSLTProcessor();
   $proc->importStylesheet($xslDoc);
   echo $proc->transformToXML($xmlDoc);
 
?>