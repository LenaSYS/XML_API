

var slides=[
		[	// 0
			{style:"Rubrik",text:"XML WEB SERVICES"},
			{style:"Rubrik",text:""},
			{style:"Rubrik",text:"SAX"},			
			{style:"Rubrik",text:""}
		],
		[	// 1
			{style:"Rubrik",text:"What is XML and how it it related to Web Services"},
		 	{style:"Bullet",text:"XML is Like JSON"},
			{style:"Bullet",level:2 ,text:"Text document for representing data"},
			{style:"Bullet",level:2 ,text:"Tree Structure"},
		 	{style:"Bullet",level:2 ,text:"Human Readable"},	
		 	{style:"Bullet",text:"The *oldest* data format for the web"},
			{style:"Bullet",level:2 ,text:"Based on SGML (which is from 1960-s)"},
		 	{style:"Bullet",level:2 ,text:"XML Defined by WWW Consortium in 1998"},
		 	{style:"Bullet",level:2 ,text:"Like HTML but with user-defined tags"},
		 	{style:"Bullet",level:2 ,text:"Exactly one root tag"},
		 	{style:"Bullet",level:2 ,text:"All tags end inside parent tag"}
		],
		[	// 2
			{style:"Rubrik",text:"XML Structure"},
		 	{style:"Bullet",text:"An XML Document Has A Limited Set of Structural Elements"},
		 	{style:"Bullet",text:"*<element>* Elements can contain other elements"},
		 	{style:"Bullet",text:"*</element>* Elements have end tags"},			
		 	{style:"Bullet",text:"<element *attribute='value'* > Attributes contain strings and are contained in the start tag of elements"},	
		 	{style:"Bullet",text:"Elements can contain text"}				
		],	
		[	// 3
			{style:"Rubrik",text:"XML Structure"},
		 	{style:"Code",text:"<persons>"},
		 	{style:"Code",text:"  <person name='Greger' ssn='111213-1415' shoesize='52' >"},
		 	{style:"Code",text:"    <address street='12th' />"},
		 	{style:"Code",text:"    <car lpno='abc123' latitude='58.38' longitude='13.56'>"},
		 	{style:"Code",text:"      <color>Moccasin</color>"},
		 	{style:"Code",text:"    </car>"},
		 	{style:"Code",text:"  </person>"},
		 	{style:"Code",text:"  <person name='Sven' ssn='222222-5555' shoesize='51' >"},
		 	{style:"Code",text:"    <address street='42nd' />"},
		 	{style:"Code",text:"    <address street='Mott' />"},			
		 	{style:"Code",text:"    <car lpno='abc123' >"},
		 	{style:"Code",text:"      <color>Moccasin</color>"},
		 	{style:"Code",text:"    </car>"},
			{style:"Code",text:"    <car lpno='dex554' latitude='28.18' longitude='15.16'>"},
		 	{style:"Code",text:"      <color>Teal</color>"},
		 	{style:"Code",text:"    </car>"},
		 	{style:"Code",text:"  </person>"},			
		],			
		[	// 4
			{style:"Rubrik",text:"Compared to JSON"},			
		 	{style:"Bullet",text:"JSON is more *compact* as tags occupy more space than brackets in json"},
		 	{style:"Bullet",text:"JSON is *faster* to process"},	
		 	{style:"Bullet",text:"XML more suited for *documents* JSON more suited for *data*"},
			{style:"Bullet",text:"JSON supports *more* *platforms* than the web, but XML more suited for HTML based applications"},				
		 	{style:"Bullet",text:"XML is more human *readadble* than JSON"},
		 	{style:"Bullet",text:"XML is more *declarative* i.e. you can define that an operation should happen to a certain type of element"},	
		 	{style:"Bullet",text:"XML has more robust support for *streaming*"}

		],		
		[	// 5
			{style:"Rubrik",text:"API for XML"},
		 	{style:"Bullet",text:"Several Application Programming Interfaces for XML exist. JSON is more like a protocol that stores data."},
		 	{style:"Bullet",text:"*SAX* - Streaming and declarative processing but not suitable for navigation"},
		 	{style:"Bullet",text:"*DOM* - Processes XML by Navigation. The model used inside web browsers and javascript"},
		 	{style:"Bullet",text:"*XSLT* - Declarative processing, only makes HTML or plain Text"}			
		],
		[	// 6
			{style:"Rubrik",text:"SAX"},
		 	{style:"Bullet",text:"SAX makes use of callbacks, functions written by a user, but called by software that the user is not in control of"},
		 	{style:"Bullet",text:"The baiscs are simple, we give the SAX interface three functions that are then called automatically"},
			{style:"Bullet",level:2 ,text:"A function for handling the *start* of tags including *attributes*"},
			{style:"Bullet",level:2 ,text:"A function for handling the *end* of tags"},
			{style:"Bullet",level:2 ,text:"A function for handling the *text* data between tags"}			
		],
		[	// 7
			{style:"Rubrik",text:"SAX Code"},
			{style:"Bullet",level:2 ,text:"We create the parser and assign the three handler functions"},
			{style:"Bullet",level:2 ,text:"Then we read the XML from a file or Web Service"},
			{style:"Bullet",level:2 ,text:"Attributes are easy to handle but text elements more complicated since text elements "},			
			{style:"Code",text:"$parser = xml_parser_create();"},
		 	{style:"Code",text:"xml_set_element_handler($parser, 'startElement', 'endElement');"},
		 	{style:"Code",text:"xml_set_character_data_handler($parser, 'charData');"},
		 	{style:"Code",text:"$file = 'example1.xml';"},
		 	{style:"Code",text:"$data = file_get_contents($file);"},
			{style:"Code",text:"xml_parse($parser, $data, true);"}
		],			
		[	// 8
			{style:"Rubrik",text:"Handler Functions for Dropdown"},
			{style:"Bullet",level:2 ,text:"If we create a dropdown we only need to react to very few of the elements"},

			{style:"Code",text:"function startElement($parser, $entityname, $attributes) {"},
		 	{style:"Code",text:"  if($entityname=='PERSON'){"},		
		 	{style:"Code",text:"    echo '<option value=\"'.$attributes['SSN'].'\">.$attributes['NAME'];"},
		 	{style:"Code",text:"  }"},
		 	{style:"Code",text:"}"},
		 	{style:"Code",text:""},	
			{style:"Code",text:"function endElement($parser, $entityname) {"},
		 	{style:"Code",text:"  if($entityname=='PERSON'){"},		
		 	{style:"Code",text:"    echo '</option>';"},
		 	{style:"Code",text:"  }"},
		 	{style:"Code",text:"}"},	
		 	{style:"Code",text:""},	
			{style:"Code",text:"function charData($parser, $chardata) {"},
		 	{style:"Code",text:"  // Ignore Char Data "},					
		 	{style:"Code",text:"}"}	
		],
		[	// 9
			{style:"Rubrik",text:"Row Layout - Table rows for person and car"},
			{style:"Code",text:"function startElement($parser, $entityname, $attributes) {"},
		 	{style:"Code",text:"  if($entityname=='PERSON'){"},		
		 	{style:"Code",text:"    echo '<tr>;'"},
		 	{style:"Code",text:"    echo '<td><table>';"},			
		 	{style:"Code",text:"  }else if($entityname=='CAR'){"},
		 	{style:"Code",text:"    echo '<tr><td>';"},			
		 	{style:"Code",text:"  }"},
		 	{style:"Code",text:"}"},
		 	{style:"Code",text:""},	
			{style:"Code",text:"function endElement($parser, $entityname) {"},
		 	{style:"Code",text:"  if($entityname=='PERSON'){"},		
		 	{style:"Code",text:"    echo '</table></td></tr>';"},
		 	{style:"Code",text:"  }else if($entityname=='CAR'){"},
		 	{style:"Code",text:"    echo '</td></tr>';"},			
		 	{style:"Code",text:"  }"},			
		 	{style:"Code",text:"}"},
		],
		[	// 10
			{style:"Rubrik",text:"Column Layout - Rows for Person Cell for Car"},
			{style:"Code",text:"function startElement($parser, $entityname, $attributes) {"},
		 	{style:"Code",text:"  if($entityname=='PERSON'){"},		
		 	{style:"Code",text:"    echo '<tr>;'"},
		 	{style:"Code",text:"  }else if($entityname=='CAR'){"},
		 	{style:"Code",text:"    echo '<td>';"},			
		 	{style:"Code",text:"  }"},
		 	{style:"Code",text:"}"},
		 	{style:"Code",text:""},	
			{style:"Code",text:"function endElement($parser, $entityname) {"},
		 	{style:"Code",text:"  if($entityname=='PERSON'){"},		
		 	{style:"Code",text:"    echo '</tr>';"},
		 	{style:"Code",text:"  }else if($entityname=='CAR'){"},
		 	{style:"Code",text:"    echo '</td>';"},			
		 	{style:"Code",text:"  }"},			
		 	{style:"Code",text:"}"},

		]		
	
];
		// More slides? If anything a complete example...

var data=[
	{
			textbox:"hello",
			selectbox:"BOpt",
			Button:"B2"
	},
	[

	],
];
	 
var rows=
[
	[
		[{statement:"step",codeno:0,coderow:0,dataelem:"e1",output:"<select>",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e1",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e1",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:5,dataelem:"e1",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:0,dataelem:"e2",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:1,dataelem:"e2",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:2,dataelem:"e2",output:"<option>",time:0}],	
		[{statement:"step",codeno:0,coderow:3,dataelem:"e2",output:"Greger",time:0}],	
		[{statement:"step",codeno:0,coderow:4,dataelem:"e2",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:5,dataelem:"e2",output:"",time:0}],		
		[{statement:"step",codeno:0,coderow:0,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e3",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:5,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:7,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e3",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:11,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:0,dataelem:"e4",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e4",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e4",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:5,dataelem:"e4",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:0,dataelem:"e5",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e5",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e5",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:5,dataelem:"e5",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:13,dataelem:"f1",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:14,dataelem:"f1",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"f1",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:7,dataelem:"e6",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e6",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e6",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:11,dataelem:"e6",output:"",time:0}],
		
		[{statement:"step",codeno:0,coderow:7,dataelem:"e7",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e7",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:11,dataelem:"e7",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:7,dataelem:"e8",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e8",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:9,dataelem:"e8",output:"</option>",time:0}],		
		[{statement:"step",codeno:0,coderow:10,dataelem:"e8",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:11,dataelem:"e8",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e9",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:2,dataelem:"e9",output:"<option>",time:0}],	
		[{statement:"step",codeno:0,coderow:3,dataelem:"e9",output:"Sven",time:0}],	
		[{statement:"step",codeno:0,coderow:4,dataelem:"e9",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:5,dataelem:"e9",output:"",time:0}],		
		[{statement:"step",codeno:0,coderow:0,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e10",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:5,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:7,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e10",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:11,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:0,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e11",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:5,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:7,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e11",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:11,dataelem:"e11",output:"",time:0}],

		// Car
		[{statement:"step",codeno:0,coderow:0,dataelem:"e12",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e12",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e12",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:5,dataelem:"e12",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:0,dataelem:"e13",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e13",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e13",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:5,dataelem:"e13",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:13,dataelem:"f2",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:14,dataelem:"f2",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"f2",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e14",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e14",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e14",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:11,dataelem:"e14",output:"",time:0}],		
		[{statement:"step",codeno:0,coderow:7,dataelem:"e15",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e15",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e15",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:11,dataelem:"e15",output:"",time:0}],		
		// Car
		[{statement:"step",codeno:0,coderow:0,dataelem:"e16",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e16",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e16",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:5,dataelem:"e16",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:0,dataelem:"e17",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e17",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e17",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:5,dataelem:"e17",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:13,dataelem:"f3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:14,dataelem:"f3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"f3",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e18",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e18",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e18",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:11,dataelem:"e18",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e19",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e19",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e19",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:11,dataelem:"e19",output:"",time:0}],			
		
		// /Person
		[{statement:"step",codeno:0,coderow:7,dataelem:"e20",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e20",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:9,dataelem:"e20",output:"</option>",time:0}],		
		[{statement:"step",codeno:0,coderow:10,dataelem:"e20",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:11,dataelem:"e20",output:"",time:0}],

		// /persons
		[{statement:"step",codeno:0,coderow:7,dataelem:"e21",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e21",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e21",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:11,dataelem:"e21",output:"",time:0}],
		
	],
	[
		// Persons
		[{statement:"step",codeno:0,coderow:0,dataelem:"e1",output:"<table>",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e1",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e1",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:6,dataelem:"e1",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:7,dataelem:"e2",output:"",time:0}],	
		// Person
		[{statement:"step",codeno:0,coderow:0,dataelem:"e2",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e2",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:2,dataelem:"e2",output:"<tr>",time:0}],
		[{statement:"step",codeno:0,coderow:3,dataelem:"e2",output:"<td>Greger</td>",time:0}],		
		[{statement:"step",codeno:0,coderow:4,dataelem:"e2",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:6,dataelem:"e2",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e2",output:"",time:0}],	
		// Address
		[{statement:"step",codeno:0,coderow:0,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e3",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:6,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:7,dataelem:"e3",output:"",time:0}],	
		// EAddress
		[{statement:"step",codeno:0,coderow:9,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e3",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:14,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e3",output:"",time:0}],	
		// Car
		[{statement:"step",codeno:0,coderow:0,dataelem:"e4",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e4",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e4",output:"",time:0}],		
		[{statement:"step",codeno:0,coderow:5,dataelem:"e4",output:"<td>",time:0}],	
		[{statement:"step",codeno:0,coderow:6,dataelem:"e4",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e4",output:"",time:0}],			
		// Color
		[{statement:"step",codeno:0,coderow:9,dataelem:"e5",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e5",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e5",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:14,dataelem:"e5",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e5",output:"",time:0}],	
		// Moccasin
		[{statement:"step",codeno:0,coderow:17,dataelem:"f1",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:18,dataelem:"f1",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:19,dataelem:"f1",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:20,dataelem:"f1",output:"Moccasin",time:0}],
		[{statement:"step",codeno:0,coderow:21,dataelem:"f1",output:"",time:0}],
		// EColor
		[{statement:"step",codeno:0,coderow:9,dataelem:"e6",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e6",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e6",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:14,dataelem:"e6",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e6",output:"",time:0}],
		// ECar
		[{statement:"step",codeno:0,coderow:9,dataelem:"e7",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e7",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e7",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:13,dataelem:"e7",output:"</td>",time:0}],			
		[{statement:"step",codeno:0,coderow:14,dataelem:"e7",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e7",output:"",time:0}],	
		// EPerson
		[{statement:"step",codeno:0,coderow:9,dataelem:"e8",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e8",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e8",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:13,dataelem:"e8",output:"</tr>",time:0}],			
		[{statement:"step",codeno:0,coderow:14,dataelem:"e8",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e8",output:"",time:0}],	
		// Person
		[{statement:"step",codeno:0,coderow:0,dataelem:"e9",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e9",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:2,dataelem:"e9",output:"<tr>",time:0}],
		[{statement:"step",codeno:0,coderow:3,dataelem:"e9",output:"<td>Sven</td>",time:0}],		
		[{statement:"step",codeno:0,coderow:4,dataelem:"e9",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:6,dataelem:"e9",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e9",output:"",time:0}],	
		// Address
		[{statement:"step",codeno:0,coderow:0,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e10",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:6,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:7,dataelem:"e10",output:"",time:0}],	
		// EAddress
		[{statement:"step",codeno:0,coderow:9,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e10",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:14,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e10",output:"",time:0}],	
		// Address
		[{statement:"step",codeno:0,coderow:0,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e11",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:6,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:7,dataelem:"e11",output:"",time:0}],	
		// EAddress
		[{statement:"step",codeno:0,coderow:9,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e11",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:14,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e11",output:"",time:0}],	
	
		// Car
		[{statement:"step",codeno:0,coderow:0,dataelem:"e12",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e12",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e12",output:"",time:0}],		
		[{statement:"step",codeno:0,coderow:5,dataelem:"e12",output:"<td>",time:0}],	
		[{statement:"step",codeno:0,coderow:6,dataelem:"e12",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e12",output:"",time:0}],			
		// Color
		[{statement:"step",codeno:0,coderow:0,dataelem:"e13",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e13",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e13",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:6,dataelem:"e13",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:7,dataelem:"e13",output:"",time:0}],	
		// Moccasin
		[{statement:"step",codeno:0,coderow:17,dataelem:"f2",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:18,dataelem:"f2",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:19,dataelem:"f2",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:20,dataelem:"f2",output:"Red",time:0}],
		[{statement:"step",codeno:0,coderow:21,dataelem:"f2",output:"",time:0}],
		// EColor
		[{statement:"step",codeno:0,coderow:9,dataelem:"e14",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e14",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e14",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:14,dataelem:"e14",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e14",output:"",time:0}],
		// ECar
		[{statement:"step",codeno:0,coderow:9,dataelem:"e15",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e15",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e15",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:13,dataelem:"e15",output:"</td>",time:0}],			
		[{statement:"step",codeno:0,coderow:14,dataelem:"e15",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e15",output:"",time:0}],	

	
		// Car
		[{statement:"step",codeno:0,coderow:0,dataelem:"e16",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e16",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e16",output:"",time:0}],		
		[{statement:"step",codeno:0,coderow:5,dataelem:"e16",output:"<td>",time:0}],	
		[{statement:"step",codeno:0,coderow:6,dataelem:"e16",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e16",output:"",time:0}],			
		// Color
		[{statement:"step",codeno:0,coderow:0,dataelem:"e17",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e17",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e17",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:6,dataelem:"e17",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:7,dataelem:"e17",output:"",time:0}],	
		// Moccasin
		[{statement:"step",codeno:0,coderow:17,dataelem:"f3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:18,dataelem:"f3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:19,dataelem:"f3",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:20,dataelem:"f3",output:"Teal",time:0}],
		[{statement:"step",codeno:0,coderow:21,dataelem:"f3",output:"",time:0}],
		// EColor
		[{statement:"step",codeno:0,coderow:0,dataelem:"e18",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e18",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"e18",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:6,dataelem:"e18",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:7,dataelem:"e18",output:"",time:0}],
		// ECar
		[{statement:"step",codeno:0,coderow:9,dataelem:"e19",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e19",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e19",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:13,dataelem:"e19",output:"</td>",time:0}],			
		[{statement:"step",codeno:0,coderow:14,dataelem:"e19",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e19",output:"",time:0}],	
		// EPerson
		[{statement:"step",codeno:0,coderow:9,dataelem:"e20",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e20",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:11,dataelem:"e20",output:"</tr>",time:0}],	
		[{statement:"step",codeno:0,coderow:12,dataelem:"e20",output:"",time:0}],			
		[{statement:"step",codeno:0,coderow:14,dataelem:"e20",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e20",output:"",time:0}],	
			// EPersons
		[{statement:"step",codeno:0,coderow:9,dataelem:"e21",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e21",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e21",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:14,dataelem:"e21",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e21",output:"",time:0}],
	],
	[
		// Persons
		[{statement:"step",codeno:0,coderow:0,dataelem:"e1",output:"<table>",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e1",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:5,dataelem:"e1",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e1",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e2",output:"",time:0}],	
		// Person
		[{statement:"step",codeno:0,coderow:0,dataelem:"e2",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e2",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:2,dataelem:"e2",output:"<tr>",time:0}],
		[{statement:"step",codeno:0,coderow:3,dataelem:"e2",output:"<td>Greger</td>",time:0}],		
		[{statement:"step",codeno:0,coderow:4,dataelem:"e2",output:"<td><table>",time:0}],	
		[{statement:"step",codeno:0,coderow:5,dataelem:"e2",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e2",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e2",output:"",time:0}],	
		// Address
		[{statement:"step",codeno:0,coderow:0,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:5,dataelem:"e3",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e3",output:"",time:0}],	
		// EAddress
		[{statement:"step",codeno:0,coderow:10,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:11,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:14,dataelem:"e3",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:16,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:17,dataelem:"e3",output:"",time:0}],
		// Car
		[{statement:"step",codeno:0,coderow:0,dataelem:"e4",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e4",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:5,dataelem:"e4",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:6,dataelem:"e4",output:"<tr><td>",time:0}],		
		[{statement:"step",codeno:0,coderow:4,dataelem:"e4",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e4",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:8,dataelem:"e4",output:"",time:0}],	
		// Color
		[{statement:"step",codeno:0,coderow:0,dataelem:"e5",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e5",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:5,dataelem:"e5",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e5",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e5",output:"",time:0}],		
		// Moccasin
		[{statement:"step",codeno:0,coderow:19,dataelem:"f1",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:20,dataelem:"f1",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:21,dataelem:"f1",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:22,dataelem:"f1",output:"Moccasin",time:0}],
		[{statement:"step",codeno:0,coderow:23,dataelem:"f1",output:"",time:0}],		
		// EColor
		[{statement:"step",codeno:0,coderow:10,dataelem:"e6",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:11,dataelem:"e6",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:14,dataelem:"e6",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e6",output:"",time:0}],		
		[{statement:"step",codeno:0,coderow:16,dataelem:"e6",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:17,dataelem:"e6",output:"",time:0}],		
		// ECar
		[{statement:"step",codeno:0,coderow:10,dataelem:"e7",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:11,dataelem:"e7",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:14,dataelem:"e7",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e7",output:"</td></tr>",time:0}],		
		[{statement:"step",codeno:0,coderow:16,dataelem:"e7",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:17,dataelem:"e7",output:"",time:0}],
		// EPerson
		[{statement:"step",codeno:0,coderow:10,dataelem:"e8",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:11,dataelem:"e8",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e8",output:"</table></td>",time:0}],
		[{statement:"step",codeno:0,coderow:13,dataelem:"e8",output:"</tr>",time:0}],		
		[{statement:"step",codeno:0,coderow:14,dataelem:"e8",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:16,dataelem:"e8",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:17,dataelem:"e8",output:"",time:0}],
		// Person
		[{statement:"step",codeno:0,coderow:0,dataelem:"e9",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e9",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:2,dataelem:"e9",output:"<tr>",time:0}],
		[{statement:"step",codeno:0,coderow:3,dataelem:"e9",output:"<td>Sven</td>",time:0}],		
		[{statement:"step",codeno:0,coderow:4,dataelem:"e9",output:"<td><table>",time:0}],	
		[{statement:"step",codeno:0,coderow:5,dataelem:"e9",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e9",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e9",output:"",time:0}],	
		// Address
		[{statement:"step",codeno:0,coderow:0,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:5,dataelem:"e10",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e10",output:"",time:0}],	
		// EAddress
		[{statement:"step",codeno:0,coderow:10,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:11,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:14,dataelem:"e10",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:16,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:17,dataelem:"e10",output:"",time:0}],		
		// Address
		[{statement:"step",codeno:0,coderow:0,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:5,dataelem:"e11",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e11",output:"",time:0}],	
		// EAddress
		[{statement:"step",codeno:0,coderow:10,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:11,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:14,dataelem:"e11",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:16,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:17,dataelem:"e11",output:"",time:0}],		
		// Car
		[{statement:"step",codeno:0,coderow:0,dataelem:"e12",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e12",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:5,dataelem:"e12",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:6,dataelem:"e12",output:"<tr><td>",time:0}],		
		[{statement:"step",codeno:0,coderow:4,dataelem:"e12",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e12",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:8,dataelem:"e12",output:"",time:0}],	
		// Color
		[{statement:"step",codeno:0,coderow:0,dataelem:"e13",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e13",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:5,dataelem:"e13",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e13",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e13",output:"",time:0}],		
		// Moccasin
		[{statement:"step",codeno:0,coderow:19,dataelem:"f2",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:20,dataelem:"f2",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:21,dataelem:"f2",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:22,dataelem:"f2",output:"Red",time:0}],
		[{statement:"step",codeno:0,coderow:23,dataelem:"f2",output:"",time:0}],		
		// EColor
		[{statement:"step",codeno:0,coderow:10,dataelem:"e14",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:11,dataelem:"e14",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:14,dataelem:"e14",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e14",output:"",time:0}],		
		[{statement:"step",codeno:0,coderow:16,dataelem:"e14",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:17,dataelem:"e14",output:"",time:0}],		
		// ECar
		[{statement:"step",codeno:0,coderow:10,dataelem:"e15",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:11,dataelem:"e15",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:14,dataelem:"e15",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e15",output:"</td></tr>",time:0}],		
		[{statement:"step",codeno:0,coderow:16,dataelem:"e15",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:17,dataelem:"e15",output:"",time:0}],
		// Car
		[{statement:"step",codeno:0,coderow:0,dataelem:"e16",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e16",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:5,dataelem:"e16",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:6,dataelem:"e16",output:"<tr><td>",time:0}],		
		[{statement:"step",codeno:0,coderow:4,dataelem:"e16",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e16",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:8,dataelem:"e16",output:"",time:0}],	
		// Color
		[{statement:"step",codeno:0,coderow:0,dataelem:"e17",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e17",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:5,dataelem:"e17",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e17",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:8,dataelem:"e17",output:"",time:0}],		
		// Moccasin
		[{statement:"step",codeno:0,coderow:19,dataelem:"f2",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:20,dataelem:"f2",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:21,dataelem:"f2",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:22,dataelem:"f2",output:"Teal",time:0}],
		[{statement:"step",codeno:0,coderow:23,dataelem:"f2",output:"",time:0}],		
		// EColor
		[{statement:"step",codeno:0,coderow:10,dataelem:"e18",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:11,dataelem:"e18",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:14,dataelem:"e18",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e18",output:"",time:0}],		
		[{statement:"step",codeno:0,coderow:16,dataelem:"e18",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:17,dataelem:"e18",output:"",time:0}],		
		// ECar
		[{statement:"step",codeno:0,coderow:10,dataelem:"e19",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:11,dataelem:"e19",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:14,dataelem:"e19",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e19",output:"</td></tr>",time:0}],		
		[{statement:"step",codeno:0,coderow:16,dataelem:"e19",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:17,dataelem:"e19",output:"",time:0}],	
		// EPerson
		[{statement:"step",codeno:0,coderow:10,dataelem:"e20",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:11,dataelem:"e20",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e20",output:"</table></td>",time:0}],
		[{statement:"step",codeno:0,coderow:13,dataelem:"e20",output:"</tr>",time:0}],		
		[{statement:"step",codeno:0,coderow:14,dataelem:"e20",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:16,dataelem:"e20",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:17,dataelem:"e20",output:"",time:0}],
		// EPersons
		[{statement:"step",codeno:0,coderow:10,dataelem:"e21",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:11,dataelem:"e21",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:14,dataelem:"e21",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:15,dataelem:"e21",output:"",time:0}],		
		[{statement:"step",codeno:0,coderow:16,dataelem:"e21",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:17,dataelem:"e21",output:"",time:0}],	
		
		/*

0function startElement($parser, $entityname, $attributes) {
1  if($entityname=="PERSON"){
2    echo "<tr>";
3    echo "<td>".$attributes['NAME']."</td>";
4    echo "<td><table>";
5  }else if($entityname=="CAR"){
6    echo "<tr><td>";			
7  }
8}
9
10function endElement($parser, $entityname) {
11  if($entityname=="PERSON"){
12    echo "</table></td>";
13    echo "</tr>";
14  }else if($entityname=="CAR"){
15    echo "</td></tr>";
16  }
17}
18
19function charData($parser, $chardata) {
20  $chardata=trim($chardata);
21  if($chardata=="") return;
22  echo $chardata;
23}

*/
]
	
];
	
const strings=[
`
<span  class='data' id="e1">&lt;persons&gt;</span>
<span  class='data' id="e2">&nbsp;&nbsp;&lt;person name="Greger" ssn="111213-1415" shoesize="52"&gt;</span>
<span  class='data' id="e3">&nbsp;&nbsp;&nbsp;&nbsp;&lt;address street="12th" /&gt;</span>
<span  class='data' id="e4">&nbsp;&nbsp;&nbsp;&nbsp;&lt;car lpno="abc123" latitude="58.38" longitude="13.56"&gt;</span>
<span  class='data' id="e5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;color&gt;</span><span class='data' id='f1'>Moccasin</span><span  class='data' id="e6">&lt;/color&gt;</span>
<span  class='data' id="e7">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/car&gt;</span>
<span  class='data' id="e8">&nbsp;&nbsp;&lt;/person&gt;</span>
<span  class='data' id="e9">&nbsp;&nbsp;&lt;person name="Sven" ssn="222222-5555" shoesize="51"&gt;</span>
<span  class='data' id="e10">&nbsp;&nbsp;&nbsp;&nbsp;&lt;address street="42nd" /&gt;</span>
<span  class='data' id="e11">&nbsp;&nbsp;&nbsp;&nbsp;&lt;address street="Mott" /&gt;</span>
<span  class='data' id="e12">&nbsp;&nbsp;&nbsp;&nbsp;&lt;car lpno="abc123"&gt;</span>
<span  class='data' id="e13">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;color&gt;</span><span class='data' id='f2'>Red</span><span  class='data' id="e14">&lt;/color&gt;</span>
<span  class='data' id="e15">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/car&gt;</span>
<span  class='data' id="e16">&nbsp;&nbsp;&nbsp;&nbsp;&lt;car lpno="cde224"&gt;</span>
<span  class='data' id="e17">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;color&gt;</span><span class='data' id='f3'>Teal</span><span  class='data' id="e18">&lt;/color&gt;</span>
<span  class='data' id="e19">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/car&gt;</span>
<span  class='data' id="e20">&nbsp;&nbsp;&lt;/person&gt;</span>
<span  class='data' id="e21">&lt;/persons&gt;</span>
`
,	
`
<span id="row0" class="coderow"><span class="func">function</span> <span class="name">startElement</span><span class="divider" id="0">(</span><span class="name"></span><span class="divider" id="1">$</span><span class="variable">parser</span><span class="divider" id="2">,</span><span class="name"></span> <span class="name"></span><span class="divider" id="3">$</span><span class="variable">entityname</span><span class="divider" id="4">,</span><span class="name"></span> <span class="name"></span><span class="divider" id="5">$</span><span class="variable">attributes</span><span class="divider" id="6">)</span><span class="name"></span> <span class="name"></span><span class="divider" id="7">{</span><span class="name">
</span></span><span id="row1" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">if</span><span class="divider" id="8">(</span><span class="name"></span><span class="divider" id="9">$</span><span class="variable">entityname</span><span class="divider" id="10">=</span><span class="name"></span><span class="divider" id="11">=</span><span class="name"></span><span class="string">"PERSON"</span><span class="name"></span><span class="divider" id="12">)</span><span class="name"></span><span class="divider" id="13">{</span><span class="name">
</span></span><span id="row2" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;option&nbsp;value='"</span><span class="name"></span><span class="divider" id="14">.</span><span class="name"></span><span class="divider" id="15">$</span><span class="variable">attributes</span><span class="divider" id="16">[</span><span class="name"></span><span class="string">'SSN'</span><span class="name"></span><span class="divider" id="17">]</span><span class="name"></span><span class="divider" id="18">.</span><span class="name"></span><span class="string">"'&gt;"</span><span class="name">;
</span></span><span id="row3" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="divider" id="19">$</span><span class="variable">attributes</span><span class="divider" id="20">[</span><span class="name"></span><span class="string">'NAME'</span><span class="name"></span><span class="divider" id="21">]</span><span class="name">;
</span></span><span id="row4" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="22">}</span><span class="name">
</span></span><span id="row5" class="coderow"><span class="name"></span><span class="divider" id="23">}</span><span class="name">
</span></span><span id="row6" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name">
</span></span><span id="row7" class="coderow"><span class="func">function</span> <span class="name">endElement</span><span class="divider" id="24">(</span><span class="name"></span><span class="divider" id="25">$</span><span class="variable">parser</span><span class="divider" id="26">,</span><span class="name"></span> <span class="name"></span><span class="divider" id="27">$</span><span class="variable">entityname</span><span class="divider" id="28">)</span><span class="name"></span> <span class="name"></span><span class="divider" id="29">{</span><span class="name">
</span></span><span id="row8" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">if</span><span class="divider" id="30">(</span><span class="name"></span><span class="divider" id="31">$</span><span class="variable">entityname</span><span class="divider" id="32">=</span><span class="name"></span><span class="divider" id="33">=</span><span class="name"></span><span class="string">"PERSON"</span><span class="name"></span><span class="divider" id="34">)</span><span class="name"></span><span class="divider" id="35">{</span><span class="name">
</span></span><span id="row9" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;/option&gt;"</span><span class="name">;
</span></span><span id="row10" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="36">}</span><span class="name">
</span></span><span id="row11" class="coderow"><span class="name"></span><span class="divider" id="37">}</span><span class="name">
</span></span><span id="row12" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name">
</span></span><span id="row13" class="coderow"><span class="name"></span> <span class="func">function</span> <span class="name">charData</span><span class="divider" id="38">(</span><span class="name"></span><span class="divider" id="39">$</span><span class="variable">parser</span><span class="divider" id="40">,</span><span class="name"></span> <span class="name"></span><span class="divider" id="41">$</span><span class="variable">chardata</span><span class="divider" id="42">)</span><span class="name"></span> <span class="name"></span><span class="divider" id="43">{</span><span class="name">
</span></span><span id="row14" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="44">/</span><span class="name"></span><span class="comment">/&nbsp;Ignore&nbsp;Char&nbsp;Data&nbsp;
</span></span><span id="row15" class="coderow"><span class="name"></span> <span class="name"></span><span class="divider" id="45">}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name"></span></span>
`
,
`
<span  class='data' id="e1">&lt;persons&gt;</span>
<span  class='data' id="e2">&nbsp;&nbsp;&lt;person name="Greger" ssn="111213-1415" shoesize="52"&gt;</span>
<span  class='data' id="e3">&nbsp;&nbsp;&nbsp;&nbsp;&lt;address street="12th" /&gt;</span>
<span  class='data' id="e4">&nbsp;&nbsp;&nbsp;&nbsp;&lt;car lpno="abc123" latitude="58.38" longitude="13.56"&gt;</span>
<span  class='data' id="e5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;color&gt;</span><span class='data' id='f1'>Moccasin</span><span  class='data' id="e6">&lt;/color&gt;</span>
<span  class='data' id="e7">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/car&gt;</span>
<span  class='data' id="e8">&nbsp;&nbsp;&lt;/person&gt;</span>
<span  class='data' id="e9">&nbsp;&nbsp;&lt;person name="Sven" ssn="222222-5555" shoesize="51"&gt;</span>
<span  class='data' id="e10">&nbsp;&nbsp;&nbsp;&nbsp;&lt;address street="42nd" /&gt;</span>
<span  class='data' id="e11">&nbsp;&nbsp;&nbsp;&nbsp;&lt;address street="Mott" /&gt;</span>
<span  class='data' id="e12">&nbsp;&nbsp;&nbsp;&nbsp;&lt;car lpno="abc123"&gt;</span>
<span  class='data' id="e13">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;color&gt;</span><span class='data' id='f2'>Red</span><span  class='data' id="e14">&lt;/color&gt;</span>
<span  class='data' id="e15">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/car&gt;</span>
<span  class='data' id="e16">&nbsp;&nbsp;&nbsp;&nbsp;&lt;car lpno="cde224"&gt;</span>
<span  class='data' id="e17">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;color&gt;</span><span class='data' id='f3'>Teal</span><span  class='data' id="e18">&lt;/color&gt;</span>
<span  class='data' id="e19">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/car&gt;</span>
<span  class='data' id="e20">&nbsp;&nbsp;&lt;/person&gt;</span>
<span  class='data' id="e21">&lt;/persons&gt;</span>
`
,	
`
<span id="row0" class="coderow"><span class="func">function</span> <span class="name">startElement</span><span class="divider" id="0">(</span><span class="name"></span><span class="divider" id="1">$</span><span class="variable">parser</span><span class="divider" id="2">,</span><span class="name"></span> <span class="name"></span><span class="divider" id="3">$</span><span class="variable">entityname</span><span class="divider" id="4">,</span><span class="name"></span> <span class="name"></span><span class="divider" id="5">$</span><span class="variable">attributes</span><span class="divider" id="6">)</span><span class="name"></span> <span class="name"></span><span class="divider" id="7">{</span><span class="name">
</span></span><span id="row1" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">if</span><span class="divider" id="8">(</span><span class="name"></span><span class="divider" id="9">$</span><span class="variable">entityname</span><span class="divider" id="10">=</span><span class="name"></span><span class="divider" id="11">=</span><span class="name"></span><span class="string">"PERSON"</span><span class="name"></span><span class="divider" id="12">)</span><span class="name"></span><span class="divider" id="13">{</span><span class="name">
</span></span><span id="row2" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;tr&gt;"</span><span class="name">;
</span></span><span id="row3" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;td&gt;"</span><span class="name"></span><span class="divider" id="14">.</span><span class="name"></span><span class="divider" id="15">$</span><span class="variable">attributes</span><span class="divider" id="16">[</span><span class="name"></span><span class="string">'NAME'</span><span class="name"></span><span class="divider" id="17">]</span><span class="name"></span><span class="divider" id="18">.</span><span class="name"></span><span class="string">"&lt;/td&gt;"</span><span class="name">;
</span></span><span id="row4" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="19">}</span><span class="func">else</span> <span class="func">if</span><span class="divider" id="20">(</span><span class="name"></span><span class="divider" id="21">$</span><span class="variable">entityname</span><span class="divider" id="22">=</span><span class="name"></span><span class="divider" id="23">=</span><span class="name"></span><span class="string">"CAR"</span><span class="name"></span><span class="divider" id="24">)</span><span class="name"></span><span class="divider" id="25">{</span><span class="name">
</span></span><span id="row5" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;td&gt;"</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name">;
</span></span><span id="row6" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="26">}</span><span class="name">
</span></span><span id="row7" class="coderow"><span class="name"></span><span class="divider" id="27">}</span><span class="name">
</span></span><span id="row8" class="coderow"><span class="name">
</span></span><span id="row9" class="coderow"><span class="func">function</span> <span class="name">endElement</span><span class="divider" id="28">(</span><span class="name"></span><span class="divider" id="29">$</span><span class="variable">parser</span><span class="divider" id="30">,</span><span class="name"></span> <span class="name"></span><span class="divider" id="31">$</span><span class="variable">entityname</span><span class="divider" id="32">)</span><span class="name"></span> <span class="name"></span><span class="divider" id="33">{</span><span class="name">
</span></span><span id="row10" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">if</span><span class="divider" id="34">(</span><span class="name"></span><span class="divider" id="35">$</span><span class="variable">entityname</span><span class="divider" id="36">=</span><span class="name"></span><span class="divider" id="37">=</span><span class="name"></span><span class="string">"PERSON"</span><span class="name"></span><span class="divider" id="38">)</span><span class="name"></span><span class="divider" id="39">{</span><span class="name">
</span></span><span id="row11" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;/tr&gt;"</span><span class="name">;
</span></span><span id="row12" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="40">}</span><span class="func">else</span> <span class="func">if</span><span class="divider" id="41">(</span><span class="name"></span><span class="divider" id="42">$</span><span class="variable">entityname</span><span class="divider" id="43">=</span><span class="name"></span><span class="divider" id="44">=</span><span class="name"></span><span class="string">"CAR"</span><span class="name"></span><span class="divider" id="45">)</span><span class="name"></span><span class="divider" id="46">{</span><span class="name">
</span></span><span id="row13" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;/td&gt;"</span><span class="name">;
</span></span><span id="row14" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="47">}</span><span class="name">
</span></span><span id="row15" class="coderow"><span class="name"></span><span class="divider" id="48">}</span><span class="name">
</span></span><span id="row16" class="coderow"><span class="name">
</span></span><span id="row17" class="coderow"><span class="func">function</span> <span class="name">charData</span><span class="divider" id="49">(</span><span class="name"></span><span class="divider" id="50">$</span><span class="variable">parser</span><span class="divider" id="51">,</span><span class="name"></span> <span class="name"></span><span class="divider" id="52">$</span><span class="variable">chardata</span><span class="divider" id="53">)</span><span class="name"></span> <span class="name"></span><span class="divider" id="54">{</span><span class="name">
</span></span><span id="row18" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="55">$</span><span class="variable">chardata</span><span class="divider" id="56">=</span><span class="name">trim</span><span class="divider" id="57">(</span><span class="name"></span><span class="divider" id="58">$</span><span class="variable">chardata</span><span class="divider" id="59">)</span><span class="name">;
</span></span><span id="row19" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">if</span><span class="divider" id="60">(</span><span class="name"></span><span class="divider" id="61">$</span><span class="variable">chardata</span><span class="divider" id="62">=</span><span class="name"></span><span class="divider" id="63">=</span><span class="name"></span><span class="string">""</span><span class="name"></span><span class="divider" id="64">)</span><span class="name"></span> <span class="name">return;
</span></span><span id="row20" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="divider" id="65">$</span><span class="variable">chardata;
</span></span><span id="row21" class="coderow"><span class="name"></span><span class="divider" id="66">}</span><span class="name"></span></span></div>
`	
,
`
<span  class='data' id="e1">&lt;persons&gt;</span>
<span  class='data' id="e2">&nbsp;&nbsp;&lt;person name="Greger" ssn="111213-1415" shoesize="52"&gt;</span>
<span  class='data' id="e3">&nbsp;&nbsp;&nbsp;&nbsp;&lt;address street="12th" /&gt;</span>
<span  class='data' id="e4">&nbsp;&nbsp;&nbsp;&nbsp;&lt;car lpno="abc123" latitude="58.38" longitude="13.56"&gt;</span>
<span  class='data' id="e5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;color&gt;</span><span class='data' id='f1'>Moccasin</span><span  class='data' id="e6">&lt;/color&gt;</span>
<span  class='data' id="e7">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/car&gt;</span>
<span  class='data' id="e8">&nbsp;&nbsp;&lt;/person&gt;</span>
<span  class='data' id="e9">&nbsp;&nbsp;&lt;person name="Sven" ssn="222222-5555" shoesize="51"&gt;</span>
<span  class='data' id="e10">&nbsp;&nbsp;&nbsp;&nbsp;&lt;address street="42nd" /&gt;</span>
<span  class='data' id="e11">&nbsp;&nbsp;&nbsp;&nbsp;&lt;address street="Mott" /&gt;</span>
<span  class='data' id="e12">&nbsp;&nbsp;&nbsp;&nbsp;&lt;car lpno="abc123"&gt;</span>
<span  class='data' id="e13">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;color&gt;</span><span class='data' id='f2'>Red</span><span  class='data' id="e14">&lt;/color&gt;</span>
<span  class='data' id="e15">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/car&gt;</span>
<span  class='data' id="e16">&nbsp;&nbsp;&nbsp;&nbsp;&lt;car lpno="cde224"&gt;</span>
<span  class='data' id="e17">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;color&gt;</span><span class='data' id='f3'>Teal</span><span  class='data' id="e18">&lt;/color&gt;</span>
<span  class='data' id="e19">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/car&gt;</span>
<span  class='data' id="e20">&nbsp;&nbsp;&lt;/person&gt;</span>
<span  class='data' id="e21">&lt;/persons&gt;</span>
`
,	
`
<span id="row0" class="coderow"><span class="func">function</span> <span class="name">startElement</span><span class="divider" id="0">(</span><span class="name"></span><span class="divider" id="1">$</span><span class="variable">parser</span><span class="divider" id="2">,</span><span class="name"></span> <span class="name"></span><span class="divider" id="3">$</span><span class="variable">entityname</span><span class="divider" id="4">,</span><span class="name"></span> <span class="name"></span><span class="divider" id="5">$</span><span class="variable">attributes</span><span class="divider" id="6">)</span><span class="name"></span> <span class="name"></span><span class="divider" id="7">{</span><span class="name">
</span></span><span id="row1" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">if</span><span class="divider" id="8">(</span><span class="name"></span><span class="divider" id="9">$</span><span class="variable">entityname</span><span class="divider" id="10">=</span><span class="name"></span><span class="divider" id="11">=</span><span class="name"></span><span class="string">"PERSON"</span><span class="name"></span><span class="divider" id="12">)</span><span class="name"></span><span class="divider" id="13">{</span><span class="name">
</span></span><span id="row2" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;tr&gt;"</span><span class="name">;
</span></span><span id="row3" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;td&gt;"</span><span class="name"></span><span class="divider" id="14">.</span><span class="name"></span><span class="divider" id="15">$</span><span class="variable">attributes</span><span class="divider" id="16">[</span><span class="name"></span><span class="string">'NAME'</span><span class="name"></span><span class="divider" id="17">]</span><span class="name"></span><span class="divider" id="18">.</span><span class="name"></span><span class="string">"&lt;/td&gt;"</span><span class="name">;
</span></span><span id="row4" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;td&gt;&lt;table&gt;"</span><span class="name">;
</span></span><span id="row5" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="19">}</span><span class="func">else</span> <span class="func">if</span><span class="divider" id="20">(</span><span class="name"></span><span class="divider" id="21">$</span><span class="variable">entityname</span><span class="divider" id="22">=</span><span class="name"></span><span class="divider" id="23">=</span><span class="name"></span><span class="string">"CAR"</span><span class="name"></span><span class="divider" id="24">)</span><span class="name"></span><span class="divider" id="25">{</span><span class="name">
</span></span><span id="row6" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;tr&gt;&lt;td&gt;"</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name">;
</span></span><span id="row7" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="26">}</span><span class="name">
</span></span><span id="row8" class="coderow"><span class="name"></span><span class="divider" id="27">}</span><span class="name">
</span></span><span id="row9" class="coderow"><span class="name">
</span></span><span id="row10" class="coderow"><span class="func">function</span> <span class="name">endElement</span><span class="divider" id="28">(</span><span class="name"></span><span class="divider" id="29">$</span><span class="variable">parser</span><span class="divider" id="30">,</span><span class="name"></span> <span class="name"></span><span class="divider" id="31">$</span><span class="variable">entityname</span><span class="divider" id="32">)</span><span class="name"></span> <span class="name"></span><span class="divider" id="33">{</span><span class="name">
</span></span><span id="row11" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">if</span><span class="divider" id="34">(</span><span class="name"></span><span class="divider" id="35">$</span><span class="variable">entityname</span><span class="divider" id="36">=</span><span class="name"></span><span class="divider" id="37">=</span><span class="name"></span><span class="string">"PERSON"</span><span class="name"></span><span class="divider" id="38">)</span><span class="name"></span><span class="divider" id="39">{</span><span class="name">
</span></span><span id="row12" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;/table&gt;&lt;/td&gt;"</span><span class="name">;
</span></span><span id="row13" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;/tr&gt;"</span><span class="name">;
</span></span><span id="row14" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="40">}</span><span class="func">else</span> <span class="func">if</span><span class="divider" id="41">(</span><span class="name"></span><span class="divider" id="42">$</span><span class="variable">entityname</span><span class="divider" id="43">=</span><span class="name"></span><span class="divider" id="44">=</span><span class="name"></span><span class="string">"CAR"</span><span class="name"></span><span class="divider" id="45">)</span><span class="name"></span><span class="divider" id="46">{</span><span class="name">
</span></span><span id="row15" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;/td&gt;&lt;/tr&gt;"</span><span class="name">;
</span></span><span id="row16" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="47">}</span><span class="name">
</span></span><span id="row17" class="coderow"><span class="name"></span><span class="divider" id="48">}</span><span class="name">
</span></span><span id="row18" class="coderow"><span class="name">
</span></span><span id="row19" class="coderow"><span class="func">function</span> <span class="name">charData</span><span class="divider" id="49">(</span><span class="name"></span><span class="divider" id="50">$</span><span class="variable">parser</span><span class="divider" id="51">,</span><span class="name"></span> <span class="name"></span><span class="divider" id="52">$</span><span class="variable">chardata</span><span class="divider" id="53">)</span><span class="name"></span> <span class="name"></span><span class="divider" id="54">{</span><span class="name">
</span></span><span id="row20" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="55">$</span><span class="variable">chardata</span><span class="divider" id="56">=</span><span class="name">trim</span><span class="divider" id="57">(</span><span class="name"></span><span class="divider" id="58">$</span><span class="variable">chardata</span><span class="divider" id="59">)</span><span class="name">;
</span></span><span id="row21" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">if</span><span class="divider" id="60">(</span><span class="name"></span><span class="divider" id="61">$</span><span class="variable">chardata</span><span class="divider" id="62">=</span><span class="name"></span><span class="divider" id="63">=</span><span class="name"></span><span class="string">""</span><span class="name"></span><span class="divider" id="64">)</span><span class="name"></span> <span class="name">return;
</span></span><span id="row22" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="divider" id="65">$</span><span class="variable">chardata;
</span></span><span id="row23" class="coderow"><span class="name"></span><span class="divider" id="66">}</span><span class="name"></span></span>
`	
];
	






