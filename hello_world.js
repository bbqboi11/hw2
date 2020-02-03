function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  printH(50, 200);
  printE(100,200);
  printL(150,200);
  printL(200,200);
  printO(250,200);

  //draw H

  //line(50, 50, 50, 150);
  //line(90, 50, 90, 150);
  //line(50, 100, 90, 100);

  //draw E

  //line(100, 50, 100, 150);
  //line(100, 50, 140, 50);
  //line(100, 100, 140, 100);
  //line(100, 150, 140, 150);

  //draw L

  //line(150, 50, 150, 150);
  //line(150, 150, 190, 150);

}

function printH(x, y) {
  //draw H
  //line(50, 50, 50, 150);
  //line(90, 50, 90, 150);
  //line(50, 100, 90, 100);

  line(x, y, x, y + 100);
  line(x + 40, y, x + 40, y + 100);
  line(x, y + 50, x + 40, y + 50);
}

function printE(x,y) {
  //draw E

  //line(100, 50, 100, 150);
  //line(100, 50, 140, 50);
  //line(100, 100, 140, 100);
  //line(100, 150, 140, 150);

  line(x,y,x,y+100);
  line(x,y,x+40,y);
  line(x, y+50,x+40,y+50);
  line(x,y+100,x+40,y+100);
  
}

function printL(x,y) {
  //draw L

  //line(150, 50, 150, 150);
  //line(150, 150, 190, 150);
  
  line(x,y,x,y+100);
  line(x,y+100,x+40,y+100);

}

function printO(x,y){
  //draw O
  noFill();
  rect(x,y,40,100,30);
}
