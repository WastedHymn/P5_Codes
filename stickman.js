/*Color Functions
//background, fill, stroke.
 ->Fill describes the interior of the shape.
 ->Stroke describes the outline of the shape.
 ->RBG, RBGA(Red,Blue,Green,Alpha)
 Alpha is for transparency.(Value range = 0-255=> 255=opaque)
*/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  //Head
  fill(255,255,255);
  noStroke();
  circle(200,100,60);
  //Left Eye
  fill(100);
  circle(190,90,10);
  //Right Eye
  circle(210, 90, 10);
  //Mouth
  fill(207, 208, 209);
  stroke(255,0,0);
  strokeWeight(2);
  arc(200,100,50,50,0,6.3/2,CHORD);
  //Throat
  strokeWeight(5);
  stroke(0,0,0);
  line(200,132,200,140);
  //Chest
  fill(214, 161, 0,100);
  stroke(214, 161, 0,100);
  strokeWeight(5);
  rect(188,145,25,50);
  //Left Arm
  stroke(0);
  line(190,150,160,175);
  //Right Arm
  stroke(0);
  line(210,150,240,175);
  //Left Leg
  line(200,195,170,230);
  //Right Leg
  line(200,195,230,230);
  //RedMarkup
  stroke(255,0,0);
  point(200,150);
  //BlueMarkup
  stroke(0,0,255);
  point(200,200);
  
  /*
  rectMode(CENTER);
  noFill(0,0,255);
  stroke(0,255,0)
  rect(200,150,150,150);
  fill(255,0,0);
  stroke(255);
  ellipse(50,50,100,75);
  */
}
