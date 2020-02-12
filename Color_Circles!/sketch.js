//This block of code sets up the workspace (canvas and background color)
function setup() {
  createCanvas(500, 500);
  background(0, 225, 225);
}
//This executes the draw command sixty times a second, and creates the circles that you draw with, as well as the color changes
function draw() {
  if(mouseIsPressed)
    fill(random(0,225),random(0,225),random(0,225))
  ellipse(mouseX, mouseY, 25, 25);
}