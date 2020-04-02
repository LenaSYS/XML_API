var slides=[
		[	// 0
			{style:"Rubrik",text:"PROJEKT I"},
			{style:"Rubrik",text:"SOFTWARE ENGINEERING"},
			{style:"Rubrik",text:""},			
			{style:"Rubrik",text:"DEVELOPMENT PROCESS"},
			{style:"Rubrik",text:"FROM AXE TO LIMP"}			
		],
		[	// 1
			{style:"Rubrik",text:"Workflows : Shared Repository"},
		 	{style:"Bullet",level:2,text:"Code is *Checked* *out* and modified and then *Checked* *in* when the feature is finished."},
		 	{style:"Bullet",level:2,text:"Can be nearly completely off-line as only first and last step require networking"},
		 	{style:"Bullet",level:2,text:"We 'Commit' versions to local repository during development"},
		 	{style:"Bullet",level:2,text:"Favours Long-term development of features, can be as long as whole project duration."},
		 	{style:"Bullet",level:2,text:"Features should be completed before checking back in."},
		 	{style:"Bullet",level:2,text:"Only 'working' system at *check* *in*"}			
		],
		[	// 2
			{style:"Rubrik",text:"Pull based development"},
		 	{style:"Bullet",level:2,text:"A type of shared repository process."},
		 	{style:"Bullet",level:2,text:"Check out to local repository, create pull request to *ask* *permission* to merge contribution to main repository"},
		 	{style:"Bullet",level:2,text:"Other members of project team *review* changes and *give* or *deny* permission to merge the changes"},
			{style:"Bullet",level:2,text:"If issue takes more than a few days to implement we *split* this issue into a number of smaller issues until they take at most a few days to finish"},
			{style:"Bullet",level:2,text:"Always run-able but not necessarily feature complete, to allow for *tests* at each pull request"},	
			{style:"Bullet",level:2,text:"Makes extensive use of social aspects of development platform e.g. gitHub"}			
		],
		[	// 3
			{style:"Rubrik",text:"Weekly Merge"},
		 	{style:"Bullet",text:"At the start of each week we make branches for each group e.g. g1 g2 g3 g4"},
		 	{style:"Naked",text: "Each student makes their branches from a group branch for example g3"},
		 	{style:"Bullet",text:"Each pull reuqest is made aginst the group branch"},
		 	{style:"Bullet",text:"Just before weekly merge remaining branches must make a pull request or be deleted"},
		 	{style:"Bullet",text:"At weekly merge the group leaders join g1 to g2 and merge that result to g3 and then to g4 finally this joined branch is merged to main repo"},
		 	{style:"Bullet",text:"Group leaders and issue managers then perform basic tests to see that the system mostly works and then make new g1 g2 g3 g4 branches"},			
		],		
		[	// 4
			{style:"Rubrik",text:"Continuous Deployment / Development"},
		 	{style:"Bullet",text:"Pull-based develoment makes waterfall model development complicated."},
		 	{style:"Bullet",level:2,text:"Large commits delivery at the end of deliverable may result in many merge conflicts"},
		 	{style:"Bullet",level:2,text:"Testing is complicated when system may not be testable until end of deliverable"},			
			{style:"Bullet",text:"Continuous Deployment"},
		 	{style:"Bullet",level:2,text:"Small commits that each is considered a deliverable"},
		 	{style:"Bullet",level:2,text:"No big versions steps, features and fixes are delivered alsmost daily"},
		 	{style:"Bullet",level:2,text:"New version must work with old database, new version of one part of system must work with old version of other part of system"},			
		],		
		[	// 5
			{style:"Rubrik",text:"Implications of Continuous Deployment / Development"},
		 	{style:"Bullet",level:2,text:"Should work with “current” dataset e.g. wipe database and reinstall may break testing"},
		 	{style:"Bullet",level:2,text:"Refactoring is nearly never possible or very very complicated as all kinds of old things may break."},
			{style:"Bullet",level:2,text:"Database is as is, we can make incremental changes, add columns or tables or increase size of data type, but we should never change column names, change datatypes etc."},
		 	{style:"Bullet",level:2,text:"Code standard becomes important, not only must code work like old code but must also look like old code, to allow easy review and testing."},
		 	{style:"Bullet",level:2,text:"We update each module separately deployed system may have some old modules and some new modules."},
	 		{style:"Bullet",level:2,text:"Dependencies on external libraries/frameworks should be minimized"},
			
		],		
		[	// 6
			{style:"Rubrik",text:"Code Architecture"},
		 	{style:"Bullet",text:"We use a service-based interface - View in the shape of javascript"},
		 	{style:"Bullet",text:"Service interface with url to pass parameters to databas - No html generation in PHP, only javascript"},
		 	{style:"Bullet",text:"JSON data format for all information passed to client"},
		 	{style:"Bullet",level:2,text:"*sectioned.js* - Model and view code"},
			{style:"Bullet",level:2,text:"*sectioned.php* - gatekeeper and static pages for section editor"},
		 	{style:"Bullet",level:2,text:"*sectionedService.php* - all database access for sectioned module"},
		 	{style:"Bullet",level:2,text:"Most generic code in dugga.js and basic.php in shared folder, some exceptions such as markdown.js/markdown.php"}
		],			
		[	// 7
			{style:"Rubrik",text:"What is Git?"},
		 	{style:"Bullet",text:"Git is a collaborative version control system developed by Linus Torvalds"},
		 	{style:"Naked",text: "https://en.wikipedia.org/wiki/Git_%28software%29"},
		 	{style:"Bullet",text:"Git was self-hosed after 4 days of development"},
		 	{style:"Bullet",text:"It differs from other versioning systems in that it"},
		 	{style:"Bullet",level:2,text:"Tracks snapshots of entire project not individual files"},
		 	{style:"Bullet",level:2,text:"Great speed since all files are stored locally"}
		],		
		[	// 8
			{style:"Rubrik",text:"Git – Fork?"},
		 	{style:"Bullet",text:"You should not use fork in this course"},
		 	{style:"Bullet",text:"Fork creates a completely new repository with no connection back to the original repository"},
		 	{style:"Bullet",text:"This is good if you want to continue someone elses work, but are not on the development team"},
		 	{style:"Bullet",text:"In this course you are on the team and should collaborate"},
		],	
		[	// 9
			{style:"Rubrik",text:"Detailed Process Step 1 (developer/issue manager)"},
		 	{style:"Bullet",level:2,text:"1. Developer clones repo in order to have initial version "},
		 	{style:"Bullet",level:2,text:"2. Developer makes local copy of repository"},
		 	{style:"Bullet",level:2,text:"3. Issue manager assigns issues to groups through labels"},
		 	{style:"Bullet",level:2,text:"4. Group leader prioritizes modules/issues and issue manager assigns developer(s)"},
		],
		[	// 10
			{style:"Rubrik",text:"Detailed Process Step 2 (Developer)"},
		 	{style:"Bullet",level:2,text:"1. If needed developer asks questions in issue discussion thread to customer or to clarify / document design decisions "},
		 	{style:"Bullet",level:2,text:"2. Developer Makes changes and commit (once or more) to local repository"},
		 	{style:"Bullet",level:2,text:"3. Developer Pushes changes to github"},
		 	{style:"Bullet",level:2,text:"4. Developer Opens Pull Request"},
		 	{style:"Bullet",level:2,text:"5. Developer Links issue to allow issue manager to assign tester"},			
		],			
		[	// 11
			{style:"Rubrik",text:"Detailed Process Step 3 (issue manager)"},
		 	{style:"Bullet",level:2,text:"1. Assign reviewer"},
		 	{style:"Bullet",level:2,text:"2. Reviewer makes review"},
		 	{style:"Bullet",level:2,text:"3. If reviewer ok-s pull request"},
		 	{style:"Bullet",level:2,text:"4. Issue manager make own asessment of work and confirms merge"},
		 	{style:"Bullet",level:2,text:"5. Issue manager deletes confirmed merge"},			
		],		
];

