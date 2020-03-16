var cat;
function preload() {
  cat=loadImage("cat.jpg")
}

function setup() {
  createCanvas(800, 500);
}

var a = 600/400
function draw() {
  background(220);
  image(cat, 0, 0, 800,800/a);
}