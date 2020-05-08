<html>
	<body>
		<table>
<?php
 
    // Morning edition is default
    if(isset($_POST['paper'])){
        $paper=$_POST['paper'];
    }else{
        $paper="Morning_Edition";
    }			
						
 		$xml = file_get_contents("https://wwwlab.iit.his.se/gush/XMLAPI/articleservice/articles?paper=".$paper);
    $dom = new DomDocument;
    $dom->preserveWhiteSpace = FALSE;
    $dom->loadXML($xml);

    $newspapers= $dom->getElementsByTagName('NEWSPAPER');
    foreach ($newspapers as $newspaper){
  				echo "<tr><td>".$newspaper->getAttribute("NAME")."</td></tr>";		
    }
		
  
?>
		</table>
	</body>
</html>