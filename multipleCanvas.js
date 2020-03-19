/*
The program draws random dots and a moving square. The square is drawn over the dots.
*/
var x = 200;
var y = 200;
let secondCanvas;

function setup() {
  createCanvas(400, 400);
  secondCanvas = createGraphics(400, 400);
  secondCanvas.clear();
  background(0);
}

function draw() {
  background(255);
  x += random(-5, 5);
  y += random(-5, 5);
    let starX = random(width);
    let starY = random(height);
    secondCanvas.fill(255, 150,255);
    secondCanvas.noStroke();
    secondCanvas.circle(starX, starY, 10, 150);
  /*
  if (mouseIsPressed) {
    secondCanvas.fill(255, 150,255);
    secondCanvas.noStroke();
    secondCanvas.circle(mouseX, mouseY, 10, 150);
  }
  */
  image(secondCanvas, 0, 0);
  fill(255, 0, 0);
  stroke(255);
  rectMode(CENTER);
  rect(x, y, 20, 20);
}
