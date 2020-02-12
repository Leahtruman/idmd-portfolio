//These are for setting up my variables, so I can call them later on in the code
var x = 250;
var y = 250;
var w = 50;
var rc = 0;

//This sets up the canvas, and the project, creating the canvas and background color
function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
}

//this block of code functions to draw the circle, and makes it so when the mouse is on the circle, the circle gets bigger every time the draw command is executed. It also serves to color the circle
function draw() {
  background(255);
  distance = dist(x, y, mouseX, mouseY);
  if (distance < w / 2) {
    w += 1;
    rc += 1;
    fill(rc,0,0);
    ellipse(x, y, w, w);
  } else {
    w = 50;
  }
}