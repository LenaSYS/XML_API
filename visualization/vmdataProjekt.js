var slides=[
		[	// 0
			{style:"Rubrik",text:"PROJEKT I"},
			{style:"Rubrik",text:"SOFTWARE ENGINEERING"},
			{style:"Rubrik",text:""},			
			{style:"Rubrik",text:"FÖRSTA VECKAN"}
		],
		[	// 1
			{style:"Rubrik",text:"Kursens upplägg"},
		 	{style:"Bullet",text:"Uppstartsvecka (V1)"},
		 	{style:"Naked",text:"30 Mars-03 April"},
		 	{style:"Bullet",text:"Första Halvan (V2-V5)"},
		 	{style:"Naked",text:"06 April-30 April"},			
		 	{style:"Bullet",text:"Andra Halvan (V6-V9)"},
		 	{style:"Naked",text:"04 Maj-29 Maj"},
		 	{style:"Bullet",text:"Hemtentamen (V10)"},
		 	{style:"Naked",text:"02 Juni-05 Juni"},			
		],
		[	// 2
			{style:"Rubrik",text:"Uppstartsveckan"},
		 	{style:"Bullet",text:"Utse Gruppledare och Issueansvarig"},
		 	{style:"Bullet",text:"Organisera Gruppen"},
		 	{style:"Bullet",text:"Göra research om LenaSYS"},
		 	{style:"Bullet",text:"Sätta upp utvecklingsmiljö / Göra Första Commit"},
		 	{style:"Bullet",text:"Lära sig om Webbtjänster / Continuous Deployment"}
		],
		[	// 3
			{style:"Rubrik",text:"Första Dagen i Kursen"},
		 	{style:"Bullet",text:"Välja Gruppledare/Issueansvarig för båda halvorna av kursen"},
		 	{style:"Bullet",text:"Alla medlemar som deltar på discord skall registrera ett konto på github som heter som skolans användarnamn exv. a00leifo. (små bokstäver)"},
		 	{style:"Bullet",text:"När alla konton är skapade och *bekräftade* så skall gruppledaren för första halvan maila en lista med alla kontonamn till henrik gustavsson."},
		 	{style:"Bullet",text:"I listan skall det även vara tydligt vilken student som är gruppledare/issueansvarig båda halvorna av kursen."},
		 	{style:"Bullet",text:"Börja titta på github, hur issues, pull requests och kommentarer etc. ser ut"},
			
		],
		[	// 4
			{style:"Rubrik",text:"Arbetsprocess"},
		 	{style:"Bullet",text:"Om continuous development/deployment skall fungera så krävs följande:"},
		 	{style:"Bullet",level:2,text:"Varje issue har maximalt en branch"},
			{style:"Bullet",level:2,text:"Varje commit/issue skall maximalt ta ett par dagar att implementera"},
		 	{style:"Bullet",level:2,text:"En issue skall antingen vara genomförd eller revertad vid vecko-merge"},
		 	{style:"Bullet",level:2,text:"Om en issue förväntas ta mer än ett par dagar att lösa måste den delas upp i flera mindre issues"},	
		 	{style:"Bullet",level:2,text:"När en pull request är gjord så måste testning ske för att se att systemet inte blivit 'värre'"},	
		],	
		[	// 5
			{style:"Rubrik",text:"Gruppledarens Roll"},
		 	{style:"Bullet",text:"Leda gruppen och reda ut konflikter inom gruppen"},
		 	{style:"Bullet",text:"Sköta huvudsakliga kommunikationen med kunden"},
		 	{style:"Bullet",text:"Bestämma prioritering av issues"},
		 	{style:"Bullet",text:"Kommunicera med övriga gruppledare när exv en issue överlappar mellan flera grupper"},
		 	{style:"Bullet",text:"Leda vecko-merge"},
			{style:"Bullet",text:"Bestämma prioritering bland filer och välja filer exv 'duggaed.*' "},			
		 	{style:"Bullet",text:"Ha sista ordet"},
			
		],	
		[	// 6
			{style:"Rubrik",text:"Issue-ansvarigs Roll"},
		 	{style:"Bullet",text:"Tillsammans med gruppledare bestämma till vilken grupp issues hör"},
		 	{style:"Bullet",text:"Tilldela personer till issues genom 'assignment' på github"},
		 	{style:"Bullet",text:"Tilldela testare till pull requests"},			
		 	{style:"Bullet",text:"Bestämma när issue är färdig efter testning och trycka på 'merge' på pull request"},
		 	{style:"Bullet",text:"När issue är färdig välja nästa issue från prioritetslistan med issues"},
		 	{style:"Bullet",text:"Diskutera med de som implementerar issues och gruppleare genom kommentarer på issues "},
		 	{style:"Bullet",text:"Skapa nya issues vid behov / delegera skapandet av ny issue"},			
		 	{style:"Bullet",text:"Bestämma när/om en issue skall delas upp i flera"},
		 	{style:"Bullet",text:"Bestämma priorietering av issues inom en viss fil"},		
		],
		[	// 7
			{style:"Rubrik",text:"Utvecklingsmiljön"},
		 	{style:"Bullet",text:"Studenterna har tillgång till webbserver för testning."},
		 	{style:"Bullet",text:"LenaSYS behöver ej komplicerade lösningar med docker eller virtuella maskiner"},			
		 	{style:"Bullet",text:"Varje student kan ha mapp lokalt och mapp på servern hämta ner lena direkt från github till mapp och utveckla mot den"},
		 	{style:"Bullet",text:"På utvecklingsmaskinen kan en grupp dela på samma databas eller ha olika databaser genom inställning i php-fil"},
		 	{style:"Bullet",text:"dbcreate.sql kan exekveras eller installationsskript kan köras för att skapa databas efter det kan man hämta php koden från github"},
	
		],	
		[	// 8
			{style:"Rubrik",text:"Vecko-Merge"},
		 	{style:"Bullet",text:"Varje student merge-ar inför vecko-merge sin kod med gruppens branch"},
		 	{style:"Bullet",text:"På vecko-merge-tiden hjälper Andras gruppledare och övriga studenter att slå samman de olika gruppernas branches"},
		 	{style:"Bullet",text:"Vid konflikter mellan branches skall gruppledare och issueansvariga från olika grupper bestämma vilken kod som skall tas bort och vilken kod som skall behållas"},			
		 	{style:"Bullet",text:"På vecko-merge-tiden skall grundläggande testning ske för att se om systemet fortfarande fungerar som tänkt"},			
		 	{style:"Bullet",text:"Vid vecko-merge bör issueansvarig delta för att kunna prioritera issues för att mitigera eventuella problem"},			
		],		
];

