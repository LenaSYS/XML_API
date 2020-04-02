var slides=[
		[	// 0
			{style:"Rubrik",text:"COURSE INTRODUCTION"},
			{style:"Rubrik",text:""},			
			{style:"Rubrik",text:"PHP FORMS"}
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
		]
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
	[
			["Sweden",10,[["Stockholm",962],["Gothenburg",572]]],
			["France",67,[["Paris",2200],["Lyon",513],["Toulouse",458],["Lille",235]]],
			["Spain", 46,[["Barcelona",1600],["Seville",690]]],
			["Norway", 5,[["Oslo",650]]],
	],
	{
			country:"Spain"
	},	
];
	 
var rows=
[
		[
				[{statement:"nop"}],
				[{statement:"ifvar",arr:3,pos:"textbox",row:1,else:5}],
				[{statement:"echo",text:"<div style='border:1px solid blue;'>In textbox: "}],
				[{statement:"echovar",arr:0,pos:"textbox"}],
				[{statement:"echo",text:"</div>"}],			
				[{statement:"else",else:6}],	
				[{statement:"nop"}],				
				[{statement:"echo",text:"<pre style='border:1px solid red;'>"}],
				[{statement:"echo",text:"Array\n(\n[textbox] => hello\n[selectbox] => BOpt\n[Button] => B2\n)\n"}],			
				[{statement:"echo",text:"</pre>"}],
				[{statement:"nop"}]			
		],
		[
				[{statement:"nop"}],
				[{statement:"echo",text:"<form method='post' action='formRespSelect.php'>"}],
				[{statement:"echo",text:"<select name='country'>"}],
				[{statement:"foreach",level:1,arr:2}],
				[{statement:"echo",text:"<option value='"},{statement:"echoarr",arr:0,pos:0,level:1},{statement:"echo",text:"'>"},{statement:"echoarr",arr:0,pos:0,level:1},{statement:"echo",text:"</option>"}],
				[{statement:"foreachret",arr:1,pos:0,row:3,level:1}],			
				[{statement:"echo",text:"</select>"}],
				[{statement:"echo",text:"<button>Go!</button>"}],
				[{statement:"echo",text:"</form>"}],
				[{statement:"nop"}]				
		],
		[
				[{statement:"nop"}],			
			  [{statement:"nop"}],
				[{statement:"ifvar",arr:3,pos:"country",row:3,else:5}],
				[{statement:"nop"}],
				[{statement:"else",else:6}],	
				[{statement:"nop"}],				
				[{statement:"nop"}],
				[{statement:"nop"}],		
				[{statement:"echo",text:"<tr><th>Country</th><th>Population</th><th colspan='4'>Cities</th></tr>"}],
				[{statement:"foreach",level:1,arr:2}],
				[{statement:"ifarr",level:1,arr:2,pos:0,vararr:3,varpos:"country",row:11,else:23}],
				[{statement:"echo",text:"<tr>"}],	
				[{statement:"echo",text:"<td>"},{statement:"echoarr",arr:2,pos:0,level:1},{statement:"echo",text:"</td>"}],
				[{statement:"echo",text:"<td>"},{statement:"echoarr",arr:2,pos:1,level:1},{statement:"echo",text:"</td>"}],
				[{statement:"foreach",level:2,arr:2,pos:2}],
				[{statement:"echo",text:"<td>"}],	
				[{statement:"echo",text:"<table>"}],	
				[{statement:"echo",text:"<tr><td>"},{statement:"echoarr",arr:2,pos:0,level:2},{statement:"echo",text:"</td></tr>"}],
				[{statement:"echo",text:"<tr><td>"},{statement:"echoarr",arr:2,pos:1,level:2},{statement:"echo",text:"</td></tr>"}],
				[{statement:"echo",text:"</table>"}],
				[{statement:"echo",text:"</td>"}],
				[{statement:"foreachret",arr:2,pos:2,row:14,level:2}],			
				[{statement:"echo",text:"</tr>"}],
				[{statement:"nop"}],		
			  [{statement:"foreachret",arr:2,pos:0,row:9,level:1}],			
				[{statement:"nop"}],
			/*
			
			// Get country or default
if(isset($_POST['country'])){
    $incountry=$_POST['country']    ;
}else{
    $incountry="Sweden";
}

// Show that country
echo "<tr><th>Country</th><th>Population</th><th colspan='4'>Cities</th></tr>";
foreach ($arr as $country) {
  if($country[0]==$incountry){
    echo "<tr>";
    echo "<td>".$country[0]."</td>";
    echo "<td>".$country[1]."</td>";
    foreach($country[2] as $city){
      echo "<td>";
      echo "<table>";
      echo "<tr><td>".$city[0]."</td></tr>"  ;
      echo "<tr><td>".$city[1]."</td></tr>";
      echo "</table>";
      echo "</td>";
    }
    echo "</tr>";
  }
}
			
			*/
		
		]
];
	
const strings=[
`$_POST=array(
		<span class="data" id='textbox'>"textbox"</span> => <span class="data" id='hello'>"hello"</span>,
		"selectbox" => "BOpt",
		"Button" => "B2"
);`
,
`
<span id="row0" class="coderow"><span class="name">
</span></span><span id="row1" class="coderow"><span class="func">if</span><span class="divider" id="0">(</span><span class="name">isset</span><span class="divider" id="1">(</span><span class="name"></span><span class="divider" id="2">$</span><span class="variable">_POST</span><span class="divider" id="3">[</span><span class="name"></span><span class="string">'textbox'</span><span class="name"></span><span class="divider" id="4">]</span><span class="name"></span><span class="divider" id="5">)</span><span class="name"></span><span class="divider" id="6">)</span><span class="name"></span><span class="divider" id="7">{</span><span class="name">
</span></span><span id="row2" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;div&nbsp;style='border:1px&nbsp;solid&nbsp;blue;'&gt;In&nbsp;textbox:&nbsp;"</span><span class="name">;
</span></span><span id="row3" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="divider" id="8">$</span><span class="variable">_POST</span><span class="divider" id="9">[</span><span class="name"></span><span class="string">'textbox'</span><span class="name"></span><span class="divider" id="10">]</span><span class="name">;
</span></span><span id="row4" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;/div&gt;"</span><span class="name">;
</span></span><span id="row5" class="coderow"><span class="name"></span><span class="divider" id="11">}</span><span class="name">
</span></span><span id="row6" class="coderow"><span class="name">
</span><span><span id="row7" class="coderow"><span class="func">echo</span> <span class="name"></span><span class="string">"&lt;pre&nbsp;style='border:1px&nbsp;solid&nbsp;red;'&gt;"</span><span class="name">;
</span></span><span id="row8" class="coderow"><span class="name">print_r</span><span class="divider" id="12">(</span><span class="name"></span><span class="divider" id="13">$</span><span class="variable">_POST</span><span class="divider" id="14">)</span><span class="name">;
</span></span><span id="row9" class="coderow"><span class="func">echo</span> <span class="name"></span><span class="string">"&lt;/pre&gt;"</span><span class="name">;
</span></span><span id="row10" class="coderow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name"></span></span>
`
,
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
<span id="row0" class="coderow"><span class="name">
</span></span><span id="row1" class="coderow"><span class="func">echo</span> <span class="name"></span><span class="string">"&lt;form&nbsp;method='post'&nbsp;action='formRespSelect.php'&gt;"</span><span class="name">;
</span></span><span id="row2" class="coderow"><span class="func">echo</span> <span class="name"></span><span class="string">"&lt;select&nbsp;name='country'&gt;"</span><span class="name">;
</span></span><span id="row3" class="coderow"><span class="func">foreach</span> <span class="name"></span><span class="divider" id="0">(</span><span class="name"></span><span class="divider" id="1">$</span><span class="variable">arr</span> <span class="func">as</span> <span class="name"></span><span class="divider" id="2">$</span><span class="variable">country</span><span class="divider" id="3">)</span><span class="name"></span> <span class="name"></span><span class="divider" id="4">{</span><span class="name">
</span></span><span id="row4" class="coderow">&nbsp;&nbsp;&nbsp;&nbsp;<span class="func">echo</span> <span class="name"></span><span class="string">"&lt;option&nbsp;value='"</span><span class="name"></span><span class="divider" id="5">.</span><span class="name"></span><span class="divider" id="6">$</span><span class="variable">country</span><span class="divider" id="7">[</span><span class="numeric">0</span><span class="divider" id="8">]</span><span class="name"></span><span class="divider" id="9">.</span><span class="name"></span><span class="string">"'&nbsp;&gt;"</span><span class="name"></span><span class="divider" id="10">.</span><span class="name"></span><span class="divider" id="11">$</span><span class="variable">country</span><span class="divider" id="12">[</span><span class="numeric">0</span><span class="divider" id="13">]</span><span class="name"></span><span class="divider" id="14">.</span><span class="name"></span><span class="string">"&lt;/option&gt;"</span><span class="name">;
</span></span><span id="row5" class="coderow"><span class="name"></span><span class="divider" id="15">}</span><span class="name">
</span></span><span id="row6" class="coderow"><span class="func">echo</span> <span class="name"></span><span class="string">"&lt;/select&gt;"</span><span class="name">;
</span></span><span id="row7" class="coderow"><span class="func">echo</span> <span class="name"></span><span class="string">"&lt;button&gt;Go!&lt;/button&gt;"</span><span class="name">;
</span></span><span id="row8" class="coderow"><span class="func">echo</span> <span class="name"></span><span class="string">"&lt;/form&gt;"</span><span class="name">;
</span></span><span id="row9" class="coderow"><span class="name"></span></span>
`
,
`
$_POST=array(
  <span class="data" id='textbox'>"textbox"</span> => <span class="data" id='vSpain'>"Spain"</span>,
);

$arr=array(
  array(<span class="data" id='bSweden'>"Sweden"</span>,<span class="data" id='bs10'>10</span>,array(...),
  array(<span class="data" id='bFrance'>"France"</span>,<span class="data" id='bs67'>67</span>,array(...),
  array(<span class="data" id='bSpain'>"Spain"</span>,<span class="data" id='bs46'>46</span>,array(
    array(<span class="data" id='Barcelona'>"Barcelona"</span>,<span class="data" id='s1600'>1600</span>),
    array(<span class="data" id='Seville'>"Seville"</span>,<span class="data" id='s690'>690</span>))  
  ),
  array(<span class="data" id='bNorway'>"Norway"</span>,<span class="data" id='bs5'>5</span>,array(...)
);
`
,
`
<span id="row0" class="coderow"><span class="name">
</span></span><span id="row1" class="coderow"><span class="name"></span><span class="divider" id="0">/</span><span class="name"></span><span class="comment">/&nbsp;Get&nbsp;country&nbsp;or&nbsp;default
</span></span><span id="row2" class="coderow"><span class="func">if</span><span class="divider" id="1">(</span><span class="name">isset</span><span class="divider" id="2">(</span><span class="name"></span><span class="divider" id="3">$</span><span class="variable">_POST</span><span class="divider" id="4">[</span><span class="name"></span><span class="string">'country'</span><span class="name"></span><span class="divider" id="5">]</span><span class="name"></span><span class="divider" id="6">)</span><span class="name"></span><span class="divider" id="7">)</span><span class="name"></span><span class="divider" id="8">{</span><span class="name">
</span></span><span id="row3" class="coderow">&nbsp;&nbsp;&nbsp;&nbsp;<span class="name"></span><span class="divider" id="9">$</span><span class="variable">incountry</span><span class="divider" id="10">=</span><span class="name"></span><span class="divider" id="11">$</span><span class="variable">_POST</span><span class="divider" id="12">[</span><span class="name"></span><span class="string">'country'</span><span class="name"></span><span class="divider" id="13">]</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="name">;
</span></span><span id="row4" class="coderow"><span class="name"></span><span class="divider" id="14">}</span><span class="func">else</span><span class="divider" id="15">{</span><span class="name">
</span></span><span id="row5" class="coderow">&nbsp;&nbsp;&nbsp;&nbsp;<span class="name"></span><span class="divider" id="16">$</span><span class="variable">incountry</span><span class="divider" id="17">=</span><span class="name"></span><span class="string">"Sweden"</span><span class="name">;
</span></span><span id="row6" class="coderow"><span class="name"></span><span class="divider" id="18">}</span><span class="name">
</span></span><span id="row7" class="coderow"><span class="name">
</span></span><span id="row8" class="coderow"><span class="name"></span><span class="divider" id="19">/</span><span class="name"></span><span class="comment">/&nbsp;Show&nbsp;that&nbsp;country
</span></span><span id="row9" class="coderow"><span class="func">echo</span> <span class="name"></span><span class="string">"&lt;tr&gt;&lt;th&gt;Country&lt;/th&gt;&lt;th&gt;Population&lt;/th&gt;&lt;th&nbsp;colspan='4'&gt;Cities&lt;/th&gt;&lt;/tr&gt;"</span><span class="name">;
</span></span><span id="row10" class="coderow"><span class="func">foreach</span> <span class="name"></span><span class="divider" id="20">(</span><span class="name"></span><span class="divider" id="21">$</span><span class="variable">arr</span> <span class="func">as</span> <span class="name"></span><span class="divider" id="22">$</span><span class="variable">country</span><span class="divider" id="23">)</span><span class="name"></span> <span class="name"></span><span class="divider" id="24">{</span><span class="name">
</span></span><span id="row11" class="coderow"><span class="name"></span> <span class="name"></span> <span class="func">if</span><span class="divider" id="25">(</span><span class="name"></span><span class="divider" id="26">$</span><span class="variable">country</span><span class="divider" id="27">[</span><span class="numeric">0</span><span class="divider" id="28">]</span><span class="name"></span><span class="divider" id="29">=</span><span class="name"></span><span class="divider" id="30">=</span><span class="name"></span><span class="divider" id="31">$</span><span class="variable">incountry</span><span class="divider" id="32">)</span><span class="name"></span><span class="divider" id="33">{</span><span class="name">
</span></span><span id="row12" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;tr&gt;"</span><span class="name">;
</span></span><span id="row13" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;td&gt;"</span><span class="name"></span><span class="divider" id="34">.</span><span class="name"></span><span class="divider" id="35">$</span><span class="variable">country</span><span class="divider" id="36">[</span><span class="numeric">0</span><span class="divider" id="37">]</span><span class="name"></span><span class="divider" id="38">.</span><span class="name"></span><span class="string">"&lt;/td&gt;"</span><span class="name">;
</span></span><span id="row14" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;td&gt;"</span><span class="name"></span><span class="divider" id="39">.</span><span class="name"></span><span class="divider" id="40">$</span><span class="variable">country</span><span class="divider" id="41">[</span><span class="numeric">1</span><span class="divider" id="42">]</span><span class="name"></span><span class="divider" id="43">.</span><span class="name"></span><span class="string">"&lt;/td&gt;"</span><span class="name">;
</span></span><span id="row15" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">foreach</span><span class="divider" id="44">(</span><span class="name"></span><span class="divider" id="45">$</span><span class="variable">country</span><span class="divider" id="46">[</span><span class="numeric">2</span><span class="divider" id="47">]</span><span class="name"></span> <span class="func">as</span> <span class="name"></span><span class="divider" id="48">$</span><span class="variable">city</span><span class="divider" id="49">)</span><span class="name"></span><span class="divider" id="50">{</span><span class="name">
</span></span><span id="row16" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;td&gt;"</span><span class="name">;
</span></span><span id="row17" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;table&gt;"</span><span class="name">;
</span></span><span id="row18" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;tr&gt;&lt;td&gt;"</span><span class="name"></span><span class="divider" id="51">.</span><span class="name"></span><span class="divider" id="52">$</span><span class="variable">city</span><span class="divider" id="53">[</span><span class="numeric">0</span><span class="divider" id="54">]</span><span class="name"></span><span class="divider" id="55">.</span><span class="name"></span><span class="string">"&lt;/td&gt;&lt;/tr&gt;"</span>&nbsp;&nbsp;<span class="name">;
</span></span><span id="row19" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;tr&gt;&lt;td&gt;"</span><span class="name"></span><span class="divider" id="56">.</span><span class="name"></span><span class="divider" id="57">$</span><span class="variable">city</span><span class="divider" id="58">[</span><span class="numeric">1</span><span class="divider" id="59">]</span><span class="name"></span><span class="divider" id="60">.</span><span class="name"></span><span class="string">"&lt;/td&gt;&lt;/tr&gt;"</span><span class="name">;
</span></span><span id="row20" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;/table&gt;"</span><span class="name">;
</span></span><span id="row21" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;/td&gt;"</span><span class="name">;
</span></span><span id="row22" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="61">}</span><span class="name">
</span></span><span id="row23" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="name"></span> <span class="func">echo</span> <span class="name"></span><span class="string">"&lt;/tr&gt;"</span><span class="name">;
</span></span><span id="row24" class="coderow"><span class="name"></span> <span class="name"></span> <span class="name"></span><span class="divider" id="62">}</span><span class="name">
</span></span><span id="row25" class="coderow"><span class="name"></span><span class="divider" id="63">}</span><span class="name">
</span></span><span id="row26" class="coderow"><span class="name"></span></span>
`
];
	