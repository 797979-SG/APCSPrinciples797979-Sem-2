class Particle {
  constructor(xPos, yPos, speed, p){
	// Firework parent;
	this.loc = createVector(xPos, yPos)
  this.clr = color(random(255), random(255), random(255));
  this.vel = createVector(speed)
  this.size = random(5,10);
  this.angle = radians(random(0, 360));
  this.speed = random(1,3);
  this.timeAlive = random(500, 1500);
	this.timeSync = millis() + this.timeAlive;
  this.clr = color(random(255), random(255), random(255));
  this.parent = p;
}

  particle(){
		if (millis() < this.timeSync) {
			this.size -= 0.1;
			this.xPos += sin(this.angle) * this.speed;
			this.yPos += cos(this.angle) * this.speed;
			strokeWeight(this.size);
			stroke(this.clr);
			point(this.loc.xPos, this.loc.yPos);
		} else {
			this.parent.particles.remove(this);
		}
	}
}
