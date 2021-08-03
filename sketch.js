const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var rope1
var rope2
var rope3
var rope4
var rope5

var bob1
var bob2
var bob3
var bob4
var bob5

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	bob1 = Bodies.circle(250,50,50,bob_options)
	World.add(world,bob1);
	bob2 = Bodies.circle(260,50,50,bob_options)
	World.add(world,bob2);
	bob3 = Bodies.circle(270,50,50,bob_options)
	World.add(world,bob3);
	bob4 = Bodies.circle(280,50,50,bob_options)
	World.add(world,bob4);
	bob5 = Bodies.circle(290,50,50,bob_options)
	World.add(world,bob5);

	var bob_options={
		restitution = 0.5
	}

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	rope1=new rope(bob1,roof,-80,0)
	rope2=new rope(bob2,roof,-70,0)
	rope3=new rope(bob3,roof,-60,0)
	rope4=new rope(bob4,roof,-50,0)
	rope5=new rope(bob5,roof,-40,0)

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  ellipse(bob1.position.x,bob1.position.y)
  ellipse(bob2.position.x,bob2.position.y)
  ellipse(bob3.position.x,bob3.position.y)
  ellipse(bob4.position.x,bob4.position.y)
  ellipse(bob5.position.x,bob5.position.y)
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.5,y:0})
	}
}
