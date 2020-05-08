# Overview
This example shows how we can create a dropdown by writing a simple application that uses the DOM.

# Initiation
All DOM code uses the same architecture. The initiation is described in the Initiation example.

# Dom Document / Querying
Just like when we use SAX we load the XML data from a web service or from a file.

The document is then loaded into DOM and a Document Object Model is created.

We can then query the document for any tag that the document contains. A set of elements is then returned. 
We can after that iterate over the set of document objects just like when we iterate over arrays.
The code for generating a dropdown using the DOM is nearly identical to the code in SAX or the code that makes use of arrays.

~~~
$people = $dom->getElementsByTagName('person');
foreach ($people as $person){
	$attributes = $person->attributes;
	echo "<option value='".$attributes['ssn']->value."'>";
	echo $attributes['name']->value;       
}
~~~
