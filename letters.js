function setup() {
  createCanvas(850, 850);
}

function draw() {
  background(220);

  printA(50, 50);
  printB(200, 50);
  printC(300, 50);
  printD(400, 50);
  printE(550, 50);
  printF(700, 50);
  printG(50,200);
  printH(200,200);
  printI(350,200);
  printJ(500,200);
  printK(650,200);
  printL(50,350);
  printM(200,350);
  printN(350,350);
  printO(500,350);
  printP(650,350);
  printQ(50,500);
  printR(200,500);
  printS(350,500);
  printT(500,500);
  printU(650,500);
  printV(50,650);
  printW(200,650);
  printX(350,650);
  printY(500,650);
  printZ(650,650);
}

function printA(x, y) {
  line(x, y + 100, x, y);
  line(x, y, x + 100, y);
  line(x + 100, y, x + 100, y + 100);
  line(x, y + 50, x + 100, y + 50);
}

function printB(x, y) {
  line(x, y, x, y + 100);
  line(x, y + 100, x + 50, y + 100);
  line(x + 50, y + 100, x + 50, y + 50);
  line(x, y + 50, x + 50, y + 50);

}

function printC(x, y) {
  line(x + 100 , y , x, y);
  line(x, y, x, y + 100);
  line(x, y + 100, x + 100, y + 100);
}

function printD(x,y) {
  line(x+100,y,x+100,y+100);
  line(x+100,y+50,x+50,y+50);
  line(x+50,y+50,x+50,y+100);
  line(x+50,y+100, x+100,y+100);
}

function printE(x,y) {
  line(x+100,y,x,y);
  line(x,y,x,y+100);
  line(x,y+50,x+50,y+50);
  line(x,y+100,x+100,y+100);
}

function printF(x,y) {
  line(x+100,y,x,y);
  line(x,y,x,y+100);
  line(x,y+50,x+50,y+50);
}

function printG(x,y) {
  line(x+100,y,x,y);
  line(x,y,x,y+100);
  line(x,y+100,x+100,y+100);
  line(x+100,y+100,x+100,y+50);
  line(x+100,y+50,x+50,y+50);
}

function printH(x,y) {
  line(x,y,x,y+100);
  line(x,y+50,x+100,y+50);
  line(x+100,y,x+100,y+100);
}

function printI(x,y) {
  line(x,y,x+100,y);
  line(x+50,y,x+50,y+100);
  line(x,y+100,x+100,y+100);
}

function printJ(x,y) {
  line(x+100,y,x+100,y+100);
  line(x+100,y+100,x,y+100);
  line(x,y+100,x,y+50);
}

function printK(x,y) {
  line(x,y,x,y+100);
  line(x,y+50,x+100,y);
  line(x,y+50,x+100,y+100);
}

function printL(x,y) {
  line(x,y,x,y+100);
  line(x,y+100,x+100,y+100);
}

function printM(x,y) {
  line(x,y+100,x,y);
  line(x,y,x+50,y+50);
  line(x+50,y+50, x+100,y);
  line(x+100,y, x+100,y+100);
}

function printN(x,y) {
  line(x,y+100,x,y);
  line(x,y,x+100,y+100);
  line(x+100,y+100,x+100,y);
}

function printO(x,y) {
  line(x,y,x+100,y);
  line(x+100,y,x+100,y+100);
  line(x+100,y+100,x,y+100);
  line(x,y+100,x,y);
}

function printP(x,y) {
  line(x,y+100,x,y);
  line(x,y,x+100,y);
  line(x+100,y,x+100,y+50);
  line(x+100,y+50,x,y+50);
}

function printQ(x,y) {
  line(x,y,x+50,y);
  line(x,y,x,y+50);
  line(x,y+50,x+50,y+50);
  line(x+50,y,x+50,y+100);
  line(x+50,y+100,x+100,y+50);
}

function printR(x,y) {
  line(x,y+100,x,y);
  line(x,y,x+100,y);
  line(x+100,y,x+100,y+50);
  line(x+100,y+50,x,y+50);
  line(x,y+50,x+100,y+100);
}

function printS(x,y) {
  line(x+100,y,x,y);
  line(x,y,x,y+50);
  line(x,y+50,x+100,y+50);
  line(x+100,y+50,x+100,y+100);
  line(x+100,y+100,x,y+100);
}

function printT(x,y) {
  line(x,y,x+100,y);
  line(x+50,y,x+50,y+100); 
}

function printU(x,y) {
  line(x+100,y,x+100,y+100);
  line(x+100,y+100,x,y+100);
  line(x,y+100,x,y);
}

function printV(x,y) {
  line(x,y,x+50,y+100);
  line(x+50,y+100,x+100,y);
}

function printW(x,y) {
  line(x,y,x,y+100);
  line(x,y+100,x+50,y+50);
  line(x+50,y+50,x+100,y+100);
  line(x+100,y+100,x+100,y);
}

function printX(x,y) {
  line(x,y,x+100,y+100);
  line(x+100,y,x,y+100);
}

function printY(x,y) {
  line(x,y,x+50,y+50);
  line(x+50,y+50,x+100,y);
  line(x+50,y+50,x+50,y+100);
}

function printZ(x,y) {
  line(x,y,x+100,y);
  line(x+100,y,x,y+100);
  line(x,y+100,x+100,y+100);
}
