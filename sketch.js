
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,150,600,100);
	bob1 = new Bob(150,500,100)
	bob2 = new Bob(250,500,100)
	bob3 = new Bob(350,500,100)
	bob4 = new Bob(450,500,100)
	bob5 = new Bob(550,500,100)
    chain = new chain(groundObject.body,{x:235,y:425})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  

 groundObject.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
chain.display();
drawSprites();
}

