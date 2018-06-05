/////////////////
// for balcony //
/////////////////

var mezzanine = document.getElementById('mezzanine');
var projection = document.getElementById('projection');

var allSection = ["#default-text-show", "#mezzanine-text-show", "#projection-text-show"];

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

mezzanine.onclick = function() {
	$('#mezzanine-text-show').attr('style', 'display: block');
	hideAllExcept(allSection[1]);
}
projection.onclick = function() {
	$('#projection-text-show').attr('style', 'display: block');
	hideAllExcept(allSection[2]);
}