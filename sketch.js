
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new bob(200,500,50);
	bob2 = new bob(250,500,50);
	bob3 = new bob(300,500,50);
	bob4 = new bob(350,500,50);
	bob5 = new bob(400,500,50);

	ground1 = new ground(400,300,300,30);
	ground2 = new ground(400,700,800,20);

	rope1 = new rope(bob1.body,ground1.body,-100,0);
	rope2 = new rope(bob2.body,ground1.body,-50,0);
	rope3 = new rope(bob3.body,ground1.body,0,0);
	rope4 = new rope(bob4.body,ground1.body,50,0);
	rope5 = new rope(bob5.body,ground1.body,100,0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  ground1.display();
  ground2.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



