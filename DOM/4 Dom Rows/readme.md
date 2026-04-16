# Overview
This example shows how we can create a table row layout by writing a simple application that uses the DOM.

# Initiation
All DOM code uses the same architecture. The initiation is described in the Initiation example.

# Dom Document / Querying
We query the document for the elements that we are interested in. Then we iterate over the resulting set of elements and generate a row for each element.
~~~
$people = $dom->getElementsByTagName('person');
foreach ($people as $person){
		echo "<tr>";
		... code for each person element ...
		echo "</tr>";	
}
~~~

For each of the elements contained in a person element we can then write content of those elements to the document.
In a row layout we primarily crate <tr> tags for sub-elements and attributes. We can either write the contents of attributes of the element.

~~~
$attributes = $person->attributes;
echo "<td>".$attributes['name']->value."</td>";
~~~

Or we can iterate into the documents further using child nodes or we can write the text contained in the element. As can be seen in the example we iterate over the sub-elements exactly like how we iterate over the sub-arrays when the data is contained in arrays. For each new element contained inside the person element we create a new <tr> element.
~~~
echo "<td><table>";
foreach ($person->childNodes as $child){
		echo  "<tr>";
		$text=trim($child->nodeValue);
		if($text!=""){
				echo "<td>".$text."</td>";
		}
		echo "</tr>";
}
echo "</table></td>";
~~~
