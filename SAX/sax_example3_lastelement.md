# Overview
This example shows how we can make use of global variables to track where sax is in the document.

# Initiation
All SAX code uses the same architecture. The initiation is described in the Initiation and White Space Removal example.
We have a slightly different file. We add two bicycles but we want to color bicycle colors in some other manner compared to car colors.
~~~
	<bicycle>
		<color>Gray</color>
	</bicycle>
	<bicycle>
		<color>Chartreuse</color>
	</bicycle>	
~~~

Both have the same element color.

# Start tag handler
We must first declare a global variable in all functions that we want to use it in
~~~
global $lastelement;
~~~
We write to the global variable for all elements that we want to track **except** for color.
~~~
if($entityname!="COLOR") $lastelement=$entityname;
~~~

# End tag handler
The end tag handler only needs to close tags.

# Text element handler
in the text elements we check if the previous tag was a car or a bicycle.
~~~
		 	if($lastelement=="CAR"){
					echo	"<span style='color:red;background:#fed;'>".$chardata."</span>";
			}else{
					echo $chardata;
			}
~~~