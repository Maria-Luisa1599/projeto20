
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var groundObj;
var bloco1, bloco2, bloco3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var plane_options={
		isStatic: true
	}

    var bloco1_Opcoes = {
		restutition:0.5,
		friction:0.02,
	    frictionAir:0
	}
    var bloco2_Opcoes = {
		restutition:0.7,
		friction:0.01,
	    frictionAir:0.1
	}
    var bloco3_Opcoes = {
		restutition:0.01,
		friction:1,
	    frictionAir:0.3
	}


	groundObj = Bodies.rectangle(width/2,670,width,20, plane_options);
    World.add(world, groundObj);

	bloco1 = Bodies.circle(220,10,10,bloco1_Opcoes)
	World.add(world,bloco1);

	bloco2 = Bodies.rectangle(110,50,10,15,bloco2_Opcoes)
	World.add(world,bloco2);

	bloco3 = Bodies.circle(350,50,15,bloco3_Opcoes)
	World.add(world,bloco3);

 	fill("black");
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background("white");
  rect(groundObj.position.x, groundObj.position.y, width, 20)
  ellipse(bloco1.position.x, bloco1.position.y,10, 10);
  Engine.update(engine);
  rect(bloco2.position.x, bloco2.position.y, 10, 15);
  ellipse(bloco3.position.x, bloco3.position.y,15, 15);
}

