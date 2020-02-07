ArrayList < Firework > show = new ArrayList();
bool firing = true;

function setup() {
	fullScreen();
	background(0);
}

function draw() {
	fill(0,50);
	noStroke();
	rect(0,0,width,height);

	if (firing)
	show.add(new Firework(random(width),random(height)));

	for (Firework thisFirework: show)
	thisFirework.render();
}

function mouseClicked() {
	show.add(new Firework());
}

function mouseDragged() {
	show.add(new Firework());
}

function keyPressed() {
	if (key == ' ')
	firing = !firing;
}
