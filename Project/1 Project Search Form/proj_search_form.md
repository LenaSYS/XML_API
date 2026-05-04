# Overview
This example shows how we can use search endpoints in our application

# Initiation
All SAX/DOM/XSLT code uses the same pattern for loading the XML resource. The initiation is described in the Initiation example.

# Calling search endpoint
The aim is to send the text written in the textbox to the search endpoint. In our services we use the search postfix to indicate that an endpoint uses search (and we can therefore send input that is not a direct match).

When we use a dropdown the alternatives in the dropdown are represented using select and option tags. The name attribute defines how we read from the dropdown.
~~~
<select name='ssn'>
   <option>123445-1135</option>
</select>
~~~

When we use a text box for searching we make a text input. For the text input the name attribute also defines how we read from the dropdown. 

~~~
<input type='text' name='ssn' />
~~~

It is imprtant to note that not all endpoints have an alternative search endpoint, for example titles may commonly only have search endpoints but identifiers may not. Other endpoints exist in both a search and a direct match flavor.

