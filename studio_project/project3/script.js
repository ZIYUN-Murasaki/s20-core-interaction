//add functionality here in the future to switch between cats
var currentCat = 1;

//variables to keep track of difference in mouse movement
var oldX = 0;
var oldY = 0;

window.addEventListener("click", changeCurrentCat);
window.addEventListener("mousemove", changeCatDirection);


function changeCatDirection(event) {
  //get current mouse movement
  var newX = event.clientX;
  var newY = event.clientY;

  //get the distance between newX/Y and oldX/Y
  var deltaX = newX - oldX;
  var deltaY = newY - oldY;

  //store final cat direction in this variable
  var direction;
  
  //see if the cursor's moving more horizontally or vertically
  if (Math.abs(deltaX) >= Math.abs(deltaY)) {
    //if moving horizontally, set direction to either left or right
    //if deltaX is positive (newX > oldX), go right, else, go left
    if (deltaX >= 0) {
      direction = "r";
    } else {
      direction = "l";
    }
  } else {
    //if moving vertically, set direction to either up or down
    //if deltaY is positive (newY > oldY), go downward, else, go upward
    if (deltaY >= 0) {
      direction = "d";
    } else {
      direction = "u";
    }
  }


  // console.log(direction);

  //determine which cat image to use based on direction
  var catImage = "cat-images/" + direction + "1/" + direction.toUpperCase() + currentCat + ".png";
  
  //sellect the cat-image element 
  var catImageContainer = document.getElementById("cat-image");

  catImageContainer.src = catImage;
  // console.log(catImage);

  // //set the cursor image to the cat image we want
  // Image can only be 100px X 100px
  // document.body.style.cursor = "url(" + catImage + "), auto";
  // console.log(document.body.style.cursor);


  //have cat image follow the cursor 
  catImageContainer.style.top = newY + "px";
  catImageContainer.style.left = newX + "px";

  //log current mouse movement as old mouse movement for next iteration
  oldX = newX;
  oldY = newY;

}
  
  function changeCurrentCat() {
    var maxCats = 20;

    if (currentCat < maxCats){
      currentCat +=1;
    } else if (currentCat >= maxCats){

       currentCat = 1;
    }


}


// catImage = document.getElementById("cat-image")

// body.addEventListener("click", function(){
//   catImage.style.transform = "translate(-50%,-50%), scale(0.8)"
// })

// body.addEventListener("click", function(){
//   catImage.style.transform = "translate(100%, -50%)"
// })


// var body = document.getElementById('body'),
//     colors = ['purple', 'yellow', 'orange', 'brown', 'black'];

//   body.onclick = function () {
//     var set = colors.slice(0);

//     (function loop(){
//         var color = set.shift();

//         box.style.backgroundColor = color;

//         if (set.length) {
//             setTimeout(loop, 1000);
//         }
//     })();
// };  


// document.body.style.backgroundColor = "red";
// console.log(document.body.style.backgroundColor); // red
// document.body.style.backgroundColor = "blue";
// console.log(document.body.style.backgroundColor); // blue



// window.addEventListener("click", changeBackground);
// function changeBackground(){
//   var backgroundColor = "red", "blue", "yellow";
// }


































































