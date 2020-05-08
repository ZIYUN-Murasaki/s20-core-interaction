function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
		if(timer < 0) return;
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (timer === 300) {
			showContainer1() ;
		} else if (timer === 240) {
			showContainer2() ;
		} else if (timer === 180) {
			showContainer3() ;
		} else if (timer === 120) {
			showContainer4() ;
		} else if (timer === 60) {
			showContainer5() ;
		} else if (timer === 0) {
			showContainer6() ;
		}
        console.log(timer);
		timer--;
    }, 1000);
}

function showContainer1() {
	document.querySelector(".container1").style.visibility = 'visible';
	document.querySelector(".container2").style.visibility = 'hidden';
	document.querySelector(".container3").style.visibility = 'hidden';
	document.querySelector(".container4").style.visibility = 'hidden';
	document.querySelector(".container5").style.visibility = 'hidden';
	document.querySelector(".container6").style.visibility = 'hidden';
}

function showContainer2() {
	document.querySelector(".container1").style.visibility = 'hidden';
	document.querySelector(".container2").style.visibility = 'visible';
	document.querySelector(".container3").style.visibility = 'hidden';
	document.querySelector(".container4").style.visibility = 'hidden';
	document.querySelector(".container5").style.visibility = 'hidden';
	document.querySelector(".container6").style.visibility = 'hidden';
}

function showContainer3() {
	document.querySelector(".container1").style.visibility = 'hidden';
	document.querySelector(".container2").style.visibility = 'hidden';
	document.querySelector(".container3").style.visibility = 'visible';
	document.querySelector(".container4").style.visibility = 'hidden';
	document.querySelector(".container5").style.visibility = 'hidden';
	document.querySelector(".container6").style.visibility = 'hidden';
}

function showContainer4() {
	document.querySelector(".container1").style.visibility = 'hidden';
	document.querySelector(".container2").style.visibility = 'hidden';
	document.querySelector(".container3").style.visibility = 'hidden';
	document.querySelector(".container4").style.visibility = 'visible';
	document.querySelector(".container5").style.visibility = 'hidden';
	document.querySelector(".container6").style.visibility = 'hidden';
}

function showContainer5() {
	document.querySelector(".container1").style.visibility = 'hidden';
	document.querySelector(".container2").style.visibility = 'hidden';
	document.querySelector(".container3").style.visibility = 'hidden';
	document.querySelector(".container4").style.visibility = 'hidden';
	document.querySelector(".container5").style.visibility = 'visible';
	document.querySelector(".container6").style.visibility = 'hidden';
}

function showContainer6() {
	document.querySelector(".container1").style.visibility = 'hidden';
	document.querySelector(".container2").style.visibility = 'hidden';
	document.querySelector(".container3").style.visibility = 'hidden';
	document.querySelector(".container4").style.visibility = 'hidden';
	document.querySelector(".container5").style.visibility = 'hidden';
	document.querySelector(".container6").style.visibility = 'visible';
}
function hideAll() {
	document.querySelector(".container1").style.visibility = 'hidden';
	document.querySelector(".container2").style.visibility = 'hidden';
	document.querySelector(".container3").style.visibility = 'hidden';
	document.querySelector(".container4").style.visibility = 'hidden';
	document.querySelector(".container5").style.visibility = 'hidden';
	document.querySelector(".container6").style.visibility = 'hidden';
}


window.onload = function () {
	hideAll();
	var fiveMinutes = 300;
	//var fiveMinutes = 60 * 5;
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

// search Anime.js 
// Search Mo.js 
// search TweenMax
// Google SVG wavy text animation 


