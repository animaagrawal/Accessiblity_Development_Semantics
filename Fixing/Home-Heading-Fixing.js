
//Adding heading mark-up to "Coffee & Books" text by adding role="heading" and aria-level attributes
document.querySelector("body > header > div.brand > strong").setAttribute("role", "heading");
document.querySelector("body > header > div.brand > strong").setAttribute("aria-level", "1");

//Removing heading mark-up from "-Team C&B" text by adding role="none"
document.querySelector("body > main > h5").setAttribute("role", "none");
