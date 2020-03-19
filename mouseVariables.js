/*
"function setup()" is called when the program starts.
"function draw()" is called forever in a loop automatically.
mouseX and mouseY are the location of the curser on the screen.
*/
function setup() {
  createCanvas(1000, 1000);
   background(237, 237, 237);
}

function draw() {
  //background(mouseX, mouseY, mouseY, 50);
   mousePressed();
}

function mousePressed(){
  //background(mouseX, mouseY, mouseY, 50);
  noStroke();
  fill(247, 161, 0, 255);
  circle(mouseX,mouseY,10);
}
