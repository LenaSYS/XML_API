var slides=[
		[	// 0
			{style:"Rubrik",text:"COURSE INTRODUCTION"},
			{style:"Rubrik",text:""},			
			{style:"Rubrik",text:"PHP BASICS"}
		],
		[	// 1
			{style:"Rubrik",text:"Course Modules"},
		 	{style:"Bullet",text:"Inlämning 1 1.5HP (U/G)"},
		 	{style:"Spacer",text:""},		 
		 	{style:"Bullet",text:"Inlämning 2 2HP (U/G)"},
		 	{style:"Spacer",text:""},		 		 
		 	{style:"Bullet",text:"Projektuppgift 3HP (U/G/VG)"},		 
		 	{style:"Spacer",text:""},		 		 
		  {style:"Bullet",text:"Hemtentamen 1HP (U/G/VG)"},		 
		],
		[	// 2
			{style:"Rubrik",text:"INTRODUCTION TO PHP"},
			{style:"Rubrik",text:""},				
			{style:"Rubrik",text:"TABLE LAYOUTS"}
		],
		[	// 3
			{style:"Rubrik",text:"PHP"},
		 	{style:"Bullet",text:"PHP: Hypertext Preprocessor A language for making web applications"},
		 	{style:"Bullet",text:"Has plugins for major databases and formats such as MySQL and XML and many others."},
		 	{style:"Bullet",text:"It is interpretated which means that a compiled binary in most cases will be faster"},
		 	{style:"Bullet",text:"PHP is similar to both C, Java and Perl. PHP borrows the ideas for its extensive standard library from various sources and libraries."},
		 	{style:"Bullet",text:"PHP is like C available both as a procedural language and as an object oriented language"}
		],
		[	// 4
			{style:"Rubrik",text:"Nested Arrays"},
		 	{style:"Bullet",text:"A nested array is an an array contained as an element inside another array"},
		 	{style:"Bullet",text:"We can iterate over a nested array in the same way as we iterate over a normal array"},
		 	{style:"Spacer",text:""},
		 	{style:"Bullet",text:"The most suitable representation for a Nested Array is a Table"},
			{style:"Bullet",text:"Each outer element is a row <tr> and the inner array is a column <td>"},	
		],
		[	// 5
			{style:"Rubrik",text:"Nested Tables"},
		 	{style:"Bullet",text:"A nested table is a table inside a table cell in the outer table"},
		 	{style:"Code",text:"<table>"},
		 	{style:"Code",text:"  <tr>"},
		 	{style:"Code",text:"    <td>"},
		 	{style:"Code",text:"      <table>... Nested Table ...</table>"},
		 	{style:"Code",text:"    <td>"},
		 	{style:"Code",text:"  <tr>"},
		 	{style:"Code",text:"<table>"},
		],	
		[	// 6
			{style:"Bullet",text:"Any code between \"<?php\" And \"?>\" is assumed to be PHP code and is executed by the PHP parser"},
		 	{style:"Bullet",text:"Any other text in the document is copied directly to the output"},
		 	{style:"Spacer"},
		 	{style:"Code",text:"<?php"},
		 	{style:"Code",text:"... PHP Code ..."},
		 	{style:"Code",text:"?>"}
		],
		[	// 7
			{style:"Rubrik",text:"Nested Table Layouts"},
		 	{style:"Bullet",text:"There are two ways to make nested tables"},
			{style:"Bullet",level:2,text:"We can make new <td> elements for each nested item (column layout)"},
			{style:"Bullet",level:2,text:"We can make a single <td> element and make each nested element a new row (row layout)"},
		],
		[	// 8
			{style:"Rubrik",text:"Row Layout"},
			{style:"Bullet",text:"The number of rows and columns partly dictate which layout is most suitable"},			
		 	{style:"Bullet",level:2,kind:"Plus",text:"If the nested data has a very variable numer of elements row layouts adapt well"},
		 	{style:"Bullet",level:2,kind:"Plus",text:"If nested elements have many columns row layouts are more suitable"},			
			{style:"Bullet",text:"We want to view as much of the table as possible without scrolling"},
		 	{style:"Bullet",level:2,kind:"Minus",text:"More screen realestate can be wasted if we use a row layout and have many nested arrays"},
		 	{style:"Bullet",level:2,kind:"Minus",text:"On computer platforms row layouts are less suitable since fewer rows fit on screen"},			
			{style:"Bullet",level:2,kind:"Plus",text:"Row layouts support arbitrarily large number of nested elements"},
		 	{style:"Bullet",level:2,kind:"Plus",text:"On mobile platforms row layouts are better as users prefer to scroll vertically"},
		],	
		[	// 9
		 	{style:"Rubrik",text:"Inlämning 1 1.5HP (U/G)"},
			{style:"Bullet",level:2,text:"Assignment 1 PHP Table Rendering"},
			{style:"Bullet",level:2,text:"Assignment 2 PHP Forms"},
			{style:"Bullet",level:2,text:"Assignment 3 Calling of Web Service"},
			{style:"Rubrik",text:"Inlämning 2 2HP (U/G)"},
			{style:"Bullet",level:2,text:"Assignment 4 Calling Web Service with SAX"},
			{style:"Bullet",level:2,text:"Assignment 5 Calling Web Service with DOM"},
			{style:"Bullet",level:2,text:"Assignment 5 Calling Web Service with XSLT"}
		],
		[	// 10
		 	{style:"Rubrik",text:"Projektuppgift 3HP (U/G/VG)"},
			{style:"Bullet",level:2,text:"You are given a link to a web service"},
			{style:"Bullet",level:2,text:"Figure out how interface is constructed and what data is contained"},
			{style:"Bullet",level:2,text:"Construct web application."},
			{style:"Rubrik",text:"Hemtentamen 1HP (U/G/VG)"},
			{style:"Bullet",level:2,text:"Questions on the theory of web services and php"},
			{style:"Bullet",level:2,text:"Analysis of development process"},
			{style:"Bullet",level:2,text:"Placing results of your project in context"},
			{style:"Bullet",level:2,text:"Reading and relating to research paper"}
		],
		[	// 11
			{style:"Rubrik",text:"Variables and Making HTML in PHP"},
			{style:"Bullet",level:2,text:"echo is used to write output which can be html or variables."},
			{style:"Code",text:"echo '<div>';"},
			{style:"Code",text:"echo \"<div>\";"},		
			{style:"Bullet",level:2,text:"Variables start with the $ character and do not need to be declared. This is a blessing and a curse."},
			{style:"Code",text:"echo $variable;"},
			{style:"Bullet",level:2,text:"Arrays can be indexed with numbers [0] or strings ['item1']"},
			{style:"Code",text:"echo $arr[0];"},
			{style:"Code",text:"echo $arr['Greger'];"},			
		],	
		[	// 12
			{style:"Rubrik",text:"Foreach array iteration"},
		 	{style:"Bullet",text:"Most programming languages have a way for the code to iterate e.g. to repeat a section of code a number of times. "},
		 	{style:"Bullet",text:"A block of code is executed for each item in a set of data (in this case an array)"},
		 	{style:"Spacer"},
		 	{style:"Bullet",text:"In this case the contents of each element in the array is echoed"},
		 	{style:"Code",text:"foreach ($array as $key => $value) {"},
		 	{style:"Code",text:"   echo $value;"},
		 	{style:"Code",text:"}"}
		],	
		[	// 13
			{style:"Rubrik",text:"Column Layout"},
			{style:"Bullet",text:"The number of rows and columns partly dictate which layout is most suitable"},
		 	{style:"Bullet",level:2,kind:"Plus",text:"If the number of elements of nested arrays are similar column layouts are more suitable"},
		 	{style:"Bullet",level:2,kind:"Plus",text:"If nested elements have few columns row layouts are more suitable"},			
			{style:"Bullet",text:"We want to view as much of the table as possible without scrolling"},
		 	{style:"Bullet",level:2,kind:"Minus",text:"It is more difficult to find a place for the <th> elements for the nested elements"},
		 	{style:"Bullet",level:2,kind:"Plus",text:"On computer platforms column layouts are more suitable since we use the width of screen well "},			
		],	
		[	// 14
			{style:"Rubrik",text:"Conditionals"},
		 	{style:"Bullet",text:"By using conditional we can do distinct actions depending on values of the data elements"},
		 	{style:"Spacer"},
		 	{style:"Bullet",text:"In this case the we echo red or blue styling on table row"},
		 	{style:"Code",text:"if($value[0]>15){"},
		 	{style:"Code",text:"   echo '<tr style=\"background:red\">';"},
		 	{style:"Code",text:"}else{"},
		 	{style:"Code",text:"   echo '<tr style=\"background:blue\">';"},
		 	{style:"Code",text:"}"}
		
		],		
];

var data=[
		[
			["Sweden",10],
			["France",67],
			["Spain", 46],
			["Norway", 5],
		],
		[
			["Sweden",10,[["Stockholm",962],["Gothenburg",572]]],
			["France",67,[["Paris",2200],["Lyon",513],["Toulouse",458],["Lille",235]]],
			["Spain", 46,[["Barcelona",1600],["Seville",690]]],
			["Norway", 5,[["Oslo",650]]],
		],
		[
			["Sweden",10,[["Stockholm",962],["Gothenburg",572]]],
			["France",67,[["Paris",2200],["Lyon",513],["Toulouse",458],["Lille",235]]],
			["Spain", 46,[["Barcelona",1600],["Seville",690]]],
			["Norway", 5,[["Oslo",650]]],
		],
		[],
		[
			["Sweden",10,[["Stockholm",962],["Gothenburg",572]]],
			["France",67,[["Paris",2200],["Lyon",513],["Toulouse",458],["Lille",235]]],
			["Spain", 46,[["Barcelona",1600],["Seville",690]]],
			["Norway", 5,[["Oslo",650]]],
		]	
];
	 
var rows=
[
		[
				[{statement:"echo",text:"<tr><th>Country</th><th>Population</th></tr>"}],
				[{statement:"foreach"}],
				[{statement:"echo",text:"<tr>"}],
				[{statement:"echo",text:"<td style='border-right:2px solid black;' >"},{statement:"echoarr",arr:0,pos:0},{statement:"echo",text:"</td>"}],
				[{statement:"echo",text:"<td style='border-right:2px solid black;'>"},{statement:"echoarr",arr:0,pos:1},{statement:"echo",text:"</td>"}],
				[{statement:"echo",text:"</tr>"}],	
				[{statement:"foreachret",arr:0,pos:0,row:1}]
		],
		[
				[{statement:"echo",text:"<tr><th>Country</th><th>Population</th><th>Cities</th></tr>"}],
				[{statement:"foreach"}],[{statement:"echo",text:"<tr>"}],
				[{statement:"echo",text:"<td style='border-right:2px solid black;' >"},{statement:"echoarr",arr:0,pos:0},{statement:"echo",text:"</td>"}],
				[{statement:"echo",text:"<td style='border-right:2px solid black;'>"},{statement:"echoarr",arr:0,pos:1},{statement:"echo",text:"</td>"}],
				[{statement:"echo",text:"<td>"}],
				[{statement:"echo",text:"<table>"}],
				[{statement:"echo",text:"<tr><th>Name</th><th>Population</th></tr>"}],
				[{statement:"foreach"}],
				[{statement:"echo",text:"<tr>"}],	
				[{statement:"echo",text:"<td>"},{statement:"echoarr",arr:1,pos:2,pos1:0},{statement:"echo",text:"</td>"}],
				[{statement:"echo",text:"<td>"},{statement:"echoarr",arr:1,pos:2,pos1:1},{statement:"echo",text:"</td>"}],
				[{statement:"echo",text:"</tr>"}],	
				[{statement:"foreachret",arr:1,pos:2,row:8}],	
				[{statement:"echo",text:"</table>"}],
				[{statement:"echo",text:"</td>"}],
				[{statement:"echo",text:"</tr>"}],
				[{statement:"foreachret",arr:0,pos:0,row:1}],		
		],
		[
				[{statement:"echo",text:"<tr><th>Country</th><th>Population</th><th colspan='4'>Cities</th></tr>"}],
				[{statement:"foreach"}],
				[{statement:"echo",text:"<tr>"}],	
				[{statement:"echo",text:"<td style='border-right:2px solid black;'>"},{statement:"echoarr",arr:0,pos:0},{statement:"echo",text:"</td>"}],
				[{statement:"echo",text:"<td style='border-right:2px solid black;'>"},{statement:"echoarr",arr:0,pos:1},{statement:"echo",text:"</td>"}],
				[{statement:"foreach"}],
				[{statement:"echo",text:"<td>"}],
				[{statement:"echo",text:"<table>"}],
				[{statement:"echo",text:"<tr><td>"},{statement:"echoarr",arr:1,pos:2,pos1:0},{statement:"echo",text:"</tr></td>"}],
				[{statement:"echo",text:"<tr><td>"},{statement:"echoarr",arr:1,pos:2,pos1:1},{statement:"echo",text:"</tr></td>"}],
				[{statement:"echo",text:"</table>"}],
				[{statement:"echo",text:"</td>"}],
				[{statement:"foreachret",arr:1,pos:2,row:5}],	
				[{statement:"echo",text:"</tr>"}],
				[{statement:"foreachret",arr:0,pos:0,row:1}],		
		],
		[
				[{statement:"echo",text:"<div style='padding:8px;border:1px solid red;margin:4px;'>"}],
				[{statement:"echovar",text:"Hello"}],
				[{statement:"echo",text:"</div>"}],	
				[{statement:"echo",text:"<div style='padding:8px;border:1px solid blue;margin:4px;'>"}],	
				[{statement:"echovar",text:"World"}],		
				[{statement:"echo",text:"</div>"}],	
		],
		[
				[{statement:"echo",text:"<tr><th>Country</th><th>Population</th><th>Cities</th></tr>"}],
				[{statement:"foreach"}],
				[{statement:"ifarr",arr:0,pos:1,row:2,else:5}],
				[{statement:"echo",text:"<tr style='background:#def;'>"}],
				[{statement:"else",else:6}],	
				[{statement:"nop"}],				
				[{statement:"echo",text:"<tr style='background:#fed;'>"}],	
				[
					{statement:"echo",text:"<td style='border-right:2px solid black;' >"},
					{statement:"echoarr",arr:0,pos:0},
					{statement:"echo",text:"</td>"}
				],
				[
					{statement:"echo",text:"<td style='border-right:2px solid black;'>"},
					{statement:"echoarr",arr:0,pos:1},
					{statement:"echo",text:"</td>"}
				],
				[{statement:"echo",text:"<td>"}],
				[{statement:"echo",text:"<table>"}],
				[{statement:"echo",text:"<tr><th>Name</th><th>Population</th></tr>"}],
				[{statement:"foreach"}],
				[{statement:"echo",text:"<tr>"}],	
				[{statement:"echo",text:"<td>"},{statement:"echoarr",arr:1,pos:2,pos1:0},{statement:"echo",text:"</td>"}],
				[{statement:"echo",text:"<td>"},{statement:"echoarr",arr:1,pos:2,pos1:1},{statement:"echo",text:"</td>"}],
				[{statement:"echo",text:"</tr>"}],	
				[{statement:"foreachret",arr:1,pos:2,row:12}],	
				[{statement:"echo",text:"</table>"}],
				[{statement:"echo",text:"</td>"}],
				[{statement:"echo",text:"</tr>"}],
				[{statement:"foreachret",arr:0,pos:0,row:1}],		
		]	
];
	
const strings=[
`$arr=array(
  array(<span class="data" id="aSweden">"Sweden"</span>,<span class="data" id="as10">10</span>),
  array(<span class="data" id="aFrance">"France"</span>,<span class="data" id="as67">67</span>),
  array(<span class="data" id="aSpain">"Spain"</span>,<span class="data" id="as46">46</span>),
  array(<span class="data" id="aNorway">"Norway"</span>,<span class="data" id="as5">5</span>)
);`
,
`<span id="arow0" class="coderow">echo '&lt;tr&gt;&lt;th&gt;Country&lt;/th&gt;&lt;th&gt;Population&lt;/th&gt;&lt;/tr&gt;';</span>
<span id="arow1" class="coderow">foreach ($arr as $country) {</span>
<span id="arow2" class="coderow">    echo '&lt;tr&gt;';</span>
<span id="arow3" class="coderow">    echo '&lt;td&gt;'.$country[0].'&lt;/td&gt;';</span>
<span id="arow4" class="coderow">    echo '&lt;td&gt;'.$country[1].'&lt;/td&gt;';</span>
<span id="arow5" class="coderow">    echo '&lt;/tr&gt;';</span>
<span id="arow6" class="coderow">}</span>
`
,
`
$arr=array(
  array(<span class="data" id='bSweden'>"Sweden"</span>,<span class="data" id='bs10'>10</span>,array(
    array(<span class="data" id='bStockholm'>"Stockholm"</span>,<span class="data" id='bs962'>962</span>),
    array(<span class="data" id='bGothenburg'>"Gothenburg"</span>,<span class="data" id='bs572'>572</span>))
  ),
  array(<span class="data" id='bFrance'>"France"</span>,<span class="data" id='bs67'>67</span>,array(
    array(<span class="data" id='bParis'>"Paris"</span>,<span class="data" id='bs2200'>2200</span>),
    array(<span class="data" id='bLyon'>"Lyon"</span>,<span class="data" id='bs513'>513</span>),
    array(<span class="data" id='bToulouse'>"Toulouse"</span>,<span class="data" id='bs458'>458</span>),
    array(<span class="data" id='bLille'>"Lille"</span>,<span class="data" id='bs235'>235</span>))
  ),
  array(<span class="data" id='bSpain'>"Spain"</span>,<span class="data" id='bs46'>46</span>,array(
    array(<span class="data" id='bBarcelona'>"Barcelona"</span>,<span class="data" id='bs1600'>1600</span>),
    array(<span class="data" id='bSeville'>"Seville"</span>,<span class="data" id='bs690'>690</span>))
	),
  array(<span class="data" id='bNorway'>"Norway"</span>,<span class="data" id='bs5'>5</span>,array(
    array(<span class="data" id='bOslo'>"Oslo"</span>,<span class="data" id='bs650'>650</span>))
  )
);
`
,
`
<span id="brow0" class="coderow">echo '&lt;tr&gt;&lt;th&gt;Country&lt;/th&gt;&lt;th&gt;Population&lt;/th&gt;&lt;th&gt;Cities&lt;/th&gt;&lt;/tr&gt;';</span>
<span id="brow1" class="coderow">foreach ($arr as $country) {</span>
<span id="brow2" class="coderow">    echo '&lt;tr&gt;';</span>
<span id="brow3" class="coderow">    echo '&lt;td&gt;'.$country[0].'&lt;/td&gt;';</span>
<span id="brow4" class="coderow">    echo '&lt;td&gt;'.$country[1].'&lt;/td&gt;';</span>
<span id="brow5" class="coderow">    echo '&lt;td&gt;';</span>
<span id="brow6" class="coderow">    echo '&lt;table&gt;';</span>
<span id="brow7" class="coderow">    echo '&lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Population&lt;/th&gt;&lt;/tr&gt;';</span>
<span id="brow8" class="coderow">    foreach($country[2] as $city){</span>
<span id="brow9" class="coderow">       echo '&lt;tr&gt;';</span>
<span id="brow10" class="coderow">       echo '&lt;td&gt;'.$city[0].'&lt;/td&gt;';</span>
<span id="brow11" class="coderow">       echo '&lt;td&gt;'.$city[1].'&lt;/td&gt;';</span>
<span id="brow12" class="coderow">       echo '&lt;/tr&gt;';</span>
<span id="brow13" class="coderow">    }</span>
<span id="brow14" class="coderow">    echo '&lt;/table&gt;';</span>
<span id="brow15" class="coderow">    echo '&lt;/td&gt;';</span>
<span id="brow16" class="coderow">    echo '&lt;/tr&gt;';</span>
<span id="brow17" class="coderow">}</span>
`
,
`
$arr=array(
  array(<span class="data" id='cSweden'>"Sweden"</span>,<span class="data" id='cs10'>10</span>,array(
    array(<span class="data" id='cStockholm'>"Stockholm"</span>,<span class="data" id='cs962'>962</span>),
    array(<span class="data" id='cGothenburg'>"Gothenburg"</span>,<span class="data" id='cs572'>572</span>))
  ),
  array(<span class="data" id='cFrance'>"France"</span>,<span class="data" id='cs67'>67</span>,array(
    array(<span class="data" id='cParis'>"Paris"</span>,<span class="data" id='cs2200'>2200</span>),
    array(<span class="data" id='cLyon'>"Lyon"</span>,<span class="data" id='cs513'>513</span>),
    array(<span class="data" id='cToulouse'>"Toulouse"</span>,<span class="data" id='cs458'>458</span>),
    array(<span class="data" id='cLille'>"Lille"</span>,<span class="data" id='cs235'>235</span>))
  ),
  array(<span class="data" id='cSpain'>"Spain"</span>,<span class="data" id='cs46'>46</span>,array(
    array(<span class="data" id='cBarcelona'>"Barcelona"</span>,<span class="data" id='cs1600'>1600</span>),
    array(<span class="data" id='cSeville'>"Seville"</span>,<span class="data" id='cs690'>690</span>))
	),
  array(<span class="data" id='cNorway'>"Norway"</span>,<span class="data" id='cs5'>5</span>,array(
    array(<span class="data" id='cOslo'>"Oslo"</span>,<span class="data" id='cs650'>650</span>))
  )
);
`
,
`
<span id="crow0" class="coderow">echo "&lt;tr&gt;&lt;th&gt;Country&lt;/th&gt;&lt;th&gt;Population&lt;/th&gt;&lt;th colspan='4'&gt;Cities&lt;/th&gt;&lt;/tr&gt;";</span>
<span id="crow1" class="coderow">foreach ($arr as $country) {</span>
<span id="crow2" class="coderow">  echo "&lt;tr&gt;";</span>
<span id="crow3" class="coderow">  echo "&lt;td&gt;".$country[0]."&lt;/td&gt;";</span>
<span id="crow4" class="coderow">  echo "&lt;td&gt;".$country[1]."&lt;/td&gt;";</span>
<span id="crow5" class="coderow">  foreach($country[2] as $city){</span>
<span id="crow6" class="coderow">    echo "&lt;td&gt;";</span>
<span id="crow7" class="coderow">    echo "&lt;table&gt;";</span>
<span id="crow8" class="coderow">    echo "&lt;tr&gt;&lt;td&gt;".$city[0]."&lt;/td&gt;&lt;/tr&gt;";</span>	
<span id="crow9" class="coderow">    echo "&lt;tr&gt;&lt;td&gt;".$city[1]."&lt;/td&gt;&lt;/tr&gt;";</span>
<span id="crow10" class="coderow">    echo "&lt;/table&gt;";</span>
<span id="crow11" class="coderow">    echo "&lt;/td&gt;";</span>
<span id="crow12" class="coderow">  }</span>
<span id="crow13" class="coderow">  echo "&lt;/tr&gt;";</span>
<span id="crow14" class="coderow">}</span>
`
,
`

$testvar=<span class="data" id='dHello'>"Hello"</span>;

$arr=array(<span class="data" id='dMy'>"My"</span>,<span class="data" id='dWorld'>"World")</span>;


`
,
`
&lt;html&gt;
  &lt;body&gt;
    &lt;?php
<span id="drow0" class="coderow">      echo "&lt;div style='padding:8px;border:1px solid red;margin:4px;' &gt;";</span>
<span id="drow1" class="coderow">      echo $testvar;</span>
<span id="drow2" class="coderow">      echo "&lt;/div&gt;"</span>
<span id="drow3" class="coderow">      echo "&lt;div style='padding:8px;border:1px solid blue;margin:4px;' &gt;";</span>
<span id="drow4" class="coderow">      echo $arr[1];</span>
<span id="drow5" class="coderow">      echo "&lt;/div&gt;";</span>		
    ?&gt;
  &lt;/body&gt;
&lt;/html&gt;
`
,
`
$arr=array(
  array(<span class="data" id='eSweden'>"Sweden"</span>,<span class="data" id='es10'>10</span>,array(
    array(<span class="data" id='eStockholm'>"Stockholm"</span>,<span class="data" id='es962'>962</span>),
    array(<span class="data" id='eGothenburg'>"Gothenburg"</span>,<span class="data" id='es572'>572</span>))
  ),
  array(<span class="data" id='eFrance'>"France"</span>,<span class="data" id='es67'>67</span>,array(
    array(<span class="data" id='eParis'>"Paris"</span>,<span class="data" id='es2200'>2200</span>),
    array(<span class="data" id='eLyon'>"Lyon"</span>,<span class="data" id='es513'>513</span>),
    array(<span class="data" id='eToulouse'>"Toulouse"</span>,<span class="data" id='es458'>458</span>),
    array(<span class="data" id='eLille'>"Lille"</span>,<span class="data" id='es235'>235</span>))
  ),
  array(<span class="data" id='eSpain'>"Spain"</span>,<span class="data" id='es46'>46</span>,array(
    array(<span class="data" id='eBarcelona'>"Barcelona"</span>,<span class="data" id='es1600'>1600</span>),
    array(<span class="data" id='eSeville'>"Seville"</span>,<span class="data" id='es690'>690</span>))
	),
  array(<span class="data" id='eNorway'>"Norway"</span>,<span class="data" id='es5'>5</span>,array(
    array(<span class="data" id='eOslo'>"Oslo"</span>,<span class="data" id='es650'>650</span>))
  )
);
`
,
`
<span id="erow0" class="coderow">echo '&lt;tr&gt;&lt;th&gt;Country&lt;/th&gt;&lt;th&gt;Population&lt;/th&gt;&lt;th&gt;Cities&lt;/th&gt;&lt;/tr&gt;';</span>
<span id="erow1" class="coderow">foreach ($arr as $country) {</span>
<span id="erow2" class="coderow">    if($country[1]&gt;30){</span>
<span id="erow3" class="coderow">      echo '&lt;tr style="background:#def;"&gt;';</span>				
<span id="erow4" class="coderow">    }else{</span>
<span id="erow5" class="coderow">      echo '&lt;tr style="background:#fed;"&gt;';</span>
<span id="erow6" class="coderow">    }</span>
<span id="erow7" class="coderow">    echo '&lt;td&gt;'.$country[0].'&lt;/td&gt;';</span>
<span id="erow8" class="coderow">    echo '&lt;td&gt;'.$country[1].'&lt;/td&gt;';</span>
<span id="erow9" class="coderow">    echo '&lt;td&gt;';</span>
<span id="erow10" class="coderow">    echo '&lt;table&gt;';</span>
<span id="erow11" class="coderow">    echo '&lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Population&lt;/th&gt;&lt;/tr&gt;';</span>
<span id="erow12" class="coderow">    foreach($country[2] as $city){</span>
<span id="erow13" class="coderow">       echo '&lt;tr&gt;';</span>
<span id="erow14" class="coderow">       echo '&lt;td&gt;'.$city[0].'&lt;/td&gt;';</span>
<span id="erow15" class="coderow">       echo '&lt;td&gt;'.$city[1].'&lt;/td&gt;';</span>
<span id="erow16" class="coderow">       echo '&lt;/tr&gt;';</span>
<span id="erow17" class="coderow">    }</span>
<span id="erow18" class="coderow">    echo '&lt;/table&gt;';</span>
<span id="erow19" class="coderow">    echo '&lt;/td&gt;';</span>
<span id="erow20" class="coderow">    echo '&lt;/tr&gt;';</span>
<span id="erow21" class="coderow">}</span>
`	
];
	