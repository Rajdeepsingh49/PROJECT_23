var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	box1Sprite=createSprite(390,655,200,10);
	box1Sprite.shapeColor=color("red");
	 
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("black")


	engine = Engine.create();
	world = engine.world;

	

	packageBody = Bodies.circle(width/2 , 200 , 5 ,  {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	
	 
	 box1 = Bodies.rectangle(390,655,200,45,{isStatic:true});
	 World.add(world, box1);

	 

	 box2 = createSprite(295,620,10,80,{isStatic:true});
	 box2.collide=packageSprite;
	 box2.shapeColor=color("red");

	 box3 = createSprite(485,620,10,80,{isStatic:true});
	 box3.collide(packageSprite);
	 box3.shapeColor=color("red");

	 


	Engine.run(engine);
  
}


function draw() {
	keyPressed() ;
  rectMode(CENTER);
  background("yellow");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (touches.length>0||keyCode === DOWN_ARROW) {
    
    Matter.Body.setStatic(packageBody,false);
     
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}



