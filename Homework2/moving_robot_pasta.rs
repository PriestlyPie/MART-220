let pasta = [];
let movingPasta = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 50; i++) {
    pasta.push({ x: random(120, 280), y: random(150, 250), len: random(30, 70), angle: random(TWO_PI) });
    movingPasta.push({ x: random(120, 280), y: random(150, 250), len: random(30, 70), angle: random(TWO_PI) });
  }
}

function draw() {
  background(220);
  drawPlate();
  drawPasta();
  drawMovingPasta();
}

function drawPlate() {
  fill(255);
  stroke(180);
  ellipse(200, 200, 300, 200);
  fill(230);
  ellipse(200, 200, 280, 180);
}

function drawPasta() {
  stroke(255, 204, 102);
  strokeWeight(4);
  for (let p of pasta) {
    let x2 = p.x + cos(p.angle) * p.len;
    let y2 = p.y + sin(p.angle) * p.len;
    line(p.x, p.y, x2, y2);
  }
}

function drawMovingPasta() {
  stroke(255, 180, 50);
  strokeWeight(4);
  for (let p of movingPasta) {
    p.x += random(-1, 1);
    p.y += random(-1, 1);
    let x2 = p.x + cos(p.angle) * p.len;
    let y2 = p.y + sin(p.angle) * p.len;
    line(p.x, p.y, x2, y2);
  }
}

function keyPressed() {
  for (let p of movingPasta) {
    p.x += random(-10, 10);
    p.y += random(-10, 10);
  }
}

function mousePressed() {
  for (let p of movingPasta) {
    p.angle += random(-PI / 4, PI / 4);
  }
}
