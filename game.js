function openscreen(evt, screenname) {

var i, tabLink, screen;

	//get all hidden
	screen = document.getElementsByClassName("screen");
	for (var i = 0; i < screen.length; i++) {
		screen[i].style.display = "none"; }
	
	//get active removed
	tabLink = document.getElementsByClassName("tabLink");
	for (var i = 0; i < tabLink.length; i++) {
	 	tabLink[i].className = tabLink[i].className.replace ("active", "");
		}
	
	//make visible
	document.getElementById(screenname).style.display = "block"; 
	evt.currentTarget.className += "active";
	}

	// Get the element with id="defaultOpen" and click on it
	document.getElementById("but-2").click();

$('.screen').typewrite({
   'delay': 100, //time in ms between each letter
   'extra_char': '', //"cursor" character to append after each display
   'trim': true, // Trim the string to type (Default: false, does not trim)
});

 