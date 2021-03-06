let pins = [];
let colors = [];
let maxnum = 200;
let pinSize = 15;
let speed = 8;
function setup() {
  //background(200);
  createCanvas(800, 800);
  createPins();
  createColors();
}
function draw() {
  background(3, 7, 33);
  showDisplay();
}
function createPins() {
  for (let i = 0; i < maxnum; i++) {
    pins[i] = createVector(random(0 + pinSize / 2, width - pinSize / 2), random(0 + pinSize / 2, width - pinSize / 2));
  }
}
function createColors() {
  for (let i = 0; i < maxnum; i++) {
    colors[i] = color(255, random(208,252), random(0,120), random(255))
  }
}
function showDisplay() {
  for (let i = 0; i < maxnum; i++) {
    fill(colors[i]);
    stroke(colors[i]);
    strokeWeight(3);
    vibrate(pins[i]);
    if (mouseIsPressed) {
      fill(random(255),random(255),random(255))
      line(pins[i].x, pins[i].y, mouseX, mouseY);
    }
    ellipse(pins[i].x, pins[i].y, pinSize, pinSize);
  }
}
// SAVE CANVAS FUNCTION
function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas('mycanvas', 'png');
}
function vibrate (thisPin) {
  thisPin.x += random(-speed, speed);
  thisPin.y += random(-speed, speed);
}
