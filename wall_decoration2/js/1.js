var topt = document.getElementsByClassName('image');
var box = document.getElementsByClassName('box');
var x = window;
var y = document.documentElement.clientWidth;


x.onscroll = function () {
	
		if (window.pageYOffset > 200 && y > 1349) {
		//topt[0].classList.add("new");
		box[0].classList.add("new");
	} else {
		//topt[0].classList.remove("new");
		box[0].classList.remove("new");
	}

}