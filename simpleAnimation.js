var toogle = 0;
var circlee = {
  positionX: 10,
  positionY: 10,
  transparency: 150,
  diameter: 5
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(mouseX, mouseY, mouseY, 100);
  isBigEnough();
  if (toogle == 1) {
    circlee.positionX -= 1;
    circlee.positionY -= 1;
    circlee.diameter -= 1;
    circle(circlee.positionX, circlee.positionY, circlee.diameter, 200);
  } else if (toogle == 0) {
    circlee.positionX += 1;
    circlee.positionY += 1;
    circlee.diameter += 1;
    circle(circlee.positionX, circlee.positionY, circlee.diameter, 200);
  }
}

function isBigEnough() {
  if (circlee.positionX > 400 && circlee.positionY > 400) {
    toogle = 1;
  }
  if (circlee.positionX < 0 && circlee.positionY < 0) {
    toogle = 0;
  }
}
