class Particle{
  constructor(x, y){
    this.loc = createVector(x, y);
    this.vel = createVector(random(-.3, .3), random(-.3, .3));
    this.acc = createVector(0,0);
    this.rad = random(11,22);
    this.lifeSpan = random(1000)
    var r = random(255);
    var g = this.lifeSpan%255;
    var b = random(255);
    this.clr = color(r,g,b);
    this.fclr = color(r,g,b,10);
    this.orbiters = [];
    this.loadOrbiters(1)
    this.angle = random(TWO_PI)
  }

  loadOrbiters(n){
    for(var i = 0; i < n; i++){
      this.orbiters.push(new Orbiter(5 , color(120,98,40)))
    }
  }

  run(){
    this.update();
    this.render();
  }

  update(){
    if(toggle === 1){
      this.vel.add(this.acc);
      this.vel.limit(55)
      this.loc.add(this.vel)
      this.lifeSpan -= 1
      this.rad += 0.02
      this.angle += .41
    }
  }

  render(){
    strokeWeight(0.25)
    stroke(this.clr)
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad)
    for(var i = 0; i <this.orbiters.length; i++){
      var ox = this.loc.x + 30*cos(0);
      var oy = this.loc.y + 30*sin(0);
    }
  }
}
