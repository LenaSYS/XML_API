# Overview
This example shows how we can perform conditional styling depending on the value of attributes.

In SAX conditional styling can most easily be based on attributes. In other cases it is more complex to perform conditional styling since global variables will be neeeded.

# Initiation
All SAX code uses the same architecture. The initiation is described in the Initiation and White Space Removal example.

# Start tag handler
We perform the conditional styling using the exact same code as we use when using arrays.

~~~
if($attributes['SHOESIZE']>51){
		echo "<tr style='background:#def;' >";          
}else{
		echo "<tr style='background:#fed;' >";          
}
~~~
