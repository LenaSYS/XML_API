## There are four variants of this test! You need to be logged in to see which version of the test that applies to you

# Assignment 5 - XML Web Service using DOM
The goal of the fifth assignment is to use the DOM to process data from an XML web service and present it in a html table.

## Assignment Requirements
The assignment has one set of requirements for the code and one set of requirements which detail the questions that need to be answered in the report.

The requirements listed below are the minimum for passing the assignment. You are allowed make additional changes to the application in order to gain further insight in to PHP programming and the use of XML data.

### Code Requirements for grade G

Code must be mostly correctly indented according to the K&R indentation format (see code example for indentation standard).

1. The given code for the form.php page should be modified and a select dropdown box should be added.  
2. The dropdown should show the name of the newspaper but send the type to response.php (see "DOM Select Dropdown" Example)
3. The response page should receive the type attribute from the form and pass that parameter to the article service. If nothing is chosen in the dropdown Morning_Edition articles should be shown.
4. In the response page the articles should be displayed using a table. The table should be formatted according to the following rules:
 * Each newspaper should have a row in the table
 * The articles for each newspaper should be displayed using a **Column layout** (see "DOM Table Columns" Example)
 * The attributes of each newspaper and each article should be displayed using **explicit attributes** (see "DOM Explicit Attributes" Example)
 * Each story should be displayed using a div tag and each heading should be displayed using the h3 tag (see "DOM Element Typing" Example).
 * Using iteration each text element inside a story should be displayed using a separate paragraph tag. (See "DOM Element Typing" Example).
 * The comment elements should be ignored.
 * Reviews and News articles should be styled distinctly (see "DOM Conditional Styling" Example) 
 * You must **make sure** that the stories that have headings between the story elements (such as "Mother of All Demos" or "Plan 9") are displayed with story elements interleaved with headings.
5. Update the styling (use inline or css in head element, no external css files are allowed) to make the table look distinct from the previous table e.g. change colors/background colors/fonts etc.
6. Use styling that clearly shows that each paragraph inside a story is a distinct element (e.g. borders/spacing/shadowing etc.)
7. Use styling to change font family of the paragraph and headings so that the headings and body text have the same font family but other properties (such as size and boldness)
8. No further styling is necessary, the default browser styling is sufficient.

### Report Requirements
* Use the !!!showdoc.php?cid=13&fname=Dokumentmallen_programmering.zip,report template!!! from the course page and when finished upload the code compressed with zip, a link to your application (php web page), and the report as a pdf and then press the save button for the test below.
* Reports with no code will be failed
* Reports with code and no or very little text describing the code will be failed
* Paste the (sparsely commented) code that you have written into the document and write a short paragraph of text (a few lines of text) that describes the idea behind the code
* The report should contain at least one screenshot of your application

* Discuss the advantages and disadvantages that you experience with using a web service with XML (and DOM) compared to having an arrays as in assignment 3 and compared to using SAX as in Assignment 3.

### The given application code

Please visit the articles page first to get acquainted with the contents of the XML data. Note how the raw data is easier to understand than raw data in JSON array format
https://wwwlab.iit.his.se/gush/XMLAPI/articleservice/articles/?paper=Morning_Edition

form.php
~~~
<html>
	<body>
		<form method='POST' action='response.php'>
<?php
 
 		$xml = file_get_contents('https://wwwlab.iit.his.se/gush/XMLAPI/articleservice/papers');
    $dom = new DomDocument;
    $dom->preserveWhiteSpace = FALSE;
    $dom->loadXML($xml);
    
    $newspapers= $dom->getElementsByTagName('NEWSPAPER');
    foreach ($newspapers as $newspaper){
  				echo $newspaper->getAttribute("NAME");		
    }
		
		echo "<select name='paper'>";
		
		echo "</select>";
		
  
?>
		<button>Submit!</button>
		</form>
	</body>
</html>                                                                                                                                            
~~~

response.php
~~~
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
~~~

