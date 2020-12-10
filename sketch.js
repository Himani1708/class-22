//name spacing
const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var eng, wld;
var ball;
var ground;

function setup() {
  createCanvas(400,400);
  eng=Engine.create();
  wld=eng.world;

  var ball_options={
    isStatic:false,
    restitution:1

  }

  var gr_options={
    isStatic:true
  }

  ball=Bodies.circle(200,100,20,ball_options)
  World.add(wld,ball);
 
  ground=Bodies.rectangle(200,380,400,20,gr_options)
  World.add(wld,ground);
  
}

function draw() {
  Engine.update(eng);
  background(0);  
  rectMode(CENTER)
  ellipseMode(RADIUS)
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  
  
}