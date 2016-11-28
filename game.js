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

//start game
	function start() { 
		document.getElementById("but-1").click()}


//restard
	function restart() { 
		location.reload();}

//typewrighter
	//verhaal
		var story = 'I had acquired the money to attend the finest school in Zinland but that was just the beginning. While I would love to say Zinkov Preparatory Academy embraced me with open arms, the truth of the matter is I was not the finest student. In order to gain admission, I had to endure rigorous physical and academic testing before they would grant me access to their legendary halls of learning. The first of those struggles were my parents. My father, a simple butcher, was a small man with a fierce temper. Of all the things I learned from my father, the one that sticks with me most has to be: ';
	
	//zorgt ervoor dat het gesplistst word 
		var cut = story.split('');
		var Count = 0;

	//het typewrighter effect
		setInterval(function(){ 
			if (Count < cut.length) { 
				document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + cut[Count] };
				Count ++;} ,50);

//foto's vergroten/verkleinen (a.k.a modal image)
	//vergrooten 
	var img = document.getElementById("pic");
	
	img.onclick = function(){
		document.getElementById("modal").style.display = "block"; 
		document.getElementById("foto-groot").src = this.src; };
	
//verkleinen
		function verklein() { 
			document.getElementById("modal").style.display = "none";
			console.log('sluiten'); }