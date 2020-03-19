/*
You can draw whatever you want using cursor. Color will change according to position of your cursor. If you click right mouse button
it will clear your canvas.
*/
var col = {
  red: 255,
  green: 0,
  blue: 0
};

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {

  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      col.red = map(mouseX, 0, 400, 0, 255);
      col.blue = map(mouseY, 0, 400, 255, 0);
      noStroke();
      fill(col.red, col.green, col.blue);
      circle(mouseX, mouseY, 50)
    } else if (mouseButton == CENTER) {
      col.blue = map(mouseX, 0, 400, 0, 255);
      col.green = map(mouseY, 0, 400, 255, 0);
      fill(col.red, col.green, col.blue);
      circle(mouseX, mouseY, 15);

    } else if (mouseButton == RIGHT) {
      background(220);
    }
  }
}
