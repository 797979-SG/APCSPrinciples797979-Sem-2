var boids = []
var mainBall;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  fill(200,30,150)
  loadBoids(100);
}

//  The draw function is called @ 30 fps
function draw(){
  background(20,20,20,50);
  runBoids();
}

function loadBoids(n){
  mainBall = new Ball(width/2, height/2, random(-1,1), random(-1,1));
  for(var i = 0; i < n; i++){
    boids[i] = new Boid(random(width), random(height), random(-1,1), random(-1,1));
  }
}

function runBalls(){
  mainBall.run();
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}
