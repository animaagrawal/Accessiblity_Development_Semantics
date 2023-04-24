/*Adding a click event on "Clear Search" button and then placing Keyboard focus on search field*/

document.querySelector("#ClearSearchButton").addEventListener("click", function () {
	document.querySelector("#searchfield").focus();
});
