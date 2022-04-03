class Dirt extends BaseClass {
  constructor(x, y, width, height, angle) {
    super(x, y, width, height, angle);
    this.image = loadImage("plant/land.svg");
    Matter.Body.setAngle(this.body, angle);
  }
}
