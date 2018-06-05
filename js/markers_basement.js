//////////////////
// for basement //
//////////////////

var music = document.getElementById('music');
var lounge = document.getElementById('lounge');
var toilet = document.getElementById('toilet');
var childrens = document.getElementById('childrens');

var allSection = ["#default-text-show", "#music-text-show", "#lounge-text-show", "#toilet-text-show", "#childrens-text-show"];

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

music.onclick = function() {
	$('#music-text-show').attr('style', 'display: block');
	hideAllExcept(allSection[1]);
}
lounge.onclick = function() {
	$('#lounge-text-show').attr('style', 'display: block');
	hideAllExcept(allSection[2]);
}
toilet.onclick = function() {
	$('#toilet-text-show').attr('style', 'display: block');
	hideAllExcept(allSection[3]);
}
childrens.onclick = function() {
	$('#childrens-text-show').attr('style', 'display: block');
	hideAllExcept(allSection[4]);
}
