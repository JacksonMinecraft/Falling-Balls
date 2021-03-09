var clicks = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function mouseClicked() {
  var ballColour = [Math.random() * 256, Math.random() * 256, Math.random() * 256];

  fill(ballColour);
  stroke(ballColour);
  ellipse(mouseX, mouseY, 25, 25);

  clicks += 1;
  if (clicks == 25) {
    redraw();
    clicks = 0;
  }
  return false;
}

function draw() {
  background('orangered');
  noLoop();
}
