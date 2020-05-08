// Set TimeOut
setTimeout(growPlant, 1000); 
// SetTimeout will only run once at the begining, wait for one second the run the next code
setInterval(growPlant, 1000);
// repeat the code for 1 second

const plant = document.getElementById('plant')
// Or const can only have one value (only be given a value once)

var plantHeight = 0;

function growPlant(){
	plantHeight = plantHeight + 0.5;
	// plantHeight ++
	// plantHeight += 1
	plant.style.height = plantHeight + "rem";
}
	
	


// /* happen after delay */
// setTimeout(function(){
// 	// anything in here happens after 1 second:
// 	plant.style.height ="solid 1rem red";

// })


// var roofHeight = 1;

// setInterval(function(){
// 	loft.style.borderTop = "solid " + roofHeight + "rem red";
// 	roofHeight = roofHeight + 1;
// }, 1000)