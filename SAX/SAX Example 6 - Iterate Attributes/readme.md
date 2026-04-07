# Overview
This example shows how we can show attributes.

In cases when we have a large number of attributes or when the attribute count is unknown we can use iteration to echo the value of attributes.
The disadvantage is that we show ALL attributes, even if some attributes are not needed or even present in some elements.

# Initiation
All SAX code uses the same architecture. The initiation is described in the Initiation and White Space Removal example.

# Start tag handler
Each attribute is echoed by writing the data in the attributes array by indexing the array with the name of the attribute.
~~~
foreach ($attributes as $attname => $attvalue) {
		echo "<td>";
		echo $attvalue;
		echo "</td>";
}
~~~
