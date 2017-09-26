var clickedTime; /* records time on creation */ var createdTime = Date.now(); var reactionTime; 
var color;
var new_top = 0; var new_left = 0;
var totalTime = 0; var averageTime = 0; var counter;

window.onload = function(){
	document.getElementById("gameMessage").onclick = function () {
		document.getElementById("gameMessage").style.display = "none";
		totalTime = 0;
		counter = 0;
		document.getElementById("time").innerHTML = "0";
		document.getElementById("tries").innerHTML = counter;
		document.getElementById("average").innerHTML = "0";
		makeShape();
	}
	disappear("shape");
};

function disappear (id) {
	document.getElementById(id).onclick = function () {
		// console.log("disappear: "+id);
		// records time on click
		clickedTime = Date.now();
		// calculates reaction time through the difference between creation time and clicked time
		reactionTime = (clickedTime - createdTime)/1000;
		// display reaction time
		document.getElementById("time").innerHTML = reactionTime;
		// increment counter and caluclate average time
		totalTime += reactionTime;
		counter++;
		document.getElementById("tries").innerHTML = counter;
		averageTime = totalTime/counter
		// limit average time to 3 decimals
		averageTime = averageTime.toFixed(3);
		document.getElementById("average").innerHTML = averageTime;
		// hide element
		this.style.display = "none";
		makeShape();
	}
}

function makeShape () {
	if (counter == 6) {
		document.getElementById("gameMessage").innerHTML="You scored an average time of " + averageTime + "s, click to play again";
		document.getElementById("gameMessage").style.display = "block";
	} else {
		// random amount of time between 2 seconds to 6
		var time = Math.random()*3000 + 1000;
		
		// time out for /time/ milliseconds
		setTimeout(function() {
			
			if ((rand=Math.round(Math.random())) == 1) {
				document.getElementById("shape").style.borderRadius="50%";
			} else {
				document.getElementById("shape").style.borderRadius="0";
			}
			console.log(rand);	
			
			new_top = Math.random()*300;
			new_left = Math.random()*500;
			document.getElementById("shape").style.top = new_top+"px";
			document.getElementById("shape").style.left = new_left+"px";
			console.log(new_top + ", " + new_left);	
			
			color =  newColor();
			document.getElementById("shape").style.backgroundColor = color;
			
			document.getElementById("shape").style.display = "block";
			createdTime = Date.now();
		}, time);
	}
}

// function from Stack Exchange
function newColor () {
	var letters = '0123456789ABCDEF'.split('');
	var rand_color = "#";
	do {
		for (var i = 0; i < 6; i++) {
			rand_color += letters[Math.round(Math.random()*15)];
		}
	} while(rand_color == "#FFFFFF");
	console.log(rand_color);
	return rand_color;
}

function newShape () {
	// new shape array containing all the possible shapes
	var shapes = ["square", "circle"];
	// return the shape of a random index in the array
	return shapes[Math.round(Math.random())];
}