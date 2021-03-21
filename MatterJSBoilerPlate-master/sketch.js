var paper,ground;
var box, box1,box2;
var engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ground_options ={
		isStatic: true
		
    }
	groundSprite=createSprite(width/2, 620, width,10);
	groundSprite.shapeColor=color("red")

	Engine.run(engine);
  
	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 boxSprite=createSprite(1150, 620, 200,10);
	boxSprite.shapeColor=color(255)

	box1Sprite=createSprite(1250,520, 10,200);
	box1Sprite.shapeColor=color(255)

	box2Sprite=createSprite(1050, 520, 10,200);
	box2Sprite.shapeColor=color(255)
	box = Bodies.rectangle(width/2, 620, width, 10 , {isStatic:true} );
	 World.add(world, box);

	 box1 = Bodies.rectangle(width/2, 620, width, 10 , {isStatic:true} );
	 World.add(world, box1);

	 box2 = Bodies.rectangle(width/2, 620, width, 10 , {isStatic:true} );
	 World.add(world, box2);

	 paper = new Paper(100,50);  
        
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  fill("white")
  drawSprites();
keyPressed();
  
	}
	function keyPressed(){
		if(keyCode===UP_ARROW){
			Matter.Body.applyForce(paper.body,paper.body.position,{x : 85,y : -85})

		}
  }