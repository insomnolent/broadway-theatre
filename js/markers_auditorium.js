////////////////////
// for auditorium //
////////////////////

var stage = document.getElementById('the-stage-text');
var aud = document.getElementById('auditorium-text');
var foyer = document.getElementById('foyer-text');
var marquise = document.getElementById('marquise-text');

var allSection = ["#default-text-show", "#stage-text-show", "#auditorium-text-show", "#foyer-text-show", "#marquise-text-show"];

// initially hide all descriptions except for 'click the highlighted section'
for (i = 0; i < allSection.length; i++) {
	var section = allSection[i];
	if (section != "#default-text-show") {
		$(`${section}`).attr('style', 'display: none');
	}
}

// hide all other descriptions except for one that was just clicked
function hideAllExcept(showID) {
	for (i = 0; i < allSection.length; i++) {
		if (allSection[i] != showID) {
			var section = allSection[i];
			$(`${section}`).attr('style', 'display: none');
		}
	}
}

stage.onclick = function() {
	$('#stage-text-show').attr('style', 'display: block');
	hideAllExcept(allSection[1]);
}
aud.onclick = function() {
	$('#auditorium-text-show').attr('style', 'display: block');
	hideAllExcept(allSection[2]);
}
foyer.onclick = function() {
	$('#foyer-text-show').attr('style', 'display: block');
	hideAllExcept(allSection[3]);
}
marquise.onclick = function() {
	$('#marquise-text-show').attr('style', 'display: block');
	hideAllExcept(allSection[4]);
}



////////////////////////
// from previous code //
////////////////////////

// var audience = document.getElementById('audience-text');
// var fountain = document.getElementById('fountain-text');
// var stairs = document.getElementById('stairs-text');
// var foyer = document.getElementById('foyer-text');
// var tickets = document.getElementById('tickets-text');
// var marquise = document.getElementById('marquise-text');

// var whole_map = document.getElementById('Map');

// // all sections for auditorium
// var allSection = ["#stage-text-show", "#audience-text-show", "#fountain-text-show", "#stairs-text-show", "#foyer-text-show", "#tickets-text-show", "#marquise-text-show"];

// // initially hide all descriptions
// for (i = 0; i < allSection.length; i++) {
// 	var section = allSection[i];
// 	$(`${section}`).attr('style', 'display: none');
// }

// // hide all other descriptions except for one that was just clicked
// function hideAllExcept(showID) {
// 	for (i = 0; i < allSection.length; i++) {
// 		if (allSection[i] != showID) {
// 			var section = allSection[i];
// 			$(`${section}`).attr('style', 'display: none');
// 		}
// 	}
// }

// stage.onclick = function() {
// 	$('#stage-text-show').attr('style', 'display: block');
// 	hideAllExcept(allSection[0]);
// }
// audience.onclick = function() {
// 	$('#audience-text-show').attr('style', 'display: block');
// 	hideAllExcept(allSection[1]);
// }
// fountain.onclick = function() {
// 	$('#fountain-text-show').attr('style', 'display: block');
// 	hideAllExcept(allSection[2]);
// }
// stairs.onclick = function() {
// 	$('#stairs-text-show').attr('style', 'display: block');
// 	hideAllExcept(allSection[3]);
// }
// foyer.onclick = function() {
// 	$('#foyer-text-show').attr('style', 'display: block');
// 	hideAllExcept(allSection[4]);
// }
// tickets.onclick = function() {
// 	$('#tickets-text-show').attr('style', 'display: block');
// 	hideAllExcept(allSection[5]);
// }
// marquise.onclick = function() {
// 	$('#marquise-text-show').attr('style', 'display: block');
// 	hideAllExcept(allSection[6]);
// }


// old dumb way of writing code

// stage.onclick = function() {
// 	$("#text-show").text('this is the stage');

// 	var pic1 = document.createElement("img");
// 	var pic2 = document.createElement("img");
// 	pic1.src = 'img/floor_plan_boxes.png';
// 	pic2.src = 'img/floor_plan.png';
// 	pic1.setAttribute("style", "border: 2px solid blue; width: 200px;");
// 	pic2.setAttribute("style", "border: 2px solid blue; width: 200px;");
// 	$("#text-show").append(pic1);
// 	$("#text-show").append(pic2);
// }
// audience.onclick = function() {
// 	$("#text-show").text('audience sits here');
// }
// fountain.onclick = function() {
// 	$("#text-show").text('this is a crystal fountain');
// }
// stairs.onclick = function() {
// 	$("#text-show").text('go up the stairs');
// }
// foyer.onclick = function() {
// 	$("#text-show").text('FOYER');
// }
// tickets.onclick = function() {
// 	$("#text-show").text('a ticketing booth');
// }
// marquise.onclick = function() {
// 	$("#text-show").text("what's a marquise");
// }