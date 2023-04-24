/*PROVIDING LIST MARK-UP TO THE SOCIAL MEDIA LINKS*/
//Adding role="list" attribute on the container element of all listitems
document.querySelector("div.footer > div.social-media-links > div, footer > div.social-media-links > div").setAttribute("role", "list");

let listitems = document.querySelectorAll("div.footer > div.social-media-links > div div, footer > div.social-media-links > div div");

//Adding role="listitem" attribute on the listitem elements
for (let i=0; i<listitems.length; i++) {
	listitems[i].setAttribute("role", "listitem");
}
/*
/*FIXING LINK RELATED ISSUES ON FOOTER*\/
//Adding 'href' attribute on C&B link
document.querySelector("div.footer > div.copywrite > a, footer > div.copywrite > a").setAttribute("href", "#");

//Adding role="link" and tabindex="0" attributes on custom links
let lnk = document.querySelectorAll("footer .link, .footer .link");

for (let i=0; i<lnk.length; i++) {
	lnk[i].setAttribute("role", "link");
	lnk[i].setAttribute("tabindex", "0");
}
*/