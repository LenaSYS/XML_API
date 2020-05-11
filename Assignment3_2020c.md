## There are four variants of this test! You need to be logged in to see which version of the test that applies to you

# Assignment 3 - Calling Web Service
The goal of the second assignment is to use forms to filter the data from the same data array containing the vehicles and present it in a html table.

## Assignment Requirements
The assignment has one set of requirements for the code and one set of requirements which detail the questions that need to be answered in the report.

The requirements listed below are the minimum for passing the assignment. You are allowed make additional changes to the application in order to gain further insight in to PHP programming and the use of XML data.

### Code Requirements for grade G

Code must be mostly correctly indented according to the K&R indentation format (see code example for indentation standard).

1. You should change from using an array to reading the array from the web service
2. A select box should contain a list of **the manufacturers** in the array. (select must be generated by php from array, **the name of the manufacturer** should be shown in the dropdown and the **country** of the manufacturer should be sent to the receiving php script)
3. The application shall use a **self referencing form** (**not** a form / response page)
4. Make a table containing the vehicles with a **column layout** .
5. The list of vehicles should come from the web service, filtered by the country selected in the dropdown.
6. Update the styling (use inline or css in head element, no external css files are allowed) to make the table look distinct from the previous table e.g. change colors/background colors/fonts etc.
7. No further styling is necessary, the default browser styling is sufficient.

### Report Requirements
* Use the !!!showdoc.php?cid=13&fname=Dokumentmallen_programmering.zip,report template!!! from the course page and when finished upload the code compressed with zip, a link to your application (php web page), and the report as a pdf and then press the save button for the test below.
* Reports with no code will be failed
* Reports with code and no or very little text describing the code will be failed
* Paste the (sparsely commented) code that you have written into the document and write a short paragraph of text (a few lines of text) that describes the idea behind the code
* The report should contain at least one screenshot of your application

* Discuss the advantage and disadvantage of using a web service compared to having an array declared in the code as in assignment 2.

### The given application code

You should continue modifying the code from the PHP table rendering assignment.

You should use the web service url-s below

~~~
https://wwwlab.iit.his.se/gush/XMLAPI/vehiclesservice/manufacturer/

https://wwwlab.iit.his.se/gush/XMLAPI/vehiclesservice/vehicles/

https://wwwlab.iit.his.se/gush/XMLAPI/vehiclesservice/vehicles/?country=Countryname
~~~