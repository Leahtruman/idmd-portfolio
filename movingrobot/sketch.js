function setup() {
  createCanvas(400, 400);
}

function draw() {
  rect()
  fill(155, 196, 170)
  background(220);
  circle(mouseX,mouseY,130)
  fill(255, 242, 148)
  ellipse(mouseX + 30,mouseY,50,80)
  ellipse(mouseX - 30, mouseY,50,80)
  fill(0)
  ellipse(mouseX + 30,mouseY,20,50)
  fill(0)
  ellipse(mouseX - 30 ,mouseY,20,50)
  fill(225)
  ellipse(mouseX + 40,mouseY,15,15)
  fill(225)
  ellipse(mouseX - 20,mouseY,15,15)
  rect(mouseX + 30,mouseY - 140,5,90)
  rect(mouseX - 30,mouseY - 140,5,90)
  fill(252, 73, 3)
  ellipse(mouseX + 32,mouseY - 140,20,20)
  ellipse(mouseX - 28,mouseY - 140,20,20)
  
  
  
  
}