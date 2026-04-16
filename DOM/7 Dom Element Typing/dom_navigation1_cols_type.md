# Overview
This example shows how we can create a column layout by writing a simple application that uses the DOM.

# Initiation
All DOM code uses the same architecture. The initiation is described in the Initiation example.

# Dom Document / Querying
One of the key issues when working with DOM documents is that an element may contain elements of more than one element type. In this example, we have <car> and <address> elements that are both contained inside the <person> elements.
* In SAX this situation is handled declaratively by having two distinct if-statements for each element.
* In DOM we must do something similar since there is otherwise no way to differentiate between the two element types.
In this case we use the nodeName of the node to write the street name of the <address> elements and the license plate number of the <car> elements.

~~~
foreach ($person->childNodes as $child){

		$attributes = $child->attributes;
		if($child->nodeName=="address"){
				echo "<td style='color:red;'>".$attributes['street']->value."</td>";
		}else if($child->nodeName=="car"){
				echo "<td style='color:teal;'>".$attributes['lpno']->value."</td>";
		}
}	
~~~