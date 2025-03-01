let x = 200
let y = 200

var timerValue = 10;
var startButton;
var hotdog;
var hotdogX = 200;
var hotdogY = 200;
var hotdogSpeed = 2;
var robot;
var robotX = 150;
var robotY = 200;
var robotSpeed = 3;
var cream;
var creamX = 200;
var creamY = 150;
var creamSpeed = 1;

var newFont;
var timerText = 0;

function preload() {
    hotdog = loadimage('images/hot_zawg.png')
    robot = loadimage('images/robort.png')
    cream = loadimage('images/cream.png')
    newFont = loadFont('fonts/PottaOne-Regular.ttf');
}

function setup() {
  createCanvas(400, 400);
  setInterval(timeIt, 1000)
  
}

function draw() {
    background(220)
    Image(hotdog, hotdogX, hotdogY)
        if(timerValue <= 1) {
            hotdogX += 10;
            hotdogY += 10;
        }
    Image(robot, robotX, robotY)
    Image(cream, creamX, creamY)
    noStroke();
    fill(210, 180, 140);
    circle(x, y, 300);
    fill(155, 0, 0);
    circle(x, y, 275);
    fill(255, 255, 200);
    circle(x, y, 270);
    fill(200, 50, 50);
    for (let i = 0; i < 20; i++) {
    let x = random(100, 300);
    let y = random(100, 300);
    let z = 40;
    circle(x, y, z);
  }
    fill(150, 75, 0)
    for (let i = 0; i < 10; i++) {
    let x = random(100, 300);
    let y = random(100, 300);
    let z = random(15, 30);
    let w = random(15, 30);
    rect(x, y, z, w)
    fill(0);
    textFont(newFont);
    textSize(25);
    text("Jonah Broome",190, 170);
    text("Da Pizza", 50, 50);
  }
}

function mouseDragged() {
    x = mouseX;
    y = mouseY;
}
