/*Code for labelling input fields*/

//Labelling using aria-label attribute
document.querySelector("#name").setAttribute("aria-label", "Name");

//Labelling using aria-labelledby attribute
document.querySelector("body > main > form > div:nth-child(2) > label").setAttribute("id", "label-ContactNo");
document.querySelector("#Contactno").setAttribute("aria-labelledby", "label-ContactNo");

//Labelling using 'for' and 'id' attributes
document.querySelector("body > main > form > div:nth-child(3) > label").setAttribute("for", "BookTitle");


/*Code for setting aria-live or role="alert" on the container elements of validation messages*/

let validationMessageContainer = document.querySelectorAll("div.formfield p");

for (let i=0; i<validationMessageContainer.length; i++) {
//	validationMessageContainer[i].setAttribute("role", "alert");
//	validationMessageContainer[i].setAttribute("aria-live", "polite");
	validationMessageContainer[i].setAttribute("aria-live", "assertive");
}


/*Code for providing grouping to checkboxes using role="group" and aria-label attributes*/

document.querySelector("body > main > form > div:nth-child(4)").setAttribute("role", "group");
document.querySelector("body > main > form > div:nth-child(4)").setAttribute("aria-label", "Book Genre");


/*Code for associating validation messages with input fields using aria-description attribute*/

function associateValidationMessage() {
	let validationMessageContainer = document.querySelectorAll("div.formfield p");

	for (let i=0; i<validationMessageContainer.length; i++) {
		let validationMessageText = validationMessageContainer[i].innerText;
		validationMessageContainer[i].previousElementSibling.setAttribute("aria-description", validationMessageText);
	}
}
associateValidationMessage();
document.querySelector("body > main > form > button").addEventListener("click", associateValidationMessage);
