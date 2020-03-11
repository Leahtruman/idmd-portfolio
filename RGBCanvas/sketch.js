//the goal is to make a canvas that responds to the "r", "g", and "b" keys (both capital and not) with red, green, and blue. all other keys pressed will result in a neutral grey background.
//shift tab indents for you

function setup() {
  createCanvas(400, 400);
}

//background setup, with the backround(220) piece of code active, it would repeatedly draw the grey background 60 times a second.

function draw() {
  //background(220);
}

//here the keyTyped function is called, that allows for the registering of when a key is pressed. By using print(key), the keys are printed to the console.

function keyTyped() {
  print(key);
  if (key == "r" || key == "R") {
    background(225, 0, 0);
  } else if (key == "g" || key == "G") {
    background(0, 255, 0);
  } else if (key == "b" || key == "B") {
    background(0, 0, 255)
  } else {
    background(220);
  }
}