if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
var viewportmeta = document.querySelectorAll('meta[name="viewport"]')[0];
if (viewportmeta) {
viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
document.body.addEventListener('gesturestart', function() {
viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
}, false);
}
}

//	Used to show and hide content using Javascript
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      	e.style.display = 'none';
//		e.setAttribute('aria-expanded',true);
   else
      	e.style.display = 'block';
//		e.setAttribute('aria-expanded',false);
}
function ARIA_HideShow(e) {
	// Get the current class either hidden or not_hidden
	var getvalue=document.getElementById("ARIA_content").getAttribute("class");
	if (getvalue=="not_hidden")
	{
		document.getElementById("myButton").setAttribute("aria-label","Collapsed. Click to expand.");	// Set the aria-label
		document.getElementById("ARIA_content").setAttribute("aria-expanded","false");	// Set the aria-expanded
		document.getElementById("ARIA_content").setAttribute("class","hide2");	// Set the Class to hide2
		document.getElementById("myButton").focus();	// Move Focus back to button
	} else {
		document.getElementById("myButton").setAttribute("aria-label","Expanded. Click to collapse.");	// Set the aria-label
		document.getElementById("ARIA_content").setAttribute("aria-expanded" , "true");		// Set the aria-expanded
		document.getElementById("ARIA_content").setAttribute("class","not_hidden");		// Set the Class to hidden
		document.getElementById("hTag").focus();	// Move Focus to content
	}
}