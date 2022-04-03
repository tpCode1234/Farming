class Corn extends BaseClass {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.image = loadImage("plant/corn_seed.svg");
    this.image1 = loadImage("plant/corn_grow.svg");
    this.image2 = loadImage("plant/corn_harvest.svg");
    this.stage;
    this.timer = 0;
  }
  display() {
    if (frameCount % 58 === 0) {
      this.timer += 1;
    }
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    if (this.timer <= 5) {
      //console.log("1");
      this.stage = 1;
      image(this.image, 0, 0, this.width, this.height);
    } else if (this.timer > 5 && this.timer <= 10) {
      //console.log("2");
      this.stage = 2;
      image(this.image1, 0, 0, this.width, this.height);
    } else if (this.timer > 10) {
      //console.log("3");
      this.stage = 3;
      image(this.image2, 0, 0, this.width, this.height);
      harvest_seasonco = true;
    }
    pop();
  }
}
