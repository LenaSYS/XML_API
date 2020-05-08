# Overview
This example shows how we can remove white space text data.

# Initiation

We we configure the three handler functions by calling the two set_handler functions.

~~~
$parser = xml_parser_create();
xml_set_element_handler($parser, "startElement", "endElement");
xml_set_character_data_handler($parser, "charData");
~~~

We load a file or call a web service to retrieve an XML file with file_get_contents. The contents are then passed to the xml_parse function which starts the parsing of the XML Data. 

# Removing White Space Tags
SAX does normally not react differently when it encounters white space compared to when it encounters text data. Most commonly, we are only interested in the actual text information and we are not interested in the white space between tags.


The example XML file contains a lot of white space in order to make it easier to read using a text editor.


In the charData function, the trim function removes any white space from a string variable. The following if statement stops the execution of the function if, after the removal of white space only an empty string remains. All other cases i.e. when there is text, parsing continues and prints the text data to the web page. 