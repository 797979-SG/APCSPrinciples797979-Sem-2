class Particle {
  constructor(xPos, yPos, speed, angle, timeSync, timeAlive){
	// Firework parent;
	this.loc = createVector(xPos, yPos)
  this.clr = color(random(255), random(255), random(255));
  this.vel = createVector(speed)
  this.size = size
  this.angle = angle
	this.timeSync = timeSync
  this.timeAlive = timeAlive
  this.clr = color(random(255), random(255), random(255));
}
	Particle(Firework p) {
		this.parent = p;
		this.xPos = parent.xPos;
		this.yPos = parent.yPos;
		this.size = random(5,10);
		this.angle = radians(random(0, 360));
		this.speed = random(1,3);
		this.timeAlive = random(500, 1500);
		this.timeSync = millis() + this.timeAlive;
		this.clr = parent.clr;
	}

function draw(){
		if (millis() < this.timeSync) {
			this.size-=0.1;
			this.xPos += sin(this.angle) * this.speed;
			this.yPos += cos(this.angle) * this.speed;
			strokeWeight(this.size);
			stroke(this.colour);
			point(this.loc.xPos, this.loc.yPos);
		} else {
			parent.particles.remove(this);
		}
	}
}
