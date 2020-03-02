//defining our coordinate variables
var x = 200;
var y = 200;
var dia = 100;

//defining and creating our canvas
function setup() {
  //when canvas is created, it defines width and height
  createCanvas(400, 400);
  //print(width);
  //print(height);
}
//this block of code is in charge of moving the ball, ass well as it's color
function draw() {
  background(220);
  fill(255, 0, 0);
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      x = x + 3;
      if (x >= width - dia / 2) x = width - dia / 2;
    } else if (keyCode == LEFT_ARROW) {
      x = x - 3
    } else if (keyCode == DOWN_ARROW) {
      y = y + 3;
      if (y >= height - dia / 2) y = height - dia / 2;
    } else {
      (keyCode == UP_ARROW)
      y = y - 3;
    }
  }
  ellipse(x, y, dia, dia);
}