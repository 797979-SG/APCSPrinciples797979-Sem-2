//Sebastian Gomez
var particles = []
var toggle;
var count;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(15)
  toggle = 1;
  count = 0;
}

//  The draw function is called @ 30 fps
function draw(){
  count++
  if(count > 50000) count = 0;

  if(particles.length < 20 && count%3 ===0){
    loadParticle();
  }
}

function loadParticle(n){
  for(var i = 0; i < n; i++){
    particle[i] = new Particle(random(width), random(height), random(-10, 10), random(-10, 10) i);
}
