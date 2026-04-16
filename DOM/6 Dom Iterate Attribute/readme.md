# Overview
This example shows how we can write the values of attributes by explicitly naming an attribute using the DOM.

# Initiation
All DOM code uses the same architecture. The initiation is described in the Initiation example.

# Dom Document / Querying
Iteration is done by retrieving the set of attributes using a method and then iterating over that set of attributes in a manner that is very similar to the iteration over attributes in SAX or when using arrays.

~~~
$attributes = $person->attributes;
foreach ($attributes as $index=>$attr) {
		echo "<td>".$attr->value."</td>";
}	
~~~
