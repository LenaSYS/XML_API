<html>
  <head>
    <style>
    table{
      border: 1px solid green;
    }
    td{
      border: 1px solid green;
    }
    h3{
      color: pink;
      font-family: monospace;
    }
    div{
      font-family: monospace;
    }
    </style>
  </head>
  <body>
    <table>
<?php
echo '<pre>';
print_r ($_POST);
echo '</pre>';

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
    $articles = $dom->getElementsByTagName('ARTICLE');
    foreach ($newspapers as $newspaper){
      echo "<tr>";
      echo "<td>".$newspaper->getAttribute("NAME")."</td>";
      echo "<td>".$newspaper->getAttribute("SUBSCRIBERS")."</td>";
      echo "<td>".$newspaper->getAttribute("TYPE")."</td>";


      foreach ($newspaper->childNodes as $child){
        echo "<td>";
        echo "<table>";
        foreach ($child->childNodes as $grandChild){
					if(trim($grandChild->nodeValue)!=""){
							if($child->getAttribute("DESCRIPTION")=="News"){
									echo "<tr style='background:#def;'>";
							}
							else{
									echo "<tr style='background:#dfe;'>";
							}
							echo "<td>";

							if($grandChild->nodeName=="HEADING"){
								echo "<h3>";
								echo $grandChild->nodeValue;
								echo "</h3>";
							}else if($grandChild->nodeName=="STORY"){
								echo "<div>";
								foreach ($grandChild->childNodes as $child3){
									echo "<p>";
									echo $child3->nodeValue;
									echo "</p>";
								}
								echo "</div>";
							}
							echo "</td>";
							echo "</tr>";
				}
      }
      echo "</table>";
      echo "</td>";
     }
   }
?>
    </table>
  </body>
</html>
