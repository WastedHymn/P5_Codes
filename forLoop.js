var offsetX = 25;
var offsetY = 25;
var x=0,y=0,z=0;
var col = {
  red:240,
  green:60,
  blue: 120,
  
};
var toggle = false;
function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
   col.red = map(mouseX, 0, 400, 0, 255);
   col.blue = map(mouseY, 0, 400, 255, 0);
   col.green = map(mouseY, 0, 400, 0, 255);
   x = random(0,255);
   y = random(0,255);
   z = random(0,255);
   fill(x,y,z);
   stroke(0);
   strokeWeight(4);
   background(col.red, col.green, col.blue); 
  
  //Draws circles
  for(var i=0;i<400;i += 50){
     for(var y=0; y<400; y+=50){
       circle(i+offsetX,y+offsetY,20);
     }
   }
  
  //checking the circles are whether on canvas or not.
  if(offsetX >= 350 && offsetY <= -70){
      toggle = true;
     }else if(offsetX <= -410 && offsetY >= 115){
      toggle = false;
  }  
  //console.log("X:"+ offsetX + " Y:" + offsetY);
  check();
}

function check(){
  if(toggle){
      //fill(x,y,z);
      offsetX -=5;
    offsetY +=1;   
  }else{
        //fill(x,y,z);
       offsetX +=5;
       offsetY -=1;
  }
}
