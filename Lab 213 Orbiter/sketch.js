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
  background(15, 15, 15, 10)
  count++
  if(count > 50000) count = 0;

  if(particles.length < 20 && count%3 ===0){
    loadParticle(1);
  }
}

function loadParticle(n){
  for(var i = 0; i < n; i++){
    particles[i] = new Particle(width/2, height/2);
  }
  for(var i = 0; i < particles.length; i++){
    if(particles[i].lifeSpan < 0){
      particles.splice(i, 1);
    }
    particles[i].run();
  }
}
