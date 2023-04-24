//Creating two span elements
let spanElementForClearSearchButton = document.createElement("span");
let spanElementForSearchButton = document.createElement("span");

//Adding a 'Hidden' class on both span elements. 'Hidden' class is having "Display: none;" property
spanElementForClearSearchButton.classList.add("hidden");
spanElementForSearchButton.classList.add("hidden");

//Adding inner text to both span element
spanElementForClearSearchButton.innerText = "Clear Search";
spanElementForSearchButton.innerText = "Search";

//Appending both span element as the child element of respected buttons
document.querySelector("#ClearSearchButton").appendChild(spanElementForClearSearchButton);
document.querySelector("#SearchButton").appendChild(spanElementForSearchButton);
