function setup() {
  createCanvas(400 , 400);
}

function draw() {
  background(252, 250, 245);
  noStroke();
  strokeCap(SQUARE);
  
  //red square
  fill(255, 0 ,0);
  rect(80, 0, 320, 320);
  
  //blue square
  fill(0,0,255);
  rect(0, 320, 80, 80);
  
  //yellow square
  fill(255,255,0)
  rect(370, 360, 30, 40);
  
  //Line down red
  stroke(0);
  strokeWeight(13);
  line(80,0,80, 400);
  
  //horizontal red line
  line(0,320,400,320);
  
  //yellow down
  line(370,320,370,400);
  
  //yellow horizontal
  strokeWeight(14);
  line(370,360,400,360);
  
  //thicc line
  
  strokeWeight(26);
  line(0,160, 80,160);
  
}
