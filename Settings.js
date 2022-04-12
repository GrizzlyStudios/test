// JavaScript Document
document.addEventListener('DOMContentLoaded',() => {
    // handle DOMContentLoaded event
	loadTheme();
});
window.addEventListener('load', function () {
  document.getElementById("loading").style.transform = 	"translate(-50%, -150%)";
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
	var themeSave = 
	{
		background: "#fff222"
	}
	localStorage.setItem("themeSave", JSON.stringify(themeSave));
	loadTheme();
}
