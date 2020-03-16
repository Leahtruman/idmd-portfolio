function setup() {
  createCanvas(400, 400);
  background(225);
}
function draw() {
  for(y = 1; y < height - 1; y = y + 10){
    for(x = 1; x < width - 1; x = x + 10){
      point(x,y);
    }
  }
}