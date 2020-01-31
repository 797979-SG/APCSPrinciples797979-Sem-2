class Orbiter{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.clr = color(random(255), random(255), random(255))
    this.id = id;
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
  var distToBoids;
  if(this.id >= 0){
    distToBoids = this.loc.dist(attraction.loc);
    if(distToBoids < 250){
      //attraction
    this.acc = p5.Vector.sub(attraction.loc, this.loc);
    this.acc.normalize();
    this.acc.mult(0.1);
  }
}
  this.vel.add(this.acc)
  this.loc.add(this.vel)
  this.vel.limit(5)
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
