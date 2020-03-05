//setting up pyr as a variable to be able to use it as shorthand to load our images later
var pyr;

//preload sets up external files. this happens before setup
function preload() {
  sl1 = loadImage("sleep1.jpg");
  a1 = 1280 / 1280;
  sl2 = loadImage("sleep2.jpg");
  a2 = 1280 / 1280;
}
//setting up the canvas
function setup() {
  createCanvas(600, 600);
}
//the variable "disp" is used to determine which images appear based on it's value
var disp = 1;

function draw() {
  disp *= -1;
  background(220);
  //print(disp);
  frameRate(3);
  if (disp > 0) {
    image(sl1, 0, 0, width, height);
  } else {
    image(sl2, 0, 0, width, height);
  }
}