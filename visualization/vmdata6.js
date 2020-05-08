

var slides=[
		[	// 0
			{style:"Rubrik",text:"XML WEB SERVICES"},
			{style:"Rubrik",text:""},
			{style:"Rubrik",text:"XSLT"},			
			{style:"Rubrik",text:""}
		],
		[	// 1
			{style:"Rubrik",text:"What is XSLT"},
		 	{style:"Bullet",text:"Has the advantages of both SAX and DOM"},
			{style:"Bullet",kind:"Plus",level:2 ,text:"Declarative so it can handle documents without knowing exact structure"},
			{style:"Bullet",kind:"Plus",level:2 ,text:"Can use navigation for specific cases when the same element needs to be handled in distinct ways"},
		 	{style:"Bullet",kind:"Plus",level:2 ,text:"Does not need separate handling of start of tags and ends of tags like in SAX"},
			{style:"Bullet",kind:"Plus",level:2 ,text:"XSLT has quite advanced querying for document contents and structure"},
			{style:"Bullet",kind:"Minus",level:2 ,text:"SAX is however not a complete programming language so complex flow control or the use of variables is not possible"},			
		 	{style:"Bullet",text:"We are limited to a very rudimentary programming model"},			
		],
		[	// 2
			{style:"Rubrik",text:"Context Elements"},
		 	{style:"Bullet",text:"The context element is a pointer to the *current* element in the XML document"},
		 	{style:"Bullet",text:"The *context* *elment* is handled automatically like the current element that is being processed in SAX."},
		 	{style:"Bullet",text:"We write templates that output HTML by copying to the output stream and only some XSLT code, just like PHP."},
			{style:"Bullet",text:"A template has a *query* that is executed in reference to the current *context* *element*"},				
		 	{style:"Bullet",text:"If the *query* is *true* then the content of the template is written to the output stream"},			
		],
		[	// 3
			{style:"Rubrik",text:"XPATH Querying"},
		 	{style:"Bullet",text:"We can perform advanced queries but in this course we only teach a limited subset"},
		 	{style:"Bullet",text:". is used to denote the current context element"},
		 	{style:"Bullet",text:"/ is used like paths in operating systems /person means <person> directly below the root element"},
			{style:"Bullet",text:"// means anywhere below element //person means anywhere below the root element"},
			{style:"Bullet",text:"[ ] allows us to specify filters [@shoesize>’52’]"},
		 	{style:"Bullet",text:"asterisk denotes any element"},
		 	{style:"Bullet",text:"@ denotes attribute"},			
		],	
		[	// 4
			{style:"Rubrik",text:"XSLT Template"},
		 	{style:"Bullet",text:"If the match query is applicable we execute template."},
		 	{style:"Bullet",text:"Any html written inside a template is copied directly to output stream "},
		 	{style:"Bullet",text:"<table =’1’> is copied to output stream."},
		 	{style:"Bullet",text:"Then we call apply template (continue searching for applicable template but with new context element)"},
		 	{style:"Bullet",text:"After sub-template has executed we copy </table> this way we do not need to worry about ending tags like in SAX"},
		 	{style:"Bullet",text:"Unmatched elements are copied as text."},
		
		],
		[	// 5
			{style:"Rubrik",text:"XSLT Template Example"},
		 	{style:"Bullet",text:"Generate a table element for root element"},			
			{style:"Code",text:"<xsl:template match='/'>"},
		 	{style:"Code",text:"  <table border='1'>"},		
		 	{style:"Code",text:"  <xsl:apply-templates/>"},
		 	{style:"Code",text:"  </table>"},
			{style:"Code",text:"</xsl:template>"},
		],
		[	// 6
			{style:"Rubrik",text:"Navigation"},
		 	{style:"Bullet",text:"Most commonly we iterate over all child nodes of an element"},
		 	{style:"Bullet",text:"In XSLT iteration is done with for-each"},
			{style:"Code",text:"<xsl:for-each select='./address'>"},
		 	{style:"Bullet",text:"We read contents of text elements or attributes with value-of"},
			{style:"Code",text:"<xsl:value-of select='./@street'/>"},
		 	{style:"Bullet",text:"We control flow with choose"},
			{style:"Code",text:"<xsl:choose>"},			
		],
		[	// 7
			{style:"Rubrik",text:"For-each"},
		 	{style:"Bullet",text:"For-each iterates over the result of a query"},
		 	{style:"Bullet",text:"In some cases we have sub-elements of more than one type we can differentiate between those child element by using a condition"},
			{style:"Code",text:"<xsl:for-each select='./address'>"},
		 	{style:"Code",text:"   <tr>"},		
		 	{style:"Code",text:"   <td>"},
		 	{style:"Code",text:"   <xsl:value-of select='./@street'/>"},
		 	{style:"Code",text:"   </td>"},
		 	{style:"Code",text:"   </tr>"},
		 	{style:"Code",text:"</xsl:for-each>"},
		],
		[	// 8
			{style:"Rubrik",text:"Choose (XSLT if-else)"},
		 	{style:"Bullet",text:"Works like if/else in most programming languages"},
			{style:"Code",text:"<xsl:choose>"},
		 	{style:"Code",text:"   <xsl:when test=`./color='Teal'`>"},		
		 	{style:"Code",text:"   … code for color teal ..."},
		 	{style:"Code",text:"   </xsl:when>"},
		 	{style:"Code",text:"   <xsl:otherwise>"},
		 	{style:"Code",text:"   … all other elements ..."},
		 	{style:"Code",text:"   </xsl:otherwise>  "},
		 	{style:"Code",text:"</xsl:choose>"},			
		],	
		[	// 9
			{style:"Rubrik",text:"Diffciculties with XSLT"},
		 	{style:"Bullet",text:"We must have same number of start element tags <element> as we have en element tags </element>"},
		 	{style:"Bullet",text:"This complicates control flow"},
			{style:"Code",text:"<xsl:choose>"},
		 	{style:"Code",text:"   <xsl:when test=`./color='Teal'`>"},		
		 	{style:"Code",text:"      <td class=’teal’>"},
		 	{style:"Code",text:"   </xsl:when>"},
		 	{style:"Code",text:"   <xsl:otherwise>"},
		 	{style:"Code",text:"      <td class=’other’>"},
		 	{style:"Code",text:"   </xsl:otherwise>  "},
		 	{style:"Code",text:"</xsl:choose>"},	
		 	{style:"Code",text:"<xsl:value-of select='./color'/>"},	
		 	{style:"Code",text:"</td>"},				
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
		[{statement:"step",codeno:0,coderow:0,dataelem:"e1",output:"<table>",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e2",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:2,dataelem:"e2",output:"<tr>",time:0}],	
		[{statement:"step",codeno:0,coderow:3,dataelem:"e2",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"g0",output:"<td>Greger</td>",time:0}],	
		[{statement:"step",codeno:0,coderow:5,dataelem:"e3",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:6,dataelem:"e3",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e3",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:8,dataelem:"e3",output:"<td style='color:red;'>12th</td>",time:0}],	
		[{statement:"step",codeno:0,coderow:9,dataelem:"e3",output:"",time:0}],		
		[{statement:"step",codeno:0,coderow:11,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e3",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:5,dataelem:"e4",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e4",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e4",output:"<td style='color:teal;'>abc123</td>",time:0}],	
		[{statement:"step",codeno:0,coderow:11,dataelem:"e4",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e4",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:13,dataelem:"e4",output:"</tr>",time:0}],
		[{statement:"step",codeno:0,coderow:1,dataelem:"e9",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:2,dataelem:"e9",output:"<tr>",time:0}],	
		[{statement:"step",codeno:0,coderow:3,dataelem:"e9",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:4,dataelem:"g1",output:"<td>Sven</td>",time:0}],	
		[{statement:"step",codeno:0,coderow:5,dataelem:"e9",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:6,dataelem:"e10",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e10",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:8,dataelem:"e10",output:"<td style='color:red;'>42nd</td>",time:0}],	
		[{statement:"step",codeno:0,coderow:9,dataelem:"e10",output:"",time:0}],		
		[{statement:"step",codeno:0,coderow:11,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e10",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:5,dataelem:"e11",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:6,dataelem:"e11",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e11",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:8,dataelem:"e11",output:"<td style='color:red;'>Mott</td>",time:0}],	
		[{statement:"step",codeno:0,coderow:9,dataelem:"e11",output:"",time:0}],		
		[{statement:"step",codeno:0,coderow:11,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e11",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:5,dataelem:"e12",output:"",time:0}],	
		[{statement:"step",codeno:0,coderow:7,dataelem:"e12",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e12",output:"<td style='color:teal;'>abc123</td>",time:0}],	
		[{statement:"step",codeno:0,coderow:11,dataelem:"e12",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e12",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:7,dataelem:"e16",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:10,dataelem:"e16",output:"<td style='color:teal;'>cde224</td>",time:0}],	
		[{statement:"step",codeno:0,coderow:11,dataelem:"e16",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:12,dataelem:"e16",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:13,dataelem:"e16",output:"",time:0}],
		[{statement:"step",codeno:0,coderow:14,dataelem:"e16",output:"",time:0}],
	]

];
	
const strings=[
`
<span  class='data' id="e1">&lt;persons&gt;</span>
<span  class='data' id="e2">&nbsp;&nbsp;&lt;person <span class='data' id='g0'>name="Greger"</span> ssn="111213-1415" shoesize="52"&gt;</span>
<span  class='data' id="e3">&nbsp;&nbsp;&nbsp;&nbsp;&lt;address street="12th" /&gt;</span>
<span  class='data' id="e4">&nbsp;&nbsp;&nbsp;&nbsp;&lt;car lpno="abc123" latitude="58.38" longitude="13.56"&gt;</span>
<span  class='data' id="e5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;color&gt;</span><span class='data' id='f1'>Moccasin</span><span  class='data' id="e6">&lt;/color&gt;</span>
<span  class='data' id="e7">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/car&gt;</span>
<span  class='data' id="e8">&nbsp;&nbsp;&lt;/person&gt;</span>
<span  class='data' id="e9">&nbsp;&nbsp;&lt;person <span class='data' id='g1'>name="Sven"</span> ssn="222222-5555" shoesize="51"&gt;</span>
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
<span id="row0" class="coderow"><span class="name"></span><span class="divider" id="0">$</span><span class="variable">people</span> <span class="name"></span><span class="divider" id="1">=</span><span class="name"></span> <span class="name"></span><span class="divider" id="2">$</span><span class="variable">dom</span><span class="divider" id="3">-</span><span class="name"></span><span class="divider" id="4">&gt;</span><span class="name">getElementsByTagName</span><span class="divider" id="5">(</span><span class="name"></span><span class="string">'person'</span><span class="name"></span><span class="divider" id="6">)</span><span class="name">;
</span></span><span id="row1" class="coderow"><span class="func">foreach</span> <span class="name"></span><span class="divider" id="7">(</span><span class="name"></span><span class="divider" id="8">$</span><span class="variable">people</span> <span class="func">as</span> <span class="name"></span><span class="divider" id="9">$</span><span class="variable">person</span><span class="divider" id="10">)</span><span class="name"></span><span class="divider" id="11">{</span><span class="name">
</span></span><span id="row2" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;tr&gt;"</span><span class="name">;
</span></span><span id="row3" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="12">$</span><span class="variable">attributes</span> <span class="name"></span><span class="divider" id="13">=</span><span class="name"></span> <span class="name"></span><span class="divider" id="14">$</span><span class="variable">person</span><span class="divider" id="15">-</span><span class="name"></span><span class="divider" id="16">&gt;</span><span class="name">attributes;
</span></span><span id="row4" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;td&gt;"</span><span class="name"></span><span class="divider" id="17">.</span><span class="name"></span><span class="divider" id="18">$</span><span class="variable">attributes</span><span class="divider" id="19">[</span><span class="name"></span><span class="string">'name'</span><span class="name"></span><span class="divider" id="20">]</span><span class="name"></span><span class="divider" id="21">-</span><span class="name"></span><span class="divider" id="22">&gt;</span><span class="name">value</span><span class="divider" id="23">.</span><span class="name"></span><span class="string">"&lt;/td&gt;"</span><span class="name">;
</span></span><span id="row5" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">foreach</span> <span class="name"></span><span class="divider" id="24">(</span><span class="name"></span><span class="divider" id="25">$</span><span class="variable">person</span><span class="divider" id="26">-</span><span class="name"></span><span class="divider" id="27">&gt;</span><span class="name">childNodes</span> <span class="func">as</span> <span class="name"></span><span class="divider" id="28">$</span><span class="variable">child</span><span class="divider" id="29">)</span><span class="name"></span><span class="divider" id="30">{</span><span class="name">
</span></span><span id="row6" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="31">$</span><span class="variable">attributes</span> <span class="name"></span><span class="divider" id="32">=</span><span class="name"></span> <span class="name"></span><span class="divider" id="33">$</span><span class="variable">child</span><span class="divider" id="34">-</span><span class="name"></span><span class="divider" id="35">&gt;</span><span class="name">attributes;
</span></span><span id="row7" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">if</span><span class="divider" id="36">(</span><span class="name"></span><span class="divider" id="37">$</span><span class="variable">child</span><span class="divider" id="38">-</span><span class="name"></span><span class="divider" id="39">&gt;</span><span class="name">nodeName</span><span class="divider" id="40">=</span><span class="name"></span><span class="divider" id="41">=</span><span class="name"></span><span class="string">"address"</span><span class="name"></span><span class="divider" id="42">)</span><span class="name"></span><span class="divider" id="43">{</span><span class="name">
</span></span><span id="row8" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;td&nbsp;style='color:red;'&gt;"</span><span class="name"></span><span class="divider" id="44">.</span><span class="name"></span><span class="divider" id="45">$</span><span class="variable">attributes</span><span class="divider" id="46">[</span><span class="name"></span><span class="string">'street'</span><span class="name"></span><span class="divider" id="47">]</span><span class="name"></span><span class="divider" id="48">-</span><span class="name"></span><span class="divider" id="49">&gt;</span><span class="name">value</span><span class="divider" id="50">.</span><span class="name"></span><span class="string">"&lt;/td&gt;"</span><span class="name">;
</span></span><span id="row9" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="51">}</span><span class="func">else</span> <span class="func">if</span><span class="divider" id="52">(</span><span class="name"></span><span class="divider" id="53">$</span><span class="variable">child</span><span class="divider" id="54">-</span><span class="name"></span><span class="divider" id="55">&gt;</span><span class="name">nodeName</span><span class="divider" id="56">=</span><span class="name"></span><span class="divider" id="57">=</span><span class="name"></span><span class="string">"car"</span><span class="name"></span><span class="divider" id="58">)</span><span class="name"></span><span class="divider" id="59">{</span><span class="name">
</span></span><span id="row10" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;td&nbsp;style='color:teal;'&gt;"</span><span class="name"></span><span class="divider" id="60">.</span><span class="name"></span><span class="divider" id="61">$</span><span class="variable">attributes</span><span class="divider" id="62">[</span><span class="name"></span><span class="string">'lpno'</span><span class="name"></span><span class="divider" id="63">]</span><span class="name"></span><span class="divider" id="64">-</span><span class="name"></span><span class="divider" id="65">&gt;</span><span class="name">value</span><span class="divider" id="66">.</span><span class="name"></span><span class="string">"&lt;/td&gt;"</span><span class="name">;
</span></span><span id="row11" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="67">}</span><span class="name">
</span></span><span id="row12" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="68">}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name">
</span></span><span id="row13" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;/tr&gt;"</span><span class="name">;
</span></span><span id="row14" class="coderow"><span class="name"></span><span class="divider" id="69">}</span><span class="name">
</span></span><span id="row15" class="coderow"><span class="name"></span></span>
`
];
	






