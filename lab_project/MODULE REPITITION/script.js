// var -> OLD WAY 

// let -> let is better 

// const -> can't change once you write const 


var myRoot = document.getElementById("diamond");


for (let i = 0; i < 50; i++) {

    // let style = 'background-color: rgb(${i}, 100, 100);';

    var firstVariable = 'background-color:red;'
    var secondVariable = 'background-color:blue;'
    var thirdVariable = 'background-color:red;'



    let style =`background-color: #FFB11B;`

    let myModule = `
    	<div class ="parent2">
		<div class="children2" style=${firstVariable}></div>
		<div class="children2" style=${firstVariable}></div>
		<div class="children2" style=${firstVariable}></div>
		<div class="children2" style=${firstVariable}></div>
		<div class="children2" style=${firstVariable}></div>
		</div>

		<div class ="parent3">
		<div class="children3" style=${secondVariable}></div>
		<div class="children3" style=${secondVariable}></div>
		<div class="children3" style=${secondVariable}></div>
		<div class="children3" style=${secondVariable}></div>
		<div class="children3" style=${secondVariable}></div>
		</div>
		`;

    myRoot.insertAdjacentHTML('beforeend', myModule)
}




// let rootDiv = document.getElementById('shapes')

// for(let i=0; i<50; i++){
	
// 	let style = `
// 	background-color: rgb(${i}, 100, 100);
// 	width: 5rem;
// 	height: 5rem;
// 	border-radius: 100%;
// 	`

// 	let element = `
// 		<div id="square" style="${style}">
// 		</div>`

// 	rootDiv.innerHTML += element;
// }


	// <div class="myClass" style="${ style }">
 //            <div class="diagonalLine" style="${ style }"></div>
 //            <div class="oval" style="${ style }"></div>
 //        </div>