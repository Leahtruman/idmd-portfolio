function setup() {
  createCanvas(600, 400);
    stroke(random(255), random(255), random(255));
  strokeWeight(3);
}
  function draw() {
    background(204);
    for (i = 10; i < mouseY; i = i + 7) {
      line(0, i, width, i);
    }
  }