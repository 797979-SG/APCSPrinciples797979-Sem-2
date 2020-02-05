class Balls{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.clr = color(255,0,0)
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
  if(this.loc.x < 0){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.x > width){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.y < 0){
    this.vel.y = -this.vel.y;
  }
  if(this.loc.y > height){
    this.vel.y = -this.vel.y;
  }
}

  update(){
    var distToMainBall;
    var distToMainBall2;
    if(this.id >= 0){
      distToMainBall = this.loc.dist(attraction.loc);
      distToMainBall2 = this.loc.dist(repulsion.loc);
      if(distToMainBall < 250){
        //attraction
      this.acc = p5.Vector.sub(attraction.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.1);
    }
    if(distToMainBall2 < 250){
      //repulsion
      this.acc = p5.Vector.sub(this.loc, repulsion.loc);
      this.acc.normalize();
      this.acc.mult(0.5);
    }
    }
    this.vel.add(this.acc)
    this.loc.add(this.vel)
    this.vel.limit(2)
  }

  render(){
    fill(this.clr);
    ellipse(400,400,50,50);
  }

}//end ball
