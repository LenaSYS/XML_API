var slides=[
		[	// 0
			{style:"Rubrik",text:"PHP FORMS"},
			{style:"Rubrik",text:""}
		],
		[	// 1
			{style:"Rubrik",text:"Forms"},
		 	{style:"Bullet",text:"The form tag defines where we send the information and how to send it"},
			{style:"Code",text:"<form action='response.php' method='post'>"},
		 	{style:"Bullet",level:2 ,text:"Action - to which url do we send the contents of the form"},
		 	{style:"Bullet",level:2 ,text:"Method - how the request is packaged"},			
		 	{style:"Bullet" ,text:"Method"},
		 	{style:"Bullet",level:2 ,text:"POST sends in request header"},
		 	{style:"Bullet",level:2 ,text:"GET sends as url parameters"},
			
		 	{style:"Bullet",level:2 ,text:"There are other rarely used methods"}			
		],
		[	// 2
			{style:"Rubrik",text:"Inputs"},
		 	{style:"Bullet",text:"The form tag can contain any number of inputs. The name of the input is used to identify the content on the response page."},
		 	{style:"Bullet",level:2 ,text:"Text input - for writing text"},
			{style:"Code",text:"<input type='text' name='firstname' value='defaultname' >"},
		 	{style:"Bullet",level:2 ,text:"Checkbox input - for binary choice"},
			{style:"Code",text:"<input type='checkbox' name='withsugar' value='lots' >"},
		 	{style:"Bullet",level:2 ,text:"Radio input - for multiple choice"},
			{style:"Code",text:"<input type='radio' name='milk' value='every time' >"},	
			{style:"Code",text:"<input type='radio' name='milk' value='always' >"},
		 	{style:"Bullet",level:2 ,text:"Number input - for numbers"},
			{style:"Code",text:"<input type='number' name='quantity' value='2' >"}	
		],
		[	// 3
			{style:"Rubrik",text:"Specialized Inputs"},
		 	{style:"Bullet",text:"There are also specialized inputs with more complicated layout than ordinary inputs."},
		 	{style:"Bullet",level:2 ,text:"Button - also submits form"},
			{style:"Code",text:"<button name='buttonname'>Button Text</button>"},
			{style:"Code",text:"<input type='submit' name='buttonname' value='Button Text'>"},			
		 	{style:"Bullet",level:2 ,text:"Select dropdowns - choice from list"},
			{style:"Code",text:"<select name='selectbox'><option>Opt1</option></select>"},
		 	{style:"Bullet",level:2 ,text:"Text area - longer texts"},
			{style:"Code",text:"<textarea width='40' height='40' name='comment'>default</textarea>"}
		],
		[	// 4
			{style:"Rubrik",text:"Receiving Input"},
		 	{style:"Bullet",text:"In PHP inputs are received in global variable arrays. Depending on the method either in *$_POST* or *$_GET*"},
			{style:"Bullet",text:"Since php crashes if we try to read from an array that has not been set we use isset to check if data is present"},
			{style:"Bullet",text:"*print_r* inside a <pre> tag gives us a formatted way to see what *$_POST* contains"},
			{style:"Bullet",text:"A common error is that a variable is not named right, for example an input has name='Greger' but we try to read it with *$_POST['greger']* the print_r should always be present to mitigate this"},
		],	
		[	// 5
			{style:"Rubrik",text:"Generating Form"},
		 	{style:"Bullet",text:"We can prepare a form by generating for example a select box dropdown"},
			{style:"Bullet",text:"We do this in exactly the same way as generating tables but we generate select and option tags instead"},
			{style:"Bullet",text:"One key farure is that we can generate value attributes that are distinct from the option tag"},
			{style:"Bullet",text:"This wat we can show the name of a person in the dropdown but send the ssn to the server"},		
			{style:"Code",text:"<option value='102211-5555'>Greger Olszon</option>"},			
		],	
		[	// 6
			{style:"Rubrik",text:"Combining Conditional with Generated form"},
		 	{style:"Bullet",text:"If we store content in dropdown input in a variable (gated with isset) we can use this to filter our data"},
			{style:"Bullet",text:"With an if-statement we check if we should process each line"},
			{style:"Bullet",text:"If a row is not skipped we use the normal code for row-based or column-based table to display the data"}
		],		
		[	// 7
			{style:"Rubrik",text:"Self Referencing form"},
		 	{style:"Bullet",text:"A self referencing form combines the form, and output on the same page."},
		 	{style:"Bullet",level:2 ,text:"Normally, in a page e.g. select.php we have action='selectresponse.php' "},
		 	{style:"Bullet",level:2 ,text:"In a self referencing page we write  we write action='select.php' this way the page returns to itself when we press the button."},
			{style:"Bullet",text:"It is basically just the code from the form-generation pasted above (or below) the code for the response."},
			{style:"Bullet",text:"The isset is important since we can not generate output when we navigate to the page before pressing the button "}
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
				[{statement:"ifvar",arr:0,pos:"textbox",comp:"hello",row:1,else:5}],
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
				[{statement:"foreach",level:1,arr:2,pos:0}],
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
  <span class="data" id='country'>"country"</span> => <span class="data" id='vSpain'>"Spain"</span>,
);

$arr=array(
  array(<span class="data" id='Sweden'>"Sweden"</span>,<span class="data" id='bs10'>10</span>,array(...),
  array(<span class="data" id='France'>"France"</span>,<span class="data" id='bs67'>67</span>,array(...),
  array(<span class="data" id='Spain'>"Spain"</span>,<span class="data" id='bs46'>46</span>,array(
    array(<span class="data" id='Barcelona'>"Barcelona"</span>,<span class="data" id='s1600'>1600</span>),
    array(<span class="data" id='Seville'>"Seville"</span>,<span class="data" id='s690'>690</span>))  
  ),
  array(<span class="data" id='Norway'>"Norway"</span>,<span class="data" id='bs5'>5</span>,array(...)
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
	