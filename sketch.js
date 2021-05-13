
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var leftSide,rightSide,bottom;

function preload()
{

	//paper_img=loadImage("paper.png")
	
}

function setup() {
	createCanvas(displayWidth, displayHeight-120);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(100,displayHeight - 180,20);
	ground= new Ground(displayWidth/2,displayHeight-170,displayWidth,20);

	// leftSide=new Dustbin(450,560,20,100);
	// rightSide=new Dustbin(650,560,20,100);
	dustbin=new Dustbin(displayWidth - 170,displayHeight-180);

	//Engine.run(engine);
  
}


function draw() {
	background(0);
  Engine.update(engine);
  //rectMode(CENTER);
  
  paper.display();
  
  ground.display();
  dustbin.display();

//   leftSide.display();
//   rightSide.display();

  //drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-90});
		//Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}

}

