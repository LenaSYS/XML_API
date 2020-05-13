# Overview
This example shows how we can use search endpoints in our application

# Map projections
The aim is to draw a latitude and longitude into a diagram/picture. This may sound trivial but is actually a slightly complicated task.
If the world was flat the conversion would be easy but since the planet is a ball, a straight line on a map is not a straight line on the earth. In the north this issue is greater since in most maps the far north and the far south are stretched more. 
An example of this is that Greenland in reality is barely the size of Madagascar, but on a map it appears that Greenland is as large as Africa.

|||https://wwwlab.iit.his.se/gush/XMLAPI/ProjectExamples/africaVSgreenland.png|||

The latitudes and longitudes favoured by most geographical systems are angular coordinates. So we need to either convert the angular coordinate to pixels or convert the pixel map to angular coordinates.
The simplest approach is to use a map in angular coordinates (it will look squashed for northern/southern locales, when compared to a 'normal' map).

# The Code

In that case we convert the latitude and loongitude to pixel coordinates directly. In that case it is a question of figuring out where the top left corner of the map is and how many degrees that map covers either by math or by trial and error.

In this case we multiply with around 3 for the size and we add 30.0 and 305.26 respectively to place the cities in the right places in the map.

~~~
echo "<circle cx='".((3.10*$city[2])+30.20)."' cy='".((-3.73*$city[3])+305.26)."' r='3' fill='#8d4' stroke='#000' >";
~~~

We use the same coordinates if we generate svg vector graphics or if we display the circle using a div.
