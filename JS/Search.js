let e = document.querySelectorAll("span.addtobag");

for (let i=0; i<e.length; i++) {
	e[i].addEventListener("click", function () {
		alert("Error while adding element to cart. Please try later.");
	});
}

document.querySelector("#searchfield").addEventListener("input", function () {
	let fieldValue = document.querySelector("#searchfield").value;

	if (fieldValue.length > 0) {
		document.querySelector("#ClearSearchButton").removeAttribute("style");
	}
	if (fieldValue.length == 0) {
		document.querySelector("#ClearSearchButton").setAttribute("style", "display: none;");
	}
});

document.querySelector("#ClearSearchButton").addEventListener("click", function () {
	document.querySelector("#searchfield").value = "";
	document.querySelector("#ClearSearchButton").setAttribute("style", "display: none;");
});

document.querySelector("#SearchButton").addEventListener("click", function () {
	alert("Can not perform search at the moment. Please try later");
	document.querySelector("#SearchButton").focus();
});