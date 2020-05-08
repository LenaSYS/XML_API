# Overview
This example shows how we can create a table with rows for nested data.

# Initiation
All SAX code uses the same architecture. The initiation is described in the Initiation and White Space Removal example.

# Start tag handler
When we create a table that makes use of rows for storing nested information we need to create a nested table and then rows for each nested element.

In this case we create the following html elements
* a table row (TR tag) for each person tag that we encounter.
* a column for the nested information (a TD tag **and a** TABLE tag).
* a row in the nested table for each car that we encounter (a TR tag **and a** TD tag)
* a cell (TD tag) for the NAME attribute to write the name of each person in the first cell of each row.

~~~
if($entityname=="PERSON"){
		echo "<tr>";
		echo "<td>".$attributes['NAME']."</td>";
		echo "<td><table>";
}else if($entityname=="CAR"){
		echo "<tr><td>";			
}
~~~

# End tag handler
The end tag closes the table tr and td tags.

# Text element handler
The text elements are written directly to the html document without processing