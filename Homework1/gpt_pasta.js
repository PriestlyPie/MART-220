     function setup() {
        createCanvas(400, 400);
        noLoop();
      }
      
      function draw() {
        background(220);
        drawPlate();
        drawPasta();
        drawSauce();
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
        for (let i = 0; i < 100; i++) {
          let x = random(120, 280);
          let y = random(150, 250);
          let length = random(30, 70);
          let angle = random(TWO_PI);
          let x2 = x + cos(angle) * length;
          let y2 = y + sin(angle) * length;
          line(x, y, x2, y2);
        }
      }
      
      function drawSauce() {
        noStroke();
        fill(200, 50, 50, 200);
        for (let i = 0; i < 10; i++) {
          let x = random(140, 260);
          let y = random(160, 240);
          let r = random(20, 50);
          ellipse(x, y, r, r);
        }
      }
      