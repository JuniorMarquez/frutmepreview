var $ = jQuery.noConflict(); 
$(document).ready(function () {
$("#frame").attr("src", "https://frutme.buckapi.com/");

});

if (screen.width <= 800) {
	window.location = "https://frutme.buckapi.com/";
}