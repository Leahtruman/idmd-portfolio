function recursiveSquare(x, y, dia) {
  stroke(0);
  fill(random(255),random(255),random(255),random(255));
  rect(x, y, dia, dia);
  if (dia >= 8) {
    recursiveSquare(x + dia / 2, y, dia / 2);
    recursiveSquare(x - dia / 2, y, dia / 2);
    recursiveSquare(x, y + dia / 2, dia / 2);
  }
}

function setup() {
  createCanvas(600, 600);
  background(random(255), random(255), random(255));
  recursiveSquare(width / 2, height / 2, 300);
}

function draw() {
  //background(230);
}