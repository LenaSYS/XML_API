	
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
];
	