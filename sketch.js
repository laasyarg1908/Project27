
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObj, bob3, bob1, bob2, bob4, bob5, rope1, rope2,rope3, rope4, rope5;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObj = new Roof(475, 100, 550, 20);
	bob1 = new Bob(275, 400, 100);
	bob2 = new Bob(375, 400, 100);
	bob3 = new Bob(475, 400, 100);
	bob4 = new Bob(575, 400, 100);
	bob5 = new Bob(675, 400, 100);

	rope1 = new Rope(bob1.body, roofObj.body, 2, 0);
	rope2 = new Rope(bob2.body, roofObj.body, 2, 0);
	rope3 = new Rope(bob3.body, roofObj.body, 2, 0);
	rope4 = new Rope(bob4.body, roofObj.body, 2, 0);
	rope5 = new Rope(bob5.body, roofObj.body, 2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  Engine.update(engine);

  roofObj.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 
}



