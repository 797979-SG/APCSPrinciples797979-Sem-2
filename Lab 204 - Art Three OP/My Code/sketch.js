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
