// ArrayList < Firework > show = new ArrayList();
var show = []
var firing = true

function setup() {
	var cnv = createCanvas(1000,1000)
	cnv.position((windowWidth - width)/2,30)
	background(0);
}

function draw() {
	fill(0,50);
	noStroke();
	rect(0,0,width,height);

	if (firing)
	show.add(new Firework(random(width),random(height)));

	for (i = 0; i < show.length; i++)
	show[i].render();
}

function mouseClicked(){
	show.add(new Firework(mouseX, mouseY));
}

function mouseDragged(){
	show.add(new Firework(mouseX, mouseY));
}

function keyPressed(){
	if (key == ' ')
	firing = !firing;
}
