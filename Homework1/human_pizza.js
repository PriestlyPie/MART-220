function setup() {
  createCanvas(400, 400);
  noLoop();
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
  circle(200, 200, 300);
}

function drawSauce() {
  noStroke();
  fill(155, 0, 0);
  circle(200, 200, 275);
}

function drawCheese() {
  noStroke();
  fill(255, 255, 200);
  circle(200, 200, 270);
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