var ballColour = [0, 0, 0], vallRadius;

let count;
let balls = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noLoop();
}

function mouseClicked() {
  ballColour = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
  ballRadius = Math.random() * 50 + 25;
  count = balls.push(new Ball(mouseX, mouseY, ballRadius, ballRadius, ballColour));
  loop();
  return false;
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background('black');
  var i;
  for (i = 0; i < count; i++) {
    balls[i].update();
    balls[i].show();
  }
}
