//For footer section
let lnks = document.querySelectorAll("footer > div.copywrite > a, footer .link, .footer > div.copywrite > a, .footer .link");

for (let i=0; i<lnks.length; i++) {
	lnks[i].addEventListener("click", function () {
		alert("Your request can not be processed at the moment. Please try after sometime");
	});
}