

var slides=[
		[	// 0
			{style:"Rubrik",text:"PHP WEB SERVICES"},
			{style:"Rubrik",text:""}
		],
		[	// 1
			{style:"Rubrik",text:"What is a web service?"},
		 	{style:"Bullet",text:"A web service is defined as either"},
		 	{style:"Bullet",level:2 ,text:"A service offered by a *device* *to* *another* *device* , communicating with each other via the World Wide Web"},
		 	{style:"Bullet",level:2 ,text:"A *server* *computer* listening for requests over a network, serving web documents (HTML, JSON, XML, images)"},			
		],
		[	// 2
			{style:"Rubrik",text:"REST Web Service"},
		 	{style:"Bullet",text:"Representational state transfer (REST) is one architecture used for creating Web services."},
		 	{style:"Bullet",level:2 ,text:"The term representational state transfer was introduced and defined in 2000 by Roy Fielding in his doctoral dissertation"},
		 	{style:"Bullet",level:2 ,text:"The term is intended to evoke an image of how well-designed application behave"},			
		 	{style:"Bullet",level:2 ,text:"Network of Web resources connected by selecting resource identifiers"},						
		],	
		[	// 3
			{style:"Rubrik",text:"Properties of REST"},			
		 	{style:"Bullet",level:2 ,text:"Client-server architecture"},
			{style:"Naked",level:2 ,text:"Separating the user interface from the data storage"},
		 	{style:"Bullet",level:2 ,text:"Stateless protocol"},
			{style:"Naked",level:2 ,text:"No context is stored on the server between requests"},
			{style:"Bullet",level:2 ,text:"Web cache"},
			{style:"Naked",level:2 ,text:"Clients and intermediaries *can* cache responses"},		 
			{style:"Bullet",level:2 ,text:"Layered system"},
			{style:"Naked",level:2 ,text:"Server or intermediary"},		 
		 	{style:"Bullet",level:2 ,text:"Uniform Interface"},	
			{style:"Naked",level:2 ,text:"Simple and decouples the architecture"},				
		],		
		[	// 4
			{style:"Rubrik",text:"Calling Web Service by Hand"},
		 	{style:"Bullet",text:"One great advantage of working with web services is that we can test web services by navigating to the url of the service"},
		 	{style:"Bullet",text:"We can either navigate to collections or individual items depending on what is available"},
			{style:"Code",text:"https://api.example.com/collection"},			
			{style:"Code",text:"https://api.example.com/collection/item3"},
		],
		[	// 5
			{style:"Rubrik",text:"Test Web Service by Hand before programming"},
		 	{style:"Bullet",text:"We can test both the service and the parameters of the service"},			
			{style:"Code",text:"https://wwwlab.iit.his.se/gush/XMLAPI/citiesservice/countries/"},
		 	{style:"Code",text:"https://wwwlab.iit.his.se/gush/XMLAPI/citiesservice/city?country=Sweden"},
		]	,
		[	// 6
			{style:"Rubrik",text:"JSON Data Format"},
		 	{style:"Bullet",text:"JSON is data described in the format of Javascript variable declarations"},			
			{style:"Bullet",text:"This way we can store things such as arrays of arrays"},
		 	{style:"Bullet",text:"We can easily convert from javascript notation to any other language (including e.g. Android applications)"},
		],
		[	// 7
			{style:"Rubrik",text:"Calling Service in PHP"},
		 	{style:"Bullet",text:"We call service by treating the service as a file"},			
			{style:"Code",text:'$url="https://wwwlab.iit.his.se/gush/XMLAPI/citiesservice/countries";'},
			{style:"Code",text:'$jsontext = file_get_contents($url);'},
			{style:"Code",text:'$arr = json_decode($jsontext);'},
			{style:"Code",text:'print_r($arr);'},
		 	{style:"Bullet",text:"Then we are at EXACTLY the same position as declaring the array in the code. We then proceed in the same manner as before."},
		],
			[	// 8
			{style:"Rubrik",text:"Calling Service with parameters in PHP"},
		 	{style:"Bullet",text:"We can also pass parameters to collections."},
		 	{style:"Bullet",text:"Parameters are added to the url as normal parameters for other web pages"},
		 	{style:"Bullet",text:"A parameter can be for example a search term."},
			{style:"Code",text:'$url="https://wwwlab.iit.his.se/gush/XMLAPI/citiesservice/city?country="'},
			{style:"Code",text:'$url=$url."Sweden";'}, 
			{style:"Code",text:'$jsontext = file_get_contents($url);'},
			{style:"Code",text:'$arr = json_decode($jsontext);'},
		 	{style:"Bullet",text:"This way we can do most of the processing of the data in the web service rather than in the appliaction which takes care of the presentation ony"},
		]		
		// More slides? If anything a complete example...

];

var data=[
	{
			textbox:"hello",
			selectbox:"BOpt",
			Button:"B2"
	},
	[
			["Sweden",10],
			["France",67],
			["Spain", 46],
			["Norway", 5],
	],
];
	 
var rows=
[
		[
				[{statement:"nop"}],
				[{statement:"nop"}],
				[{statement:"setdata",pos:0}],			
				[{statement:"echo",text:"<form method='post' action='formRespSelect.php'>"}],
				[{statement:"echo",text:"<select name='country'>"}],
				[{statement:"foreach",level:1,arr:1}],
				[{statement:"echo",text:"<option value='"},{statement:"echoarr",arr:0,pos:0,level:1},{statement:"echo",text:"'>"},{statement:"echoarr",arr:0,pos:0,level:1},{statement:"echo",text:"</option>"}],
				[{statement:"foreachret",arr:1,pos:0,row:5,level:1}],			
				[{statement:"echo",text:"</select>"}],
				[{statement:"echo",text:"<button>Go!</button>"}],
				[{statement:"echo",text:"</form>"}],
				[{statement:"nop"}]				
		]
];
	
const strings=[
`
$arr=array(
  array(<span class="data" id="Sweden">"Sweden"</span>,<span class="data" id="s10">10</span>),
  array(<span class="data" id="France">"France"</span>,<span class="data" id="s67">67</span>),
  array(<span class="data" id="Spain">"Spain"</span>,<span class="data" id="s46">46</span>),
  array(<span class="data" id="Norway">"Norway"</span>,<span class="data" id="s5">5</span>)
);
`
,	
`
<span id="row0" class="coderow"><span class="name"></span><span class="divider" id="0">$</span><span class="variable">url</span><span class="divider" id="1">=</span><span class="name"></span><span class="string">"https://wwwlab.iit.his.se/gush/XMLAPI/citiesservice/countries/"</span><span class="name">;
</span></span><span id="row1" class="coderow"><span class="name"></span><span class="divider" id="2">$</span><span class="variable">jsontext</span> <span class="name"></span><span class="divider" id="3">=</span><span class="name"></span> <span class="name">file_get_contents</span><span class="divider" id="4">(</span><span class="name"></span><span class="divider" id="5">$</span><span class="variable">url</span><span class="divider" id="6">)</span><span class="name">;
</span></span><span id="row2" class="coderow"><span class="name"></span><span class="divider" id="7">$</span><span class="variable">arr</span> <span class="name"></span><span class="divider" id="8">=</span><span class="name"></span> <span class="name">json_decode</span><span class="divider" id="9">(</span><span class="name"></span><span class="divider" id="10">$</span><span class="variable">jsontext</span><span class="divider" id="11">)</span><span class="name">;
</span></span><span id="row3" class="coderow"><span class="name">
</span></span><span id="row4" class="coderow"><span class="func">echo</span> <span class="name"></span><span class="string">"&lt;select&nbsp;name='country'&gt;"</span><span class="name">;
</span></span><span id="row5" class="coderow"><span class="func">foreach</span><span class="divider" id="12">(</span><span class="name"></span><span class="divider" id="13">$</span><span class="variable">arr</span> <span class="func">as</span> <span class="name"></span><span class="divider" id="14">$</span><span class="variable">country</span><span class="divider" id="15">)</span><span class="name"></span><span class="divider" id="16">{</span><span class="name">
</span></span><span id="row6" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;option&gt;"</span><span class="name"></span><span class="divider" id="17">.</span><span class="name"></span><span class="divider" id="18">$</span><span class="variable">country</span><span class="divider" id="19">.</span><span class="name"></span><span class="string">"&lt;/option&gt;"</span><span class="name">;
</span></span><span id="row7" class="coderow"><span class="name"></span><span class="divider" id="20">}</span><span class="name">
</span></span><span id="row8" class="coderow"><span class="name">
</span></span><span id="row9" class="coderow"><span class="func">echo</span> <span class="name"></span><span class="string">"&lt;/select&gt;"</span><span class="name">;
</span></span><span id="row10" class="coderow"><span class="name"></span></span>
`
];
	