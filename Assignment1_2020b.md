# Assignment 1 - PHP Table Rendering
The goal of the first assignment is to present the data from an array in a html table.

## Assignment Requirements
The assignment has one set of requirements for the code and one set of requirements which detail the questions that need to be answered in the report.

The requirements listed below are the minimum for passing the assignment. You are allowed make additional changes to the application in order to gain further insight in to PHP programming and/or the use of XML data.

### Code Requirements for grade G

Code must be mostly correctly indented according to the K&R indentation format (see code example for indentation standard).

1. Present the array data from the code below using html in a table. All data in the array should be shown.
2. Use a **Column Layout** for each vehicle.
3. The background color for each vehicle must change depending on the country of the vehicle producer. Any producer in the belarus should have a yellow background, and any other producers should have a light blue background. Any CSS must be defined in the document head. (No external css files, see conditional code example)
4. Add styling to the rest of the elements to make the table  (use inline or css in head element, no external css files are allowed)
5. No further styling is necessary, the default browser styling is sufficient.

### Report Requirements
* Use the !!!showdoc.php?cid=13&fname=Dokumentmallen_programmering.zip,report template!!! from the course page and when finished upload the code compressed with zip, a link to your application (php web page), and the report as a pdf and then press the save button for the test below.
* Reports with no code will be failed
* Reports with code and no or very little text describing the code will be failed
* Paste the (sparsely commented) code that you have written into the document and write a short paragraph of text (a few lines of text) that describes the idea behind the code

### The given application code

Code is given below that iterates over the list of trucks.

~~~
<?php
	$trucks=Array(
	Array("KrAZ","Kremenchuk","Ukraine",
		Array(
					Array("KrAZ-65055","6x6","330Hp"),
					Array("KrAZ-6130C4","6x6","330Hp"),
					Array("KrAZ-5133H2","4x2","330Hp"),
					Array("KrAZ-7140H6","8x6","400Hp")
		)),
	Array("EBIAM","Thessaloniki","Greece",
		Array(
					Array("EBIAM MVM","4x4","86Hp")
		)),
	Array("KaMAZ","Naberezhnye Chelny","Tatarstan",
		Array(
					Array("KAMAZ 54115","6x4","240Hp"),
					Array("KAMAZ 6560","8x8","400Hp"),
					Array("KAMAZ 5460","8x8","340Hp")
		)),
	Array("LIAZ","Rynovice","Czechoslovakia",Array(
					Array("LIAZ 706 RT","2x4","160Hp")
	)),
	Array("IRUM","Brasov","Romania",
		Array(
			Array("TAF 690","2x4","90Hp")
		)),
	Array("MAZ","Minsk","Belarus",
		Array(
			Array("MAZ 535","8x8","375Hp"),
			Array("MAZ 7310","8x8","525Hp"),
			Array("MAZ 7907","4x12","1250Hp"),
			Array("MAZ 6317","6x6","425Hp"),
			Array("MAZ 6430","6x6","360Hp"),	
			Array("MAZ 5551","4x2","160Hp")																																													
		)),
	Array("BelAz","Zohodino","Belarus",
		Array(
			Array("Belaz 75600","4x4","3400Hp")
		)),
	Array("Oshkosh","Oshkosh","USA",
		Array(
			Array("Oshkosh P-15","8x8","840Hp"),
			Array("Oshkosh MK-36","6x6","425Hp")
		)),
	Array("Tatra","Koprivnice","Czechoslovakia",
		Array(
				Array("Tatra T 813","4x4","266Hp"),
				Array("Tatra T 815","10x10","436Hp"),
		))
	);

	foreach($truck as $truck){
			echo $truck."<br>";
	}	

?>
</pre>
</body>
</html>
~~~


  
