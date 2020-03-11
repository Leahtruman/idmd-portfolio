//here, the pretty much all the code is in setup bacause we don't need to run the draw function 60 times a second
function setup() {
  createCanvas(600, 800);
  background(200);
  //variables for the diameter and radius are set up to be used later
  var dia = width / 10;
  var rad = dia / 2;
  //using a for loop, the identical ellipses drawn in a grid, running the same loop of code until the canvas is exactly filled up
  for (i = rad; i <= width; i = i + dia) {
    for (j = rad; j <= height; j = j + dia) {
      ellipse(i, j, dia, dia);
    }
  }
}

function draw() {
  //background(220);
  //nothing needs to go here
}