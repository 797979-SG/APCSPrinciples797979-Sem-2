class Orbiter{
  constructor(x, y){
    this.loc = createVector(0,0);
    this.lifeSpan = random(1000)
    var r = random(255);
    var g = this.lifeSpan%255;
    var b = random(255);
    this.clr = color(r,g,b);
    this.fclr = color(r,g,b,10);
    this.angle = random(TWO_PI)
  }


}
