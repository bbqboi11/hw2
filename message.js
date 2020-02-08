function setup() {
  createCanvas(850, 850);
}

function draw() {
  background(255);
  strokeWeight(13.0);
  //printA();
  //printB();
  //printC();
  //printD();
  //printE();
  //printF();
  //printG();
  //printH();
  //printI();
  //printJ();
  //printK();
  //printL();
  //printM();
  //printN();
  //printO();
  //printP();
  //printQ();
  //printR();
  //printS();
  //printT();
  //printU();
  //printV();
  //printW();
  //printX();
  //printY();
  //printZ();
  stroke('rgb(107, 175, 181)');
  printG(50, 50);
  printO(200, 50);
  printT(350, 50);
  printT(500, 50);
  printA(650, 50);
  stroke('rgb(88, 191, 141)');
  printC(50, 200);
  printA(200, 200);
  printT(350, 200);
  printC(500, 200);
  printH(650, 200);
  stroke('rgb(191, 145, 184)');
  printE(200, 350);
  printM(350, 350);
  stroke('rgb(154, 109, 173)');
  printA(350, 500);
  printL(500, 500);
  printL(650, 500);
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
  line(x + 100, y, x, y);
  line(x, y, x, y + 100);
  line(x, y + 100, x + 100, y + 100);
}

function printD(x, y) {
  line(x + 100, y, x + 100, y + 100);
  line(x + 100, y + 50, x + 50, y + 50);
  line(x + 50, y + 50, x + 50, y + 100);
  line(x + 50, y + 100, x + 100, y + 100);
}

function printE(x, y) {
  line(x + 100, y, x, y);
  line(x, y, x, y + 100);
  line(x, y + 50, x + 50, y + 50);
  line(x, y + 100, x + 100, y + 100);
}

function printF(x, y) {
  line(x + 100, y, x, y);
  line(x, y, x, y + 100);
  line(x, y + 50, x + 50, y + 50);
}

function printG(x, y) {
  line(x + 100, y, x, y);
  line(x, y, x, y + 100);
  line(x, y + 100, x + 100, y + 100);
  line(x + 100, y + 100, x + 100, y + 50);
  line(x + 100, y + 50, x + 50, y + 50);
}

function printH(x, y) {
  line(x, y, x, y + 100);
  line(x, y + 50, x + 100, y + 50);
  line(x + 100, y, x + 100, y + 100);
}

function printI(x, y) {
  line(x, y, x + 100, y);
  line(x + 50, y, x + 50, y + 100);
  line(x, y + 100, x + 100, y + 100);
}

function printJ(x, y) {
  line(x + 100, y, x + 100, y + 100);
  line(x + 100, y + 100, x, y + 100);
  line(x, y + 100, x, y + 50);
}

function printK(x, y) {
  line(x, y, x, y + 100);
  line(x, y + 50, x + 100, y);
  line(x, y + 50, x + 100, y + 100);
}

function printL(x, y) {
  line(x, y, x, y + 100);
  line(x, y + 100, x + 100, y + 100);
}

function printM(x, y) {
  line(x, y + 100, x, y);
  line(x, y, x + 50, y + 50);
  line(x + 50, y + 50, x + 100, y);
  line(x + 100, y, x + 100, y + 100);
}

function printN(x, y) {
  line(x, y + 100, x, y);
  line(x, y, x + 100, y + 100);
  line(x + 100, y + 100, x + 100, y);
}

function printO(x, y) {
  line(x, y, x + 100, y);
  line(x + 100, y, x + 100, y + 100);
  line(x + 100, y + 100, x, y + 100);
  line(x, y + 100, x, y);
}

function printP(x, y) {
  line(x, y + 100, x, y);
  line(x, y, x + 100, y);
  line(x + 100, y, x + 100, y + 50);
  line(x + 100, y + 50, x, y + 50);
}

function printQ(x, y) {
  line(x, y, x + 50, y);
  line(x, y, x, y + 50);
  line(x, y + 50, x + 50, y + 50);
  line(x + 50, y, x + 50, y + 100);
  line(x + 50, y + 100, x + 100, y + 50);
}

function printR(x, y) {
  line(x, y + 100, x, y);
  line(x, y, x + 100, y);
  line(x + 100, y, x + 100, y + 50);
  line(x + 100, y + 50, x, y + 50);
  line(x, y + 50, x + 100, y + 100);
}

function printS(x, y) {
  line(x + 100, y, x, y);
  line(x, y, x, y + 50);
  line(x, y + 50, x + 100, y + 50);
  line(x + 100, y + 50, x + 100, y + 100);
  line(x + 100, y + 100, x, y + 100);
}

function printT(x, y) {
  line(x, y, x + 100, y);
  line(x + 50, y, x + 50, y + 100);
}

function printU(x, y) {
  line(x + 100, y, x + 100, y + 100);
  line(x + 100, y + 100, x, y + 100);
  line(x, y + 100, x, y);
}

function printV(x, y) {
  line(x, y, x + 50, y + 100);
  line(x + 50, y + 100, x + 100, y);
}

function printW(x, y) {
  line(x, y, x, y + 100);
  line(x, y + 100, x + 50, y + 50);
  line(x + 50, y + 50, x + 100, y + 100);
  line(x + 100, y + 100, x + 100, y);
}

function printX(x, y) {
  line(x, y, x + 100, y + 100);
  line(x + 100, y, x, y + 100);
}

function printY(x, y) {
  line(x, y, x + 50, y + 50);
  line(x + 50, y + 50, x + 100, y);
  line(x + 50, y + 50, x + 50, y + 100);
}

function printZ(x, y) {
  line(x, y, x + 100, y);
  line(x + 100, y, x, y + 100);
  line(x, y + 100, x + 100, y + 100);
}
