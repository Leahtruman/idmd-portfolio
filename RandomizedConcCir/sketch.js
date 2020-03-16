//
//Concentric Circles Code Extract
//
function setup() {
  createCanvas(600, 600);
  background(random(225),random(225),random(225));
  noFill();
  stroke(random(225),random(225),random(225));
  for(d = 10; d < width; d = d + 10){
    ellipse(width / 2, height / 2, d, d);
  }
}