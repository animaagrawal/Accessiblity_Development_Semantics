//Getting reference of all product images
let images = document.querySelectorAll("img");

//Looping through all book images and adding alt
for (let i=0; i<images.length; i++) {
	let bookName = images[i].parentNode.querySelector("h3").innerText;
	images[i].setAttribute("alt", bookName);
}
