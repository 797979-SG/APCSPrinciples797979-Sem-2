class Ball{
  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0)
    this.w = 25
    this.clr = color(random(255),random(255),random(255))
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
      this.clr = color(random(255),random(255),random(255))
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
      this.clr = color(random(255),random(255),random(255))
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
      this.clr = color(random(255),random(255),random(255))
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      this.clr = color(random(255),random(255),random(255))
    }
  }

  update(){
    if (mouseIsPressed === true){
      var mouseLoc = createVector(mouseX, mouseY);
      this.loc = p5.Vector.lerp(mouseLoc, mouseLoc, .89);
    }
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.limit(10);

  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }
}
