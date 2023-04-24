document.querySelector("button[type='submit']").addEventListener("click", function() {
	performValidation();
});

function performValidation() {
	let fields = document.querySelectorAll("input, textarea");
	for (let i=0; i<fields.length; i++) {
		fieldValidation(fields[i], event);
	}
}

function fieldValidation(field, event) {
	let fieldData = field.value;
	let data = fieldData.trim();

	if (data.length == 0) {
		event.preventDefault();

		let fieldName = field.previousElementSibling.previousElementSibling.innerText;
		field.nextElementSibling.innerText = '"' + fieldName + '" field can not be blank';
	}
	if (data.length > 0) {
		field.nextElementSibling.innerText = "";
	}
}