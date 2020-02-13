//This block of code serves to set up the canvas size, and background color. This gives us a space to work in
function setup() {
  createCanvas(500, 500);
  background(0, 0, 255);
}
//This block of code is for the drawing of the lines and circles. It executes the draw command
function draw() {
  if(mouseIsPressed) {
    stroke(255, 255, 255);
    line(150, 150, mouseX, mouseY);
    fill(random(225),random(225),random(0,225))
    ellipse(mouseX, mouseY,20,20);
}
}