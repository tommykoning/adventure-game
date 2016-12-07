// tabs
function openscreen(evt, screenname) {

	var i, tabLink, screen;

	//get all hidden
	screen = document.getElementsByClassName("screen");
	for (var i = 0; i < screen.length; i++) {
		screen[i].style.display = "none"; 
	}
	
	//get active removed
	tabLink = document.getElementsByClassName("tabLink");
	for (var i = 0; i < tabLink.length; i++) {
	 	tabLink[i].className = tabLink[i].className.replace (" active", "");
	 }
	
	//make visible
	document.getElementById(screenname).style.display = "block"; 
	evt.currentTarget.className += " active"; 
}

// auto click on but-2
document.getElementById("but-2").click();

//start game
function start() { 
	start = noop
	document.getElementById("but-1").click();
	document.getElementById("pic").src = "https://d.ibtimes.co.uk/en/full/1419300/empty-spaces-abandoned-places-johnny-joo-urbexus.jpg";
}


//restard
function restart() { 
	location.reload();
}

//typewrighter
//verhaal
var startgame = document.getElementsByClassName("startgame");

var story = '(year: 8102. month: may. day: 12.) i woke up my left eye hurts i see trough a faded light im trapped in a cell there is a lot of noice people yelling and screaming then i remember, i was a soldier in a prived militia we got a order to assasinate a govenour and "clean up" everything and everyone who could give any kind of information about what happend. my memory is hazy about what happend on the mission but i remember a child i dont know what happend to him/her/it but i assume we: ';

//zorgt ervoor dat het gesplistst word 
var cut = story.split('');
var count = 0;



//typewrighter effect
var time = 50;
function typewrighter() {
	setInterval (function (){ 
		if (count < cut.length) { 
			document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + cut[count]; 
			count ++ ;

			//skip
			function skip() {
				if (count < cut.length) {
					time = 5;
				}
			}
		}		
	} ,time);
}


//foto's vergroten/verkleinen (a.k.a modal image)
//vergrooten 
var img = document.getElementById("pic");

img.onclick = function(){
	document.getElementById("modal").style.display = "block"; 
	document.getElementById("foto-groot").src = this.src; 
};

//verkleinen
function verklein() { 
	document.getElementById("modal").style.display = "none"; 
}


//choices
var kies1 = 'test';
var count2 = 0;
var level = 1;
//keuzes verschijnen na dat typrwrichter klaar is 
setInterval ( function() {
	if (count == cut.length) {
		setInterval ( function() {
			if (count2 < level) {
				document.getElementById('menu1').innerHTML = document.getElementById('menu1').innerHTML + kies1;
				document.getElementById('menu2').innerHTML = document.getElementById('menu2').innerHTML + kies1;
				document.getElementById('menu3').innerHTML = document.getElementById('menu3').innerHTML + kies1;
				count2 ++;
			}
		}, time);
	}
 }, time);

//choice 1
document.getElementById('menu1').onclick = function() {
	story + kies1
}

//no operation on point (noop)
function noop() {};

