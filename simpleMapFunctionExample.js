/*
  map(_,_'min',_'max',_'min',_'max')
  =Example=
  map(mouseX,0,600,0,255);
  This line of code maps mouseX from [0,600] range to [0,255].
  First argument is which value is going to be mapped to another range.
  Second and third values are the current range.
  Fourth and fifth values are the range that going to be mapped to the variable.
  After the mapping we can assign the value to a variable:
  var col = map(mouseX,0,600,0,255);
*/
var r = 0;
var b = 0;
var g = (r+b)/2;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  r = map(mouseX,0,600,0,255);
  b = map(mouseY,0,400,255,0);  
  background(r,g,b);
}
