let x = 200
let y = 200

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220)
  drawCrust();
  drawSauce();
  drawCheese();
  drawPepperoni();
  drawChicken();
}

function drawCrust() {
  noStroke();
  fill(210, 180, 140);
  circle(x, y, 300);
}

function drawSauce() {
  noStroke();
  fill(155, 0, 0);
  circle(x, y, 275);
}

function drawCheese() {
  noStroke();
  fill(255, 255, 200);
  circle(x, y, 270);
}

function drawPepperoni() {
  noStroke();
    fill(200, 50, 50);
  for (let i = 0; i < 20; i++) {
    let x = random(100, 300);
    let y = random(100, 300);
    let z = 40;
    circle(x, y, z);
  }
}

function drawChicken() {
  noStroke();
    fill(150, 75, 0)
  for (let i = 0; i < 10; i++) {
    let x = random(100, 300);
    let y = random(100, 300);
    let z = random(15, 30);
    let w = random(15, 30);
    rect(x, y, z, w)
  }
}

function mouseDragged() {
    x = mouseX;
    y = mouseY;
}
