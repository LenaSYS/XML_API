# Overview
This example shows how we can create a dropdown by writing a simple SAX handler function.

# Initiation
All SAX code uses the same architecture. The initiation is described in the Initiation and White Space Removal example.

# Start tag handler
We want to generate option tags inside a select tag. The select tag and the form can be created in static html or by using echo in PHP.
When generating a dropdown we only need to react to a single tag, in this case the PERSON tag. We use the SSN attribute of the PERSON lements to set the value and the NAME attribute in the option tag.

~~~
if($entityname=="PERSON"){
		echo "<option value='".$attributes['SSN']."'>";
		echo $attributes['NAME'];
}
~~~

# End tag handler
The end tag handler only needs to close the option tag.

# Text element handler
The text elments can in this case be completely ignored.