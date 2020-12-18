
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObject = new Ground(590,600,1200,20);
  box1 = new Box(590,590,150,10);
  box2 = new Box(520,540,10,100);
  box3 = new Box(660,540,10,100);
  paper1 = new paper(100,595,25);

 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObject.display();
  box1.display();
  box2.display();
  paper1.display();
  box3.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:22,y:-22});
  }
}




