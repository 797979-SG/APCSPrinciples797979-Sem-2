class Firework {
	ArrayList < Particle > particles = new ArrayList();
	float xPos, yPos;
	color colour;

	Firework() {
		xPos = mouseX;
		yPos = mouseY;
		colour = color(random(50, 255), random(50, 255), random(50, 255));
		for (int iter = 0; iter < 150; iter++)
			particles.add(new Particle(this));
	}

	Firework(float x, float y) {
		xPos = x;
		yPos = y;
		colour = color(random(50, 255), random(50, 255), random(50, 255));
		for (int iter = 0; iter < 150; iter++)
			particles.add(new Particle(this));
	}


	void render() {
		for (Particle thisParticle: particles)
			thisParticle.render();
		if (particles.size() <= 0)
			show.remove(this);
	}
}
