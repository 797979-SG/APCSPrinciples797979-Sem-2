//Sebastian Gomez
var boids = []
var attraction;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 30, 150);
  loadBoids(75)
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 20, 30);
  runBoids();
}

function loadBoids(n){
  for(var i = 0; i < n; i++){
    boids[i] = new Boid(random(width), random(height), random(-10, 10), random(-10, 10), i);

  }
}

function runBoids(){
  attraction.run()
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
  for(var i = 0; i < orbiters`.length; i++){
    boids[i].run();
  }
}
