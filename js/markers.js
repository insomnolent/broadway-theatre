var hover_stage = document.getElementById('the-stage-text');
var hover_audience = document.getElementById('audience-text');

var whole_map = document.getElementById('Map');

hover_stage.onmouseover = function() {
	$("#the-stage-text-show").text('this is the stage');
}
hover_stage.onmouseout = function() {
	$("#the-stage-text-show").text('default text');
}

hover_audience.onmouseover = function() {
	$("#the-stage-text-show").text('this is the audience');
}
hover_audience.onmouseout = function() {
	$("#the-stage-text-show").text('default text');
}