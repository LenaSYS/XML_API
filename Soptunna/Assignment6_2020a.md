## There are four variants of this test! You need to be logged in to see which version of the test that applies to you

# Assignment 6 - XML Web Service using XSLT
The goal of the sixth assignment is to use the DOM to process data from an XML web service and present it in a html table.

## Assignment Requirements
The assignment has one set of requirements for the code and one set of requirements which detail the questions that need to be answered in the report.

The requirements listed below are the minimum for passing the assignment. You are allowed make additional changes to the application in order to gain further insight in to PHP programming and the use of XML data.

### Code Requirements for grade G

Code must be mostly correctly indented according to the K&R indentation format (see code example for indentation standard).

1. The given code for the responseXSLT.php page should be modified and code for loading fromthe service using the paper attribute should be added.  
2. The response page should receive the type attribute from the form and pass that parameter to the article service. If nothing is chosen in the dropdown nothing should be shown.
3. In the response page the articles should be displayed using a table. The table should be formatted according to the following rules:
  * Each newspaper should have a row in the table
  * The articles for each newspaper should be displayed using a **Row layout** and Apply Templates (see "XSLT Apply Template Rows" Example)
  * The stories/headings inside articles should be processed using **Apply Templates** (see "Apply Template" Examples)
  * Each story should be displayed using a div tag and each heading should be displayed using the h3 tag (see "XSLT Navigation" Examples).
  * The attributes of each newspaper and each article should be displayed using **iteration** (see "XSLT Iteration Attributes" Example)
  * Using iteration each text element inside a story should be displayed using a separate paragraph tag (see "XSLT Iteration" Examples).
  * The comment elements should be ignored.
  * Reviews and News articles should be styled distinctly (see "XSLT Conditional Styling" Example) 
  * You must **make sure** that the stories that have headings between the story elements (such as "Mother of All Demos" or "Plan 9") are displayed with story elements interleaved with headings.
4. Update the styling (use inline or css in head element, no external css files are allowed) to make the table look distinct from the previous table e.g. change colors/background colors/fonts etc.
5. Use styling that clearly shows that each paragraph inside a story is a distinct element (e.g. borders/spacing/shadowing etc.)
6. Use styling to change font family of the paragraph and headings so that the headings and body text have the same font family but other properties (such as size and boldness)
7. No further styling is necessary, the default browser styling is sufficient.

### Report Requirements
* Use the !!!showdoc.php?cid=13&fname=Dokumentmallen_programmering.zip,report template!!! from the course page and when finished upload the code compressed with zip, a link to your application (php web page), and the report as a pdf and then press the save button for the test below.
* Reports with no code will be failed
* Reports with code and no or very little text describing the code will be failed
* Paste the (sparsely commented) code that you have written into the document and write a short paragraph of text (a few lines of text) that describes the idea behind the code
* The report should contain at least one screenshot of your application

* Discuss the advantages and disadvantages that you experience with using a web service with XSLT compared to having the DOM in assignment 5 or an arrays as in assignment 3 and compared to using SAX as in Assignment 4.

### The given application code

Please visit the articles page first to get acquainted with the contents of the XML data. Note how the raw data is easier to understand than raw data in JSON array format
https://wwwlab.iit.his.se/gush/XMLAPI/articleservice/articles/?paper=Morning_Edition

form.php
~~~
<?php
	$xslDoc = new DOMDocument();
	$xslDoc->load("xslt_select.xsl");

	$xml = file_get_contents('https://wwwlab.iit.his.se/gush/XMLAPI/articleservice/papers/');
	$xmlDoc = new DomDocument;
	$xmlDoc->preserveWhiteSpace = FALSE;
	$xmlDoc->loadXML($xml);

	$proc = new XSLTProcessor();
	$proc->importStylesheet($xslDoc);
	echo $proc->transformToXML($xmlDoc);
?>                                                                                                                                
~~~

xslt_select.xsl
~~~
<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <form method='post' action='responseXSLT.php'>
            <select name='paper'>
                <xsl:apply-templates/>
            </select>
            <button>send</button>
        </form>
    </xsl:template>
    <xsl:template match="NEWSPAPER[@TYPE='Morning_Edition']">
        <option value='Morning_Edition'>
            <xsl:value-of select="@NAME">
            </xsl:value-of>
        </option>
    </xsl:template>
    <xsl:template match="NEWSPAPER[@TYPE='Evening_Edition']">
        <option value='Evening_Edition'>
            <xsl:value-of select="@NAME">
            </xsl:value-of>
        </option>
    </xsl:template>
</xsl:stylesheet>                                                                                                                             
~~~

responseXSLT.php
~~~
<?php
	$xslDoc = new DOMDocument();
	$xslDoc->load("xslt_response.xsl");

	$xml = file_get_contents('https://wwwlab.iit.his.se/gush/XMLAPI/articleservice/articles/');
	$xmlDoc = new DomDocument;
	$xmlDoc->preserveWhiteSpace = FALSE;
	$xmlDoc->loadXML($xml);

	$proc = new XSLTProcessor();
	$proc->importStylesheet($xslDoc);
	echo $proc->transformToXML($xmlDoc);
?>                                                                                                                                
~~~

xslt_response.xsl
~~~
<?xml version="1.0" encoding="utf-8"?>
 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

	<xsl:template match="/">
	  <div>Hello World!!</div>
	</xsl:template>	
	 
</xsl:stylesheet>   ~~~