function setup() {
  createCanvas(400, 400);
  background(200);
  var dia = width / 10;
  var rad = dia / 2;

  for (i = rad; i <= width; i = i + dia) {
    for (j = rad; j <= height; j = j + dia) {
      ellipse(i, j, dia, dia);
    }
  }
}

function draw() {
  //background(220);
}