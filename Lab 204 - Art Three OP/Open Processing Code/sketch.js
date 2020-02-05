ArrayList < Firework > show = new ArrayList();
bool firing = true;

void setup() {
	fullScreen();
	background(0);
}

void draw() {
	fill(0,50);
	noStroke();
	rect(0,0,width,height);

	if (firing)
		show.add(new Firework(random(width),random(height)));

	for (Firework thisFirework: show)
		thisFirework.render();
}

void mouseClicked() {
	show.add(new Firework());
}

void mouseDragged() {
	show.add(new Firework());
}

void keyPressed() {
	if (key == ' ')
		firing = !firing;
}

class Particle {
	Firework parent;
	float xPos, yPos, size, angle, speed;
	float timeSync, timeAlive;
	color colour;

	Particle(Firework p) {
		parent = p;
		xPos = parent.xPos;
		yPos = parent.yPos;
		size = random(5,10);
		angle = radians(random(0, 360));
		speed = random(1,3);
		timeAlive = random(500, 1500);
		timeSync = millis() + timeAlive;
		colour = parent.colour;
	}

	void render() {
		if (millis() < timeSync) {
			size-=0.1;
			xPos += sin(angle) * speed;
			yPos += cos(angle) * speed;
			strokeWeight(size);
			stroke(colour);
			point(xPos, yPos);
		} else {
			parent.particles.remove(this);
		}
	}
}

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
