// JavaScript Document
// query string: ?lol=23
let lol = getParameterByName("lol");
document.getElementById("uwu").innerHTML = lol;
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
document.addEventListener('DOMContentLoaded',() => {
    // handle DOMContentLoaded event
	loadTheme();
});
window.addEventListener('load', function () {
  document.getElementById("loading").style.transform = 	"translate(-50%, -150%)";
	document.getElementById("loading").style.transition = 	"transform 2s";
})
let theme = "theme1";
let background = "#ffffff";
var root = document.querySelector(':root');

root.style.setProperty('--background', background);


function loadTheme(){
	var savedTheme = JSON.parse(localStorage.getItem("themeSave"))
	if (typeof savedTheme.background !== "undefined"){background = savedTheme.background}
	root.style.setProperty('--background', background);
}


function saveTheme()
{
	alert(uwu);
	var themeSave = 
	{
		background: "#fff222"
	}
	localStorage.setItem("themeSave", JSON.stringify(themeSave));
	loadTheme();
}
