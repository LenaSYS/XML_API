# Assignment 3 - SAX (Simple API for XML)
The goal of this assignment is to make use of the SAX API (from the SAX example set) to present newspaper data in an HTML table structure.

## Assignment Requirements
The assignment have one set of the requirements for the code and one set of requirements which details the questions that need to be answered in the report for this assignment.

The requirements listed below are the minimum for passing the assignment. You are allowed make additional changes to the application in order to gain further insight in to PHP programming and the use of XML data.

The goal of this assignment is to display the data from !!!showdoc.php?cid=13&fname=example1_2019.xml,example1_2019.xml!!! using SAX in an HTML table layout.

### Code Requirements for grade G

Code must be mostly correctly indented according to the K&R indentation format (see code example for indentation standard).

1. Present the !!!showdoc.php?cid=13&fname=example1_2019.xml,newspaper data from the example1_2019.xml file!!! using SAX in a table.
2. Use either columns or rows to present each article. (choose code from either column or row examples)
3. Use either explicit or iterated processing of each attribute in the newspaper element and the article element (choose either code from explicit or iterated attribute examples).
4. Present heading elements using the h3 element. (see code examples for generating elements other than table elements)
5. Present each text element in the story element as a div or a li element (li element require ul or ol elements also, see code examples)
6. No further styling is necessary, the default browser styling is sufficient.

### Code Requirements for grade VG
1. The background color for each article element must change depending on the value of the article's description attribute using inline styles or class attributes. Any CSS must be defined in the document head. (No external css files, see conditional code example)
2. Add styling of the div or li element (use inline or css in head element, no external css files are allowed)
3. Add th elements and style th elements with a background color and text color (see various examples)

### Demonstration images

These demonstration screenshots depict one example of how the data ***may*** be presented, and should ***not*** be used as a pixel-perfect reference.

The screenshots show the resulting web page for the VG mark and the resulting page may be far more ornate than necessary for G. 

# Column based thumbnail 
facit_sax_rows.png
# Row based thumbnail
facit_sax_cols.png

### Report Requirements:
* Use the !!!showdoc.php?cid=13&fname=Dokumentmallen_programmering.zip,report template!!! from the course page and when finished upload the code compressed with zip, a link to your application (php web page), and the report as a pdf and then press the save button for the dugga below.
* Discuss why formatting is complicated when using the SAX API.
* Explain the thinking behind your styling in the table and your parsing code. 

### The given application
The code given below opens the xml file !!!showdoc.php?cid=13&fname=example2_2018.xml,example1_2019.xml!!! and displays the XML file content without formatting.

~~~
<html>
<body>
<table>
<?php
    function startElement($parser, $entityname, $attributes) {
    		if($entityname=='NEWSPAPER'){
						echo "<tr>";
				}
    }

    function endElement($parser, $entityname) {
    		if($entityname=='NEWSPAPER'){
						echo "</tr>";
				}
		}

    function charData($parser, $chardata) {
    		$chardata=trim($chardata);
    		if($chardata=="") return;
    		echo "<td>".$chardata."</td>";
    }

    $parser = xml_parser_create();
    xml_set_element_handler($parser, "startElement", "endElement");
    xml_set_character_data_handler($parser, "charData");

    $file = 'example1_2019.xml';
    $data = file_get_contents($file);

    if(!xml_parse($parser, $data, true)){
        printf("<P> Error %s at line %d</P>", xml_error_string(xml_get_error_code($parser)),xml_get_current_line_number($parser));
    }else{
        print "<br>Parsing Complete!</br>";
    }
    
    xml_parser_free($parser);
?>
</table>
</body>
</html>
~~~
