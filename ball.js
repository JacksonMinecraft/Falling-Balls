class Ball {
  constructor(x, y, width, height, colour) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.width = width;
    this.height = height;
    this.colour = colour;
  }

  update() {
    this.pos.y = this.pos.y + this.vel.y;
    if (this.pos.y + this.height / 2 >= window.innerHeight && this.vel.y > 0 || this.pos.y - this.height / 2 <= 0 && this.vel.y < 0) {
      this.vel.y = this.vel.y * -1;
    } else {
      this.vel.y = this.vel.y + 0.1;
    }
  }

  show() {
    noStroke();
    fill(this.colour);
    ellipse(this.pos.x, this.pos.y, this.width, this.height)
  }
}
