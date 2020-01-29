class Ships{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.clr = color(random(255), random(255), random(255))
    this.w = 10
    this.id = id;
    if(this.id < 0)(this.w = 100)
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
  if(this.id >= 0){
    distToMainBall = this.loc.dist(attraction.loc);
    if(distToMainBall < 1000){
      //attraction
    this.acc = p5.Vector.sub(attraction.loc, this.loc);
    this.acc.normalize();
    this.acc.mult(0.1);
  }
}
  this.vel.add(this.acc)
  this.loc.add(this.vel)
  this.vel.limit(8)
  if (distToMainBall < 100) {
  attraction = new Planet(random(width),random(height),random(-50,50), random(-50,50), -1);
}
}
render(){
  fill(this.clr);
  this.angle = this.vel.heading() + PI/2;
  push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    triangle(-10, 16, 10, 16, 0, -16);
  pop();
}

}//end of Ships class
