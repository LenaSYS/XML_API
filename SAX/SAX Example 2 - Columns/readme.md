# Overview
This example shows how we can create a table with colums for nested data.

# Initiation
All SAX code uses the same architecture. The initiation is described in the Initiation and White Space Removal example.

# Start tag handler
When we create a table that makes use of columns for storing nested information we need to create rows for each element and we want to create table cells for the nested elements.

In this case we create the following html elements:
* a table row (TR tag) for each person tag that we encounter
* a table cell (TD tag) for each car that we encounter.
* We also use the NAME attribute to write the name of each person in the first cell of each row.

~~~
if($entityname=="PERSON"){
		echo "<tr>";
		echo "<td>".$attributes['NAME']."</td>";
}else if($entityname=="CAR"){
		echo "<td>";			
}
~~~

# End tag handler
The end tag closes the tr and td tags.

# Text element handler
The text elements are written directly to the html document without processing