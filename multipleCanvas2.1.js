/*
This program is almost the same as multipleCanvas.js. The only difference is there are no dots and the background color
 is changing according to the position of the cursor (The square leaves trails behind).
*/
var secondCanvas;
var thirdCanvas;
var rectX = 200;
var rectY = 200;
var col = {
  r: 255,
  g: 0,
  b: 0
};
var col2 = {
  r: 255,
  g: 0,
  b: 0
};

function setup() {
  createCanvas(400, 400);
  secondCanvas = createGraphics(400, 400);
  secondCanvas.clear();
  thirdCanvas = createGraphics(400, 400);
  thirdCanvas.clear();
}

function draw() {
  background(220);
  col.r = map(mouseX, 0, 400, 255, 0);
  col.g = map(mouseY, 0, 400, 0, 255);
  col.b = map(mouseX, 0, 400, 255, 0);
  background(col.r, col.g, col.b);
  //secondCanvas.clear(); 
  rectX = rectX - random(-5, 5);
  rectY = rectY - random(-5, 5);
  secondCanvas.fill(255, 0, 0);
  secondCanvas.stroke(0);
  secondCanvas.rect(rectX, rectY, 30, 30);
  image(secondCanvas, 0, 0);

  if (mouseIsPressed) {
    col2.r = map(mouseX, 0, 400, 0, 255);
    col2.g = map(mouseY, 0, 400, 0, 255);
    col2.b = map(mouseY, 0, 400, 255, 0);
    thirdCanvas.fill(col2.r, col2.g, col.b);
    thirdCanvas.noStroke();
    thirdCanvas.circle(mouseX, mouseY, 10, 200);
  }
  image(thirdCanvas, 0, 0);

  if (mouseIsPressed) {
    if (mouseButton == CENTER) {
      secondCanvas.clear();
      thirdCanvas.clear();
    }

  }
}
