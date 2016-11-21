// tabs
	function openscreen(evt, screenname) {
	
	var i, tabLink, screen;
	
		//get all hidden
			screen = document.getElementsByClassName("screen");
			for (var i = 0; i < screen.length; i++) {
				screen[i].style.display = "none"; }
		
		//get active removed
			tabLink = document.getElementsByClassName("tabLink");
			for (var i = 0; i < tabLink.length; i++) {
			 	tabLink[i].className = tabLink[i].className.replace (" active", "");}
		
		//make visible
			document.getElementById(screenname).style.display = "block"; 
			evt.currentTarget.className += " active"; }
	
		// auto click on but-2
			document.getElementById("but-2").click();


//restard
	function restart() { 
		location.reload();}

//typewrighter
	//verhaal
	var story = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 	fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	
	//zorgt ervoor dat het gesplistst word 
	var cut = story.split('');
	var Count = 0;

	//het typewrighter effect
	setInterval(function(){ 
		if (Count < cut.length) { 
			document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + cut[Count]};
			Count ++;} ,50);

