class Boid{
  constructor(x, y, dx, dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.clr = color(random(255), random(255), random(255))
    this.orbiters = [];
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
      this.clr = color(random(255), random(255), random(255))
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
      this.clr = color(random(255), random(255), random(255))
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
      this.clr = color(random(255), random(255), random(255))
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      this.clr = color(random(255), random(255), random(255))
    }
  }

  update(){
    var distToMainBall;
    distToMainBall = this.loc.dist(mainBall.loc);
    if(distToMainBall < 250){
      this.acc = p5.Vector.sub(mainBall.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.1);
    }
    if(distToMainBall < 150){
      this.acc = p5.Vector.sub(this.loc, mainBall.loc);
      this.acc.normalize();
      this.acc.mult(0.5);
    }
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.limit(5);
    }

  render(){
    stroke(this.clr);
    var distToBoid
    for(var i = 0; i < boids.length; i++){
      distToBoid = this.loc.dist(boids[i].loc)
      if(distToBoid < 200){
        line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y)
      }
    }
  }
}
