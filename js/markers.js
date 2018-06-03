var stage = document.getElementById('the-stage-text');
var audience = document.getElementById('audience-text');
var fountain = document.getElementById('fountain-text');
var stairs = document.getElementById('stairs-text');
var foyer = document.getElementById('foyer-text');
var tickets = document.getElementById('tickets-text');
var marquise = document.getElementById('marquise-text');

var whole_map = document.getElementById('Map');



stage.onclick = function() {
	$("#text-show").text('this is the stage');

	var pic1 = document.createElement("img");
	var pic2 = document.createElement("img");
	pic1.src = 'img/floor_plan_boxes.png';
	pic2.src = 'img/floor_plan.png';
	pic1.setAttribute("style", "border: 2px solid blue; width: 200px;");
	pic2.setAttribute("style", "border: 2px solid blue; width: 200px;");
	$("#text-show").append(pic1);
	$("#text-show").append(pic2);
}
audience.onclick = function() {
	$("#text-show").text('audience sits here');
}
fountain.onclick = function() {
	$("#text-show").text('this is a crystal fountain');
}
stairs.onclick = function() {
	$("#text-show").text('go up the stairs');
}
foyer.onclick = function() {
	$("#text-show").text('FOYER');
}
tickets.onclick = function() {
	$("#text-show").text('a ticketing booth');
}
marquise.onclick = function() {
	$("#text-show").text("what's a marquise");
}