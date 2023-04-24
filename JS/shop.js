let e = document.querySelectorAll("span.addtobag");

for (let i=0; i<e.length; i++) {
	e[i].addEventListener("click", function () {
		alert("Error while adding element to cart. Please try later.");
	});
}