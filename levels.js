// *******************************************************
// *** L E V E L S ***************************************
// *** Levels 1-9 cover all basic commands
// *** Levels 10+ has Gidget enter the goop factory
// ***            where he has to combine all his
// ***            abilities and 'ask' other things to
// ***            help him shut the factory down!
// *******************************************************

GIDGET.levels = {

	// *******************************************************

	learnScan: function() {

		// ----- G - C O D E -----
		
		var code = 
			"scan ruck";

		var world = new GIDGET.World([3], [1,1,20], ["grass", "olivedrab", 1], code);

		// ----- H I D D E N -----
					
		world.addHiddenCommand('goto');
		world.addHiddenCommand('ask');
		world.addHiddenCommand('grab');
		world.addHiddenCommand('drop');
		world.addHiddenCommand('analyze');
		world.addHiddenCommand('if');
			
		// ---- G O A L S --------
		
		world.addGoal("scanned rock");
		
		// ---- T I T L E --------
		
		if (GIDGET.experiment.isControl())
			world.addTitle("Testing Scanner");
		else
			world.addTitle("Testing Gidget's Scanner");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("default", "SYSTEM INFORMATION: Gidget<br />DIRECTIVES: 1. Clean up goops from chemical spill. <br />2. Transport remaining animals to safety. <br /> STATUS: Area toxic to humans. Receiving instructions from remote mission control.");
			world.addMissionText("sad", "SYSTEM STATUS: Instruction generator chip damaged; batteries damaged - power levels will fluctuate between levels until they fail.");
			world.addMissionText("default", "INTERFACE TUTORIAL: $goals(Goals) from mission control are displayed here - these cannot be altered. Check here to see requirements to complete each level.");
			world.addMissionText("default", "$instructions(Instructions) are typed into this area. These are the instructions Gidget follows to complete missions. Gidget's generator chip is damaged, so there are mistakes in the instruction list. Mission control's objective is to fix it by <b>editing</b> or even <b>removing</b> any of the existing instructions to fulfill the goals for each level.");
 			world.addMissionText("default", "The $memory(memory banks) display the current energy units on top, and also shows everything that Gidget is keeping track of while running instructions. Remember - items displayed here cannot be clicked, but can be used to display more information about a particular object by placing a mouse cursor over it.");		
			world.addMissionText("default", "Finally, these are the $controls(controls) given by mission control to have Gidget execute the instructions. The first button runs each instruction line <b>step-by-step</b> - there might be several steps per line. The second button executes a <b>whole line at once</b>. Both of these buttons may have to be pressed <b>multiple times</b> to execute everything in the instructions box.");
			world.addMissionText("default", "The third button runs through <b>everything</b> in the instructions box and goal box, showing every action <b>step-by-step</b>. Finally, the fourth button runs <b>everything</b> in the instructions box and goal box <b>at once</b>, showing the final output. These buttons can be used to quickly run through the instructions and see if there are any errors.");
			world.addMissionText("default", "EXTRA INFORMATION: Instructions can only be edited when the box is white (when instructions are not being executed). Gidget can also be asked to execute code continually until all goals are completed. TUTORIAL COMPLETE. BEGINNING MISSION.");
			world.addMissionText("default", "The GOAL for this level is is to scan a rock to make sure Gidget's scanner is working. Instructions added, but not working correctly.");
		}		
		else {
			world.addMissionText("default", "Hi! I'm Gidget! I am here to clean up goops from a chemical spill and transport any remaining animals back to safety. It's dangerous here for humans, so I'm counting on you to help me from mission control!");
			world.addMissionText("sad", "Unfortunately, my instruction generator was damaged when I was dropped off! It also looks my batteries are damaged too, so power levels will fluctuate per level until failure.");
			world.addMissionText("default", "Okay, first, let's go over my interface! First, this is where the $goals(goals) from mission control are shown - these can't be changed. You should check here first to make sure you know what we need to do to complete a level.");
			world.addMissionText("default", "Next, here is my $instructions(instructions box). These are the instructions I follow to complete my missions. I tried my best to fill it in to help you out, but my generator chip is damaged so there may be mistakes! Please help me by <b>editing</b> or even <b>removing</b> any of the existing instructions for each level!");
 			world.addMissionText("default", "Here is $memory(my memory)! It shows my current energy units on top, and also shows everything that I am keeping track of while I am running my instructions. Remember - you can't click on anything here, but you can move your cursor over any items I am interacting with to see more information about it!");
			world.addMissionText("default", "Finally, here are the $controls(controls) where you can ask me to execute my instructions. The first button runs each instruction line <b>step-by-step</b> - there might be several steps per line. The second button executes a <b>whole line at once</b>. Both of these buttons may have to be pressed <b>multiple times</b> to execute everything in my instructions box and check my goals.");
			world.addMissionText("default", "The third button runs through <b>everything</b> in the instructions box and goal box, showing every action <b>step-by-step</b>. Finally, the fourth button runs <b>everything</b> in the instructions box and goal box <b>at once</b>, showing the final output. Use both of these buttons to quickly run through the instructions and see if there are any errors.");
			world.addMissionText("default", "That's it! Just remember that my instructions can only be edited when the box is white (when I'm not executing), and that you can continue to ask me to execute code until we complete our goals! Now let's begin!");
			world.addMissionText("default", "According to the goal box for this level, my mission is to make sure my scanner is working by scanning a rock. I tried to add instructions, but it's not working!");
		}		
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "rock", 1, 0, "brown", [], {});
		
		// -----------------------
											
		return world;
	
	},
	
	// *******************************************************
	
	learnGoto: function() {

		// ----- G - C O D E -----

		var code = 
			"scan rocks\n" +
			"goto rocks";
	
		var world = new GIDGET.World([5], [1,1,20], ["grass", "olivedrab"], code);

		// ----- H I D D E N -----
					
		world.addHiddenCommand('ask');
		world.addHiddenCommand('grab');
		world.addHiddenCommand('drop');
		world.addHiddenCommand('analyze');
		world.addHiddenCommand('if');
					
		// ---- G O A L S --------
					
		world.addGoal("gidget on bucket");
		
		// ---- T I T L E --------
		
		if (GIDGET.experiment.isControl())
			world.addTitle("Testing Mobility");
		else
			world.addTitle("Testing Gidget's Mobility");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			//world.addMissionText("sad", "[RECHARGED BATTERIES] using cracked solar panels.");
			world.addMissionText("default", "[CONTAINER ITEM DETECTED] Check mobility. Proceed to bucket.");
		}			
		else {
			//world.addMissionText("default", "Phew, I was able to charge my battery a little using my cracked solar panels.");
			world.addMissionText("default", "Oh! That bucket over there looks like it could be useful!");
			world.addMissionText("sad", "For some reason, I can't seem to get to the right place! This is so confusing...please help me!");
		}

		new GIDGET.Thing(world, "rock", 1, 0, "brown", [], {});
		new GIDGET.Thing(world, "rock", 4, 1, "brown", [], {});
		new GIDGET.Thing(world, "rock", 0, 4, "brown", [], {});
		new GIDGET.Thing(world, "bucket", 4, 2, "DarkSlateGray", [], {});
		
		// -----------------------

		return world;
	
	},	

	// *******************************************************
	
	learnGrabAndDrop: function() {

		// ----- G - C O D E -----
		
		var code = 
			"scan cat\n" +
			"goto cat\n" +
			"grab cat\n" +
			"scan bucket\n" +
			"goto bucket\n" +
			"drop cat\n" +
			"scan crate\n" +
			"goto crate\n" +
			"grab goop\n" +
			"scan bucket\n" +
			"goto cat\n" +
			"drop goop";
	
		var world = new GIDGET.World([8], [1,1, 60], ["grass", "olivedrab"], code);

		// ----- H I D D E N -----
					
		world.addHiddenCommand('ask');
		world.addHiddenCommand('analyze');
		world.addHiddenCommand('if');
								
		// ---- G O A L S --------
		
		world.addGoal("kitten on crate");
		world.addGoal("goop on bucket");
		
		// ---- T I T L E --------
		
		if (GIDGET.experiment.isControl())
			world.addTitle("Testing Grabbing and Dropping");
		else
			world.addTitle("Testing Gidget's Grabbing and Dropping");

		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("default", "[GOOP & DOMESTIC ANIMAL DETECTED] Begin cleanup procedures.");
			world.addMissionText("default", "OBJECTIVES: begin cleanup procedures; drop animals into crate and goops into bucket.");
			world.addMissionText("sad", "WARNING: Observe energy levels. Carrying object while moving uses more energy.");
		}		
		else {
			world.addMissionText("sad", "Hey look! Goops are starting to drop here! Oh no! There's a kitten that needs our help!");
			world.addMissionText("sad", "Please assist me in putting the kitten in a safe place and cleaning up the goop!");
			world.addMissionText("sad", "It takes more energy to move when I'm holding something... so hopefully I'll have enough power to complete this task!");
		}
			
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "goop", 2, 5, "green", [], {});
		new GIDGET.Thing(world, "crate", 7, 7, "Chocolate", [], {});
		new GIDGET.Thing(world, "bucket", 1, 0, "DarkSlateGray", [], {});
		var kitten = new GIDGET.Thing(world, "kitten", 5, 3, "orange", [], {});
		
		if (GIDGET.experiment.isControl()) {kitten.setCode("say Meow...");}
		else {kitten.setCode("say Meow, help me Gidget!");}

		
		// -----------------------	

		return world;
	
	},
	
	// *******************************************************
	
	learnCompounds: function() {

		// ----- G - C O D E -----
		
		var code = 
			"scn dog, goto it,\n" +
			"scan, goto bucket, drop dog";
		
		var world = new GIDGET.World([5], [0,0, 30], ["grass", "olivedrab"], code);

		// ----- H I D D E N -----
					
		world.addHiddenCommand('ask');
		world.addHiddenCommand('analyze');
		world.addHiddenCommand('if');
								
		// ---- G O A L S --------
		
		world.addGoal("dog on crate");
		
		// ---- T I T L E --------
		
		if (GIDGET.experiment.isControl())
			world.addTitle("Condensing Instructions");
		else
			world.addTitle("Condensing Gidget's Instructions");

		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("default", "[DOMESTIC ANIMAL DETECTED] continue procedures; drop animals into crate.");
			world.addMissionText("default", "RECOMMENDATION: use <b>commas</b> to separate commands. Within the same chain of commas, <b>it</b> can be used to refer to the same object.");			
		}		
		else {
			world.addMissionText("sad", "Hey look! There's a dog here that needs to be shipped out to a safe place. Let's get it in the crate!");
			world.addMissionText("sad", "I remembered that using <b>commas</b> between commands makes the code easier to write! I also remember within the same chain of commas, <b>it</b> can be used to refer to the same object. I made some mistakes, so can you help me out?");
		}
		
		// ----- T H I N G S -----
		
		var dog = new GIDGET.Thing(world, "dog", 4, 1, "orange", [], {});
		new GIDGET.Thing(world, "crate", 3, 3, "Chocolate", [], {});
		
		if (GIDGET.experiment.isControl()) {dog.setCode("say Woof woof!");}
		else {dog.setCode("say Gidget, I'm lonely! Please help me get home!");}
		
		
		// -----------------------
						
		return world;
	
	},
	
	// *******************************************************
	learnAnalyzeAndAsk: function() {

		// ----- G - C O D E -----
	
		var code = 
			"goto goops, grab it\n" +
			"goto battery, analyze it\n" +
			"ask battery to powerize gidget\n" +
			"goto bucket\n" +
			"drop goops";
		
		var world = new GIDGET.World([6], [1,0], ["grass", "olivedrab"], code);	
		world.gidget.setEnergy(15);

		// ----- H I D D E N -----
					
		world.addHiddenCommand('if');
											
		// ---- G O A L S --------
		
		world.addGoal("two goops on bucket");

		// ---- T I T L E --------
		
		if (GIDGET.experiment.isControl())
			world.addTitle("Utilizing Special Items");
		else
			world.addTitle("Using Special Items with Gidget");

		
		// ---- M I S S I O N ----
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("default", "[GOOPS & ENERGY SOURCE DETECTED] continue procedures; drop animals into crate.");
			world.addMissionText("default", "RECOMMENDATION: refill energy using power source. <b>Analyze</b> power source and put cursor over icon in memory banks to see what it can be <b>ask</b>ed to do.");
		}		
		else {
			world.addMissionText("default", "My power levels are still fluctuating and I don't have enough energy to clean up the goops in this area!");
			world.addMissionText("sad", "Hey look! Luckily, there seems to be an energy source here! I'll have to <b>analyze</b> it before I know what to <b>ask</b> it to do. Remember, after I <b>analyze</b> it, you can put your cursor over it in my memory to see what I can <b>ask</b> it to do!");		}
				
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 5, 5, "rgb(250,0,255)", [], {});
		new GIDGET.Thing(world, "goop", 3, 3, "green", [], {});
		new GIDGET.Thing(world, "goop", 4, 2, "green", [], {});
		new GIDGET.Thing(world, "battery", 1, 3, "yellow", [], 
			{ 
			energize : new GIDGET.Action([ "beneficiary" ],
				"raise beneficiary energy 100"
				)
			}
		);
		
		// -----------------------

		return world;
		
	},		

	// *******************************************************
		
	learnConditionalCompound: function() {

		// ----- G - C O D E -----
	
		var code = 
			"goto, anlyze it, if it isn't infected, grab srub\n" +
			"goto bucket";
					
		var world = new GIDGET.World([8,8], [1,1], [], code);
			
		// ---- G O A L S --------
		
		world.addGoal("three shrubs on crate aren't infected");

		// ---- T I T L E --------
		
		if (GIDGET.experiment.isControl())
			world.addTitle("Testing Conditionals");
		else
			world.addTitle("Checking Conditionals with Gidget");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("default", "[MASS PLANT DEATH DETECTED] collect the plants that are <b>not infected</b> for analysis. Analyze each plant and check its attributes in the memory banks.");
		}		
		else {
			world.addMissionText("sad", "Oh no! It looks like the plants have died from the goop in this area!");
			world.addMissionText("default", "I need to collect all the <b>non-infected</b> plants for further analysis. Make sure to analyze each plant and check its attributes in my memory.");	
		}
				
				
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "shrub", 7, 1, "orange", [ 'infected' ], {});
		new GIDGET.Thing(world, "shrub", 0, 2, "orange", [ 'thorny' ], {});
		new GIDGET.Thing(world, "shrub", 7, 4, "orange", [ 'infected' ], {});
		new GIDGET.Thing(world, "shrub", 6, 6, "orange", [ 'wilted' ], {});
		new GIDGET.Thing(world, "shrub", 5, 4, "orange", [ 'infected' ], {});
		new GIDGET.Thing(world, "shrub", 7, 4, "orange", [ 'oily' ], {});
		new GIDGET.Thing(world, "crate", 5, 7, "Chocolate", [], {});
		
		// -----------------------

		return world;
	
	},	
			
	
	
	// *******************************************************
	
	navigateTrees: function() {

		// ----- G - C O D E -----
			var code = 
			"scan trees\n" +
			"goto bucket, if it is glowing, grab it\n" +
			"scan goops, dropp goops";
		
		var world = new GIDGET.World([7,7], [4,4,70], [], code);
			
		// ---- G O A L S --------
		
		world.addGoal("goop on bucket is glowing");
		
		// ---- T I T L E --------
		
		if (GIDGET.experiment.isControl())
			world.addTitle("Navigate Barriers");
		else
			world.addTitle("Moving Around Barriers with Gidget");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("default", "[GLOWING GOOP DETECTED] collect the glowing goop for further analysis.");
		}		
		else {
			world.addMissionText("sad", "Wow, all the grass in this area is dead too! But the tall trees seemed to have survived. I also detect a glowing goop here!");
			world.addMissionText("default", "We need to collect the glowing goop for further analysis!");	
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 6, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "goop", 1, 1, "green", [], {});
		new GIDGET.Thing(world, "goop", 5, 5, "green", [ 'glowing' ], {});

		var wall;
		wall = new GIDGET.Thing(world, "tree01", 1, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 1, 4, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 2, 0, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 2, 1, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 4, 1, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 4, 2, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 4, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 4, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 4, 6, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 4, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		
		new GIDGET.Thing(world, "battery", 5, 3, "yellow", [], 
			{ 
			energize : new GIDGET.Action([ "beneficiary" ],
				"raise beneficiary energy 60"
				)
		});
		
		
		// -----------------------

		return world;
	
	},
	// *******************************************************
	
	learnAvoidPassive: function() {

		// ----- G - C O D E -----
			var code = 
			"scan crack\n" +
			"goto goop avoid crack, grab it\n" +
			"scan bucket, goto it, drop goop";
	
		var world = new GIDGET.World([10], [5,5], ["dirt","burlywood", 0], code);
		world.gidget.setEnergy(110);
			
		// ---- G O A L S --------
		
		world.addGoal("goop on bucket is glowing");
		world.addGoal("kitten on crate");
		
		// ---- T I T L E --------
		
		if (GIDGET.experiment.isControl())
			world.addTitle("Navigating Obstacles");
		else
			world.addTitle("Avoiding Obstacles with Gidget");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("default", "[CRACKS DETECTED] <b>avoid</b> the cracks to get the glowing goop back to the bucket and the kitten into the crate.");
		}		
		else {
			world.addMissionText("sad", "Whoops! I dropped my bucket in a dangerous area near a bunch of cracks. Please help me get the glowing goop to the bucket and the kitten to the crate safely while <b>avoid</b>ing the cracks!");	
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 9, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "goop", 6, 4, "green", [ 'glowing' ], {});
		new GIDGET.Thing(world, "goop", 8, 8, "green", [], {});
		new GIDGET.Thing(world, "kitten", 3, 1, "orange", [], {});		
		new GIDGET.Thing(world, "crate", 6, 2, "Chocolate", [], {});
		
		var b1 = new GIDGET.Thing(world, "crack", 5, 9, "black", [], {});

		var b2 = new GIDGET.Thing(world, "crack", 1, 8, "blue", [], {});
		var b3 = new GIDGET.Thing(world, "crack", 2, 8, "blue", [], {});
		var b4 = new GIDGET.Thing(world, "crack", 2, 9, "blue", [], {});
		
		
		b1.setCode(
			"when gidget on crack, grab goops\n" // Tsk tsk, Gidget, you shouldn't be on crack.
		);
		b2.setCode(
			"when gidget on crack, grab goops\n"
		);
		b3.setCode(
			"when gidget on crack, grab goops\n"
		);
		b4.setCode(
			"when gidget on crack, grab goops\n"
		);
		

		var wall;
		wall = new GIDGET.Thing(world, "tree01", 5, 1, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 2, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 4, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 6, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 8, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 6, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		
		// -----------------------
		
		return world;
	
	},

	// *******************************************************
	
	learnAvoidActive: function() { 

		// ----- G - C O D E -----
	
		var code = 
			"scan rat\n" +
			"goto rat avoid bird, grab it\n" +
			"scan crate, goto it avoid bird";

		var world = new GIDGET.World([10], [5,4], ["dirt","burlywood", 0], code);
		world.gidget.setEnergy(90);
			
		// ---- G O A L S --------
		
		world.addGoal("bird on crate");
		world.addGoal("goop on bucket");
		
		// ---- T I T L E --------
		
		if (GIDGET.experiment.isControl())
			world.addTitle("Navigating Active Obstacles");
		else
			world.addTitle("Avoiding Active Obstacles with Gidget");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("default", "[INFECTED RAT DETECTED] avoid the rat to get the goop and bird back to the bucket and crate. Touching rat will deplete energy.");
		}		
		else {
			world.addMissionText("sad", "It looks like there's a mean rat that is trying to prevent us from helping the injured bird!");
			world.addMissionText("sad", "Please help me rescue the bird and clean up the goop while avoiding that rat! Touching the rat will drain my energy!");	

		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 2, 1, "gray", [], {});
		new GIDGET.Thing(world, "crate", 2, 2, "Chocolate", [], {});
		new GIDGET.Thing(world, "goop", 9, 1, "orange", [], {});
		new GIDGET.Thing(world, "bird", 1, 9, "orange", [], {});
		var rat = new GIDGET.Thing(world, "rat", 8, 8, "yellow", [], {});
		
		wall = new GIDGET.Thing(world, "tree01", 0, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 1, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 2, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 3, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 4, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 6, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 7, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 8, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		
		wall = new GIDGET.Thing(world, "tree01", 1, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 2, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 3, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 4, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 6, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 7, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 8, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;

		//wall = new GIDGET.Thing(world, "tree01", 1, 5, "black", [], {});
		//wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 2, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 3, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 4, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 6, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 7, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 8, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;


		if (GIDGET.experiment.isControl()) {
			rat.setCode(
				"say Squeek squeek!\n" + 
				"when gidget on rat, set gidget energy 0\n" +
				"scan gidget\n" +
				"goto gidget\n"
			);
		}
		else {
			rat.setCode(
				"say Yum! I want to munch on your tasty wires to take all your energy!\n" + 
				"when gidget on rat, set gidget energy 0\n" +
				"scan gidget\n" +
				"goto gidget\n"
			);		}
		
		
		rat.setSpeed(3);

		// -----------------------
		
		return world;
		
	},

	// *******************************************************
	
	apiCar: function() {

		// ----- G - C O D E -----
	
		var code =
			"scan puppy\n" +
			"analyze puppy\n" +
			"scan battery\n" +
			"ask puppy to transport gidget battery\n" +
			"analyze dog\n" +
			"ask dog to powerize gidget\n" +
			"goto bucket\n" +
			"drop goops";
	
		var world = new GIDGET.World([10,10], [1,8], ["dirt","burlywood", 0], code);
		world.gidget.setEnergy(30);
	
		// ---- G O A L S --------
		
		world.addGoal("three goops on bucket");
		
		// ---- T I T L E --------
		
		if (GIDGET.experiment.isControl())
			world.addTitle("Low on Energy");
		else
			world.addTitle("Gidget's Low on Energy");
		
		// ---- M I S S I O N ----		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("default", "[Energy level low] <b>Analyze</b> nearby animal to enlist aid and reach battery for recharge. Clean up goops.");
		}		
		else {
			world.addMissionText("sad", "Oh no, I don't have much energy but I've got to collect the goops here!");
			world.addMissionText("sad", "I think I detect a battery nearby, but I can't reach it. What can I do? Maybe I can see if that dog can help if I <b>analyze</b> it?");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 9, 0, "rgb(250,255,255)", [], {});
		new GIDGET.Thing(world, "goop", 2, 2, "rgb(250,255,255)", [ 'contaminated'], {});
		new GIDGET.Thing(world, "goop", 9, 5, "rgb(250,255,255)", [ 'contaminated'], {});
		new GIDGET.Thing(world, "goop", 4, 7, "rgb(250,0,0)", [], {});
		new GIDGET.Thing(world, "battery", 9, 1, "yellow", [], 
			{ 
			energize : new GIDGET.Action([ "beneficiary" ],
				"raise beneficiary energy 100"
				)
			}
		);
		var dog = new GIDGET.Thing(world, "dog", 3, 9, "brown", [ 'helpful' ],{
			carry : new GIDGET.Action([ "passenger", "destination" ],
				"scan passenger\n" +
				"goto passenger\n" +
				"analyze passenger\n" +
				"grab passenger\n" +
				"scan destination\n" +
				"goto destination\n" +
				"drop passenger"
				)
			}
		);
		dog.setCode(
			"say I'll help you Gidget!"
		);
		
		// -----------------------

		return world;
		
	},	

	// *******************************************************
	// Use button to lower door/walls to get into the factory!
	// Perhaps change this to look more like the intro, and flip it vertically
	// so that Gidget is going up, into the factory.
	apiButton: function() {
	
		// ----- G - C O D E -----
	
		var code = 
			"scan button, goto bucket,\n" +
			"ask button\n" +
			"scan goop, grab it\n" +
			"goto bucket, drop goop";
		
		var world = new GIDGET.World([7], [1,5], ["dirt","burlywood", 0], code);
		world.gidget.setEnergy(50);
			
		// ---- G O A L S --------
		
		world.addGoal("goop on bucket");
		
		// ---- T I T L E --------
		
		if (GIDGET.experiment.isControl())
			world.addTitle("Factory Infiltration");
		else
			world.addTitle("Entering the Factory with Gidget");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("default", "[ARRIVED AT DESTINATION: GOOP FACTORY] Proceed to find way to get past barrier.");
		}		
		else {
			world.addMissionText("default", "I finally made it to the goop factory but it looks like there's a gate blocking my way!");
			world.addMissionText("sad", "I'm sure there's an obvious way to get in, but I can't seem to figure it out!");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 6, "rgb(0,0,0)", ["stone","gray"], {});
		new GIDGET.Thing(world, "button", 2, 1, "red", [],
			{ 
				lower : new GIDGET.Action([],
				"lower gate02 height"
				)
			}
		);


		new GIDGET.Thing(world, "goop", 6, 6, "green", [], {});
		
		var wall;
		wall = new GIDGET.Thing(world, "gate01", 5, 0, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "gate01", 5, 1, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "gate01", 5, 2, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "gate02", 5, 3, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "gate01", 5, 4, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "gate01", 5, 5, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "gate01", 5, 6, "black", [], {}); wall.setLevel(2); wall.labeled = false;


		// -----------------------	

		return world;
	
	},
	

	// *******************************************************
	// Use a blender to combine plans and parts to make a new battery for Gidget!
	apiBlending: function() {

		// ----- G - C O D E -----
	
		var code = 
			"scan blueprit\n" +
			"scan parts\n" +
			"san blender\n" +
			"goto blender analyze it\n" +
			"ask blender to mix goop battery\n" +
			"analyze battery, grab it";
				
		var world = new GIDGET.World([7], [1,5], ["stone","gray", 1], code);
		world.gidget.setEnergy(75);
	
		// ---- G O A L S --------
		
		world.addGoal("battery on gidget");
		world.addGoal("gidget on bucket");
		
		// ---- T I T L E --------
		
		if (GIDGET.experiment.isControl())
			world.addTitle("New Power Source");
		else
			world.addTitle("Energizing Gidget");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "[BATTERY FAILING] Proceed to find or create another source of power.");
		}		
		else {
			world.addMissionText("sad", "Oh no! My battery is going to fail soon!");
			world.addMissionText("sad", "Maybe I can scrounge up some parts to make myself a battery pack! Sounds complicated though...");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 6, "rgb(250,255,255)", [], {});
		new GIDGET.Thing(world, "blueprint", 3, 3, "rgb(250,255,255)", [ 'blue' ], {});
		new GIDGET.Thing(world, "parts", 5, 6, "rgb(250,255,255)", [ 'tangled'], {});
		new GIDGET.Thing(world, "blender", 6, 1, "gray", {},
			{ 
			combine : new GIDGET.Action([ "item1" , "item2" ], 
				"if item1 is blue and item2 is tangled, remove item1, remove item2, add battery\n" +
				"if item1 is tangled and item2 is blue, remove item1, remove item2, add battery"
				//"if item1 and item1 is tangled and if item2 and item2 is blue, remove item1, remove item2, add battery"
				)
			}
		);
		
		// -----------------------

		return world;
		
	},
	
	// *******************************************************
	// 13
	apiButtonSequence: function() {
	
		// ----- G - C O D E -----
	
		var code = 
			"go to button, analyze it\n" +
			"ask button to move\n" +	
			"scan goops\n" +
			"goto goops, grab it\n" +
			"goto button\n" +
			"ask buttn to move";
		
		var world = new GIDGET.World([7], [1,5], ["stone","gray"], code);
		world.gidget.setEnergy(250);
			
		// ---- G O A L S --------
		
		world.addGoal("three goops on bucket");
		
		// ---- T I T L E --------
		
		if (GIDGET.experiment.isControl())
			world.addTitle("Sequenced Actions");
		else
			world.addTitle("Sequenced Actions with Gidget");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("default", "[MULTIFUNCTION BUTTON DETECTED] <b>Analyze</b> and <b>ask</b> button to change height of walls.");
		}		
		else {
			world.addMissionText("sad", "The button here looks like it can change the height of the different sets of walls in two ways.");
			world.addMissionText("sad", "We should <b>analyze</b> the button to make sure we know how how to <b>ask</b> it to work!");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 6, "rgb(0,0,0)", ["stone","gray"], {});
		new GIDGET.Thing(world, "button", 3, 0, "red", [],
			{ 
			lower : new GIDGET.Action([],
				"lower wall1 height\n" +
				"raise wall2 height"
				),
			raise : new GIDGET.Action([],
				"raise wall1 height\n" +
				"lower wall2 height"
				)
			
			}
		);
		
		new GIDGET.Thing(world, "goop", 6, 4, "green", [], {});
		new GIDGET.Thing(world, "goop", 6, 5, "green", [], {});
		new GIDGET.Thing(world, "goop", 6, 6, "green", [], {});

		var wall;
		wall = new GIDGET.Thing(world, "wall1", 2, 0, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 1, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 2, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 3, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 4, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 5, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 6, "black", [], {}); wall.labeled = false;

		wall = new GIDGET.Thing(world, "wall2", 5, 0, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 1, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 2, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 3, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 4, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 5, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 6, "black", [], {}); wall.setLevel(2); wall.labeled = false;


		// -----------------------	

		return world;
	
	},
	
	
	// *******************************************************
	// Gidget has to grab the bird before the rat does (otherwise it gets "eaten" and removed from the map)
	//14
	getBeforeRat: function() {
	
		// ----- G - C O D E -----
	
		var code = 
			"scan rat\n" +
			"scam bucket\n" +
			"scan goop\n" +
			"scan bird\n" +
			"goto goop, grab it\n" +
			"scan bucket, goto it avoid rat, drop goops\n" +
			"goto bird, grab it";
			
		
		var world = new GIDGET.World([7], [1,5], ["stone","gray"], code);
		world.gidget.setEnergy(250);
			
		// ---- G O A L S --------
		
		world.addGoal("goop on bucket");
		world.addGoal("bird on crate");
		
		// ---- T I T L E --------
		
		if (GIDGET.experiment.isControl())
			world.addTitle("Quick Retrieval");
		else
			world.addTitle("Quick Retrieval with Gidget");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("default", "[BATTERY PACK FUNCTIONAL] Proceed to collect goops and find a way to stop production.");
		}		
		else {
			world.addMissionText("default", "Yay! My battery pack seems to be working great!");
			world.addMissionText("sad", "So this building is where the goops are coming from!");
			world.addMissionText("sad", "I'll continue to collect goops in my bucket and find a way to stop more goops from coming out!");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 6, 5, "rgb(0,0,0)", ["stone","gray"], {});
		new GIDGET.Thing(world, "crate", 6, 1, "Chocolate", [], {});
		new GIDGET.Thing(world, "goop", 3, 1, "green", [], {});
		var bird = new GIDGET.Thing(world, "bird", 3, 6, "red", [ 'scared' ], {});
		
		var rat = new GIDGET.Thing(world, "rat", 0, 0, "black", [ 'hungry' ], {});
		
		if (GIDGET.experiment.isControl()) {
			rat.setCode(
				"say ...b..i..r..d.....\n" +
				"when gidget on rat, set gidget energy 0\n" +
				"scan bird, goto bird\n" +
				"when rat on bird, remove bird\n" +
				"scan gidget, goto gidget\n" +
				"when gidget on rat, set gidget energy 0"
			);
		}
		else {
			rat.setCode(
				"say That bird looks tasty! I'm going to eat him before you can save him Gidget!\n" +
				"when gidget on rat, set gidget energy 0\n" +
				"scan bird, goto bird\n" +
				"when rat on bird, remove bird\n" +
				"scan gidget, goto gidget\n" +
				"when gidget on rat, set gidget energy 0"
			);			
		}
		
		rat.setSpeed(4);
		
		
		// -----------------------	

		return world;
	
	},	
	
	
	
	// *******************************************************
	/*
	chaseDog: function() {
	// Gidget has to catch the dog that's running away.
	
	
		// ----- G - C O D E -----
	
		var code = 
			"scan dog, goto it, grab it\n";
		
		var world = new GIDGET.World([10], [9,9], ["stone","gray"], code);
			
		// ---- G O A L S --------
		
		world.addGoal("grabbed dog");
		
		// ---- T I T L E --------
		
		world.addTitle("Level 15");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("default", "[BATTERY PACK FUNCTIONAL] Proceed to collect goops and find a way to stop production.");
		}		
		else {
			world.addMissionText("default", "Yay! My battery pack seems to be working great!");
			world.addMissionText("sad", "So this building is where the goops are coming from!");
			world.addMissionText("sad", "I'll continue to collect goops in my bucket and find a way to stop more goops!");
		}
		
		// ----- T H I N G S -----
		
		var hidden;
		hidden = new GIDGET.Thing(world, "hidden", 9, 0, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 0, 9, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 9, 9, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		
		
		hidden = new GIDGET.Thing(world, "hidden", 1, 0, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 9, 8, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 0, 8, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 9, 1, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 0, 2, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 9, 2, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 1, 2, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 8, 8, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 7, 0, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 2, 8, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 0, 0, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		
		new GIDGET.Thing(world, "bucket", 6, 5, "rgb(0,0,0)", ["stone","gray"], {});
		new GIDGET.Thing(world, "crate", 6, 4, "Chocolate", [], {});
		new GIDGET.Thing(world, "goop", 3, 1, "green", [], {});
		
		var dog = new GIDGET.Thing(world, "dog", 0, 0, "black", [ 'paranoid' ], {});
		
		dog.setCode(
			//"scan gidget\n"+
			"scan hiddens, goto hiddens avoid gidget"
		);
		
		dog.setSpeed(0);
		
		
		// -----------------------	

		return world;
	
	},	
	
	*/
		
	// *******************************************************
	
	shutDownFactory: function() {
	// final
		// ----- G - C O D E -----
	
		var code = 
			"scan goops\n" +
			"goto goops, analyze it, grab it\n" +
			"scan scrubber, goto it, analyze it\n" +
			"ask scrubber to rinse goop\n" +
			"analyze plug, grab it\n" +
			"scan hole, goto it, drop plug\n" +
			"scan bird, goto bird, grab it\n" +
			"scan bucket, goto it, drop bird";
		
		var world = new GIDGET.World([10,10], [2,8], ["stone","gray"], code);
		world.gidget.setEnergy(1000);
			
		// ---- G O A L S --------
		
		world.addGoal("plug on hole");
		world.addGoal("bird on bucket");
				
		// ---- T I T L E --------
		
		if (GIDGET.experiment.isControl())
			world.addTitle("Factory Shutdown");
		else
			world.addTitle("Shutting Down the Factory with Gidget");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "");
		}
		
		// ----- T H I N G S -----
		new GIDGET.Thing(world, "goop", 1, 1, "green", [ 'glowing' ], {});
		new GIDGET.Thing(world, "bird", 9, 9, "black", [], {});		
		new GIDGET.Thing(world, "bucket", 2, 2, "rgb(0,0,0)", ["stone","gray"], {});
		
		new GIDGET.Thing(world, "button", 5, 8, "red", [],
			{ 
			lower : new GIDGET.Action([],
				"lower wall1 height\n" +
				"raise wall2 height"
				),
			raise : new GIDGET.Action([],
				"raise wall1 height\n" +
				"lower wall2 height"
				)
			
			}
		);

		var hole = new GIDGET.Thing(world, "hole", 4, 0, "black", [], {});
		hole.setCode(
			"when plug on hole, lower wall2 height\n"
		);

		var wall;
		wall = new GIDGET.Thing(world, "wall2", 8, 0, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 1, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 2, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 3, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 4, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 5, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 6, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 7, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 8, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 9, "black", [], {}); wall.setLevel(2); wall.labeled = false;


		new GIDGET.Thing(world, "scrubber", 6, 1, "gray", {},
			{ 
			rinse : new GIDGET.Action([ "item" ], 
				"if item is glowing, remove item, add plug"
				)
			}
		);
		
		// -----------------------	

		return world;
	
	},
	
};