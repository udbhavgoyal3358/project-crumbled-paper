
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(3000, 1000);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		resitution:0.3,
		friction:0,
		density:1.2
	}

	Matter.Bodies.circle()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display()
  
  drawSprites();
 
}



