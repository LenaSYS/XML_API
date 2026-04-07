# Overview
This example shows how we can show attributes.

In cases when there are few attributes or when we want to show only a limited number of attributes from a larger set. 
We explicitly (by indexing using the attribute name) create elements for each attribute that we want to show.
The disadvantage is that we need to know exactly which attrinutes to show and each element that we display needs to have the same set of atttributes.

# Initiation
All SAX code uses the same architecture. The initiation is described in the Initiation and White Space Removal example.

# Start tag handler
Each attribute is echoed by writing the data in the attributes array by indexing the array with the name of the attribute.
~~~
echo "<td>".$attributes['NAME']."</td>";
~~~
