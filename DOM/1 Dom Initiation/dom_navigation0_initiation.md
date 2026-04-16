# Overview
This example shows how we can create a dropdown by writing a simple application that uses the DOM.

# Initiation
All DOM code uses the same architecture. The initiation is described in the Initiation example.

# Dom Document / Querying
Just like when we use SAX we load the XML data from a web service or from a file.

The document is then loaded into DOM and a Document Object Model is created.

~~~
$xml = file_get_contents('example1.xml');
$dom = new DomDocument;
$dom->preserveWhiteSpace = FALSE;
$dom->loadXML($xml);
~~~

We can then query the document for any tag that the document contains. A set of elements is then returned. 
We can after that iterate over the set of document objects just like when we iterate over arrays.

~~~
$people = $dom->getElementsByTagName('person');
foreach ($people as $person){
		... code that applies to each person element ...
}
~~~

The advantage is that we can navigate the objects and iterate over the document to retrieve the data in the order that we specify.
This is easier to read than working with arrays, and gives us easy access to document text and element attributes like in SAX.

* The main advantage of this approach compared to SAX is that it is compact since we can retrieve attributes or text by navigating the document structure.
* The main disadvantage is that compared to SAX, the DOM architecture is not declarative, we must know the structure of the data before we can work on it. If the structure is complex or unknown, navigation is very complicated.


