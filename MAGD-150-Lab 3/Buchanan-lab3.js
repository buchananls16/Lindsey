var flipFlopper =false; // default value is false



var deltaMouseX; // default value is 0.0
var deltaMouseY;
var r=0;
var g=0;
var b= 0;
var w = 30;
var h = 30;

function setup() {
  // put setup code here
  createCanvas(500, 500);
  //slow down the frameRate to make it more visible
  frameRate(20);
  textSize(30);
  textAlign(CENTER);
  stroke(1);

}
function draw() {
  // put drawing code here
  // Move the mouse across the canvas
  background(180, 198, 255, 100);
  //used https://p5js.org/reference/#/p5/mouseY as a reference
  line(0, mouseY, 100, mouseY);
  //used https://p5js.org/reference/#/p5/frameCount as a reference
  text(frameCount, width / 2, height / 2);
  //used https://p5js.org/reference/#/p5/mouseX as a reference
  line(mouseX, 0, mouseX, 100);
  //used https://p5js.org/reference/#/p5/pmouseX as a reference
  // prints "The value of x is 10"
  line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);
  //used https://p5js.org/reference/#/p5/pmouseY as a reference
  //draw a ellipse only if the mouse is not moving
  if (mouseY === pmouseY && mouseX === pmouseX) {
    fill(255, 184, 254, 100);
    ellipse(250, 350, 80, 80);
  }
  print(pmouseY + ' -> ' + mouseY);

  //used lab 3 examples as a reference
  fill(r, g, b);
  // Width and height of the ellipse increase in size until they
  // reach a third the height of the window, then reset to 0
  w = (w + 3) % (height / 4);
  h = (h + 3) % (height / 4);
  // mouseX and mouseY are special variables which track
  // the mouse position.
  
  ellipse(mouseX, mouseY, w, h);
  print("(" + mouseX + ", " + mouseY + ")");

  // Fill colors can get updated after the ellipse is drawn

  r = (r + 1) % 256;
  g = (g + 5) % 256;
  b = (b + 2) % 256;
  // pmouseX and pmouseY are the previous mouse position.
  // By subtracting pmouse from mouse you can get the change
  // in mouse position between frames.
  deltaMouseX = mouseX - pmouseX;
  deltaMouseY = mouseY - pmouseY;
  print("delta: (" + deltaMouseX + ", " + deltaMouseY + ")");
  flipFlopper = !flipFlopper;
  print("flippFlopper = " + flipFlopper);

//used https://p5js.org/reference/#/p5/map as a reference
let value = 200;
let m = map(value, 0, 400, 0, width);
ellipse(m, 100, 100, 100);

//used https://p5js.org/reference/#/p5/constrain as a reference
  let leftWall = 400;
  let rightWall = 100;
  
  let xm = mouseX;
  let xc = constrain(mouseX, leftWall, rightWall);

  // Draw the walls.
  stroke(6);
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);

  // Draw xm and xc as circles.
  fill(122, 255, 250, 100);
  ellipse(xm, 33, 9, 9); // Not Constrained
  fill(255, 58, 182, 100);
  ellipse(xc, 66, 9, 9); // Constrained

  let x1 = 10;
  let y1 = 90;
  let x2 = mouseX;
  let y2 = mouseY;

  line(x1, y1, x2, y2);
  ellipse(x1, y1, 7, 7);
  ellipse(x2, y2, 7, 7);

  //used https://p5js.org/reference/#/p5/dist as a reference
  let d = int(dist(x1, y1, x2, y2));
  push();
  translate((x1 + x2) / 3, (y1 + y2) / 3);
  rotate(atan2(y2 - y1, x2 - x1));
  text(nfc(d, 1), 10, -5);
  pop();

}
