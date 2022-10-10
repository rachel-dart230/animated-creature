let x= 150;
let xPos= 0;
let yPos= 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(135,206,250);
 
  fill(255,215,0);
  ellipse(xPos,yPos,x);
  noFill();
  
  fill(50,100,60);
  rect(0,340,400,100);
  noFill();
  
  fill(192,192,192);
  triangle(200,30,230,70,170,70);
  fill(192,192,192);
  strokeWeight(2);
  ellipse(200,100,80,80);
  rect(160,280,30,80,5);
  rect(210,280,30,80,5);
  rect(160,140,80,160,70);
  noFill();
  
  line(240,170,300,200);
  line(160,170,250,200);
  
  x = x + 0;
  xPos = xPos + 1;
  yPos = yPos + 1;
  
  fill(0,0,0);
  triangle(180,75,185,90,170,90);
  triangle(220,75,225,90,210,90);
  ellipse(200,120,20,10);
}