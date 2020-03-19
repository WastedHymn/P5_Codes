/*
The program draws colorful circles to the screen. The color and opacity of the circles depend on the position of the cursor. 
Position of the circles are selected using "random()" function.
*/
var spot = {
  x: 100,
  y: 50
};

var col = {
  r: 255,
  g: 0,
  b: 0,
  a: 255
};

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  spot.x = random(0, width);
  spot.y = random(0, height);
  col.a = map(mouseX, 0, 600, 0, 255);
  col.r = map(mouseX, 0, 600, 0, 255);
  //col.g = map(mouseY, 0, 400, 255, 0);
  col.b = map(mouseY, 0, 400, 0, 255);
  fill(col.r, col.g, col.b, col.a);
  noStroke();
  ellipse(spot.x, spot.y, 24, 24);
}

function mousePressed(){
  background(255);
}
