# Overview
This example shows how we can write the values of attributes by explicitly naming an attribute using the DOM.

# Initiation
All DOM code uses the same architecture. The initiation is described in the Initiation example.

# Dom Document / Querying
There are two ways to explicitly retrieve attributes in DOM 
* by retrieving the set of attributes and reading attribute values from that set
* or by calling a method to get a specific attribute

The attribute set method is more familiar to programmers that ar familiar with working with arrays.
~~~
$attributes = $person->attributes;
echo "<td>".$attributes['name']->value."</td>";
~~~

Using a method to retrieve an attribute is more familiar to programmers that work with object oriented structures.
~~~
echo "<td>".$person->getAttribute("ssn")."</td>";	
~~~