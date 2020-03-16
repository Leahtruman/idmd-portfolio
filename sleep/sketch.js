var ima = []; // array for sleep1 and sleep2 images
var imb = []; // array for all oher images
// aspect ratio for all images
var apectRatio = 1280 / 1280;
function preload() {
  ima[0] = loadImage("sleep1.jpg");
  ima[1] = loadImage("sleep2.jpg");
  for (i = 0; i < 16; i++) {
    imageName = "im" + (i + 1) + ".jpg"; // generates images from im1.jpg-im16.jpg
    //print(imageName);
    imb[i] = loadImage(imageName);      // put the image into the imb array
  }
}
function setup() {
  createCanvas(600, 600);
  frameRate(4);
}
var disp = 1;
var i2d = 0;             // Global variable for tracking image# to display
function draw() {
  disp = disp * -1;
  background(220);
  //print(i2d);
  if (disp > 0) {        // Show sleep1 and 2
    image(ima[0], 0, 0, width, height / apectRatio);
  } else {
    image(ima[1], 0, 0, width, height / apectRatio);
  }
  if (mouseIsPressed) {  // Start displaying hitting-the-alarm sequence of images
    i2d += 1;            // Using global variable to set the image
    if (i2d > 15) {      // Setup to repeatedly show 16 images in sequence
      i2d = 0;
    }
    image(imb[i2d], 0, 0, width, height / apectRatio);
  }
}