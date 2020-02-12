var particles = []

class Firework {
	constructor(xPos, yPos){
		this.loc = createVector(xPos,yPos)
		this.clr = color(random(50, 255), random(50, 255), random(50, 255));
		for (var i = 0; i < 150; i++)
			this.particles.add(new Particle(this.particles));
	}

	 render(){
		for (var i = 0; i < particles.length; i++)
			particles[i].render();
		if (particles.length() <= 0)
			show.remove(this.particles);
	}
}
