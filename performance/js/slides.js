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