/*Notlar
//rect(x, y, w, h, [tl], [tr], [br], [bl]) 
Köşeli parantezler isteğe bağlı eklenebilecek özellikler.
//rect(100,50,25,75) => 100 ve 50 sol üst köşenin canvas içinde nereye konmasına gerektiğine dair bilgi veriyor. 25, 75 ise weight ve height.
//line(x1,y1,x2,y2)
Başlangıç x1,y1 Bitiş x2,y2
//circle(x,y,d)
d = çap.
*/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 220, 220);
  line(200,100, 200,150);
  line(200,110,180,120);
  line(200,110,220, 120);
  line(200,150,180,170);
  line(200,150,220,170);
  circle(200,100,20);
  line(0, 0, 399, 399)
  rect(300, 100, 100, 150);
}
