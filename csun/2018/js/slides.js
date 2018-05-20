
// HANDLE ARROW KEYS FOR SLIDE NAVIGATION. RIGHT - NEXT. LEFT - PREVIOUS. UP - HOME.
document.onkeyup = KeyCheck;       
function KeyCheck(e)
{
	var KeyID = (window.event) ? event.keyCode : e.keyCode;

	switch(KeyID)
	{
		case 37:
			if (document.getElementById("prevlink")) {
				newpage=document.getElementById("prevlink").href;
				if (newpage != "") document.location = newpage;
			}
		break;

		case 39:
			if (document.getElementById("nextlink")) {
				newpage=document.getElementById("nextlink").href;
				if (newpage != "") document.location = newpage;
			}
		break;
		
		case 38:
			document.location = "index.html";
		break;
	}
}

/*



// Do all of this stuff after the page has loaded.
window.addEvent('domready', function(){

DD_roundies.addRule('#fish', '10px 0 0 0', true);
DD_roundies.addRule('#featured_story', '10px 0 10px 0', true);

// Remove 'click' for homepage headings
$$('.col h2 a').each(function(item){
	item.addEvent('click', function(e){
		e = new Event(e).stop();
	});
});

window.addEvent('keyup', function(event) {
	var event = new Event(event);
	if (event.code == 39) {
		if ($('next')) {
			newpage = $('next').getElement('a').getProperty('href');
			if (newpage != "") document.location = newpage;
		}
	}
	if (event.code == 37) {
		if ($('previous')) {
			newpage = $('previous').getElement('a').getProperty('href');
			document.location = newpage;
		}
	}
});


});
*/