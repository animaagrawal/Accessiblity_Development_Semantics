//Getting reference of all "Add to bag" buttons.
let el = document.querySelectorAll("span.addtobag");

//Looping through all "Add to bag" buttons and adding required role(s)/attribute(s)
for (let i=0; i<el.length; i++) {
	//Adding role="button" and tabindex="0" attributes
	el[i].setAttribute("role", "button");
	el[i].setAttribute("tabindex", "0");

	//Adding unique button label using aria-label
	let bookName = el[i].parentNode.querySelector("h3").innerText;
	let label = "Add To Bag - " + bookName;
	el[i].setAttribute("aria-label", label);
}
