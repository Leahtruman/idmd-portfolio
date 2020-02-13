var x = 25;
var dir = 1;
var speed = 3;

function setup() {
  createCanvas(300, 200);
  background(120, 200, 255);
}

function draw() {
  background(120, 200, 255);
  noStroke();
  ellipse(x, 100, 50, 50);
  if (x > 275 || x < 25) {
    fill(random(0,255),random(0,255),random(0,255));
    dir = dir * -1;
  }
  x = x + (speed*dir);
  // x = (x + 1) % 275;
  // x = min(x + 1, 275);
  // x = x + 1;
}