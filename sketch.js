
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject,slingshot;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300,650);
	engine = Engine.create();
	world = engine.world;

  var render =Render.create({
		element: document.body,
		engine: engine,
		options: {
			width:600,
			height:700,
			wireframe:false
		}
  })

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,200,30);
	mango3=new mango(900,250,30);
	mango4=new mango(900,170,30);
	mango5=new mango(1000,100,30);
	mango6=new mango(1200,100,30);
	mango7=new mango(1200,200,30);
	mango8=new mango(1100,170,30);
	mango9=new mango(1100,30,30);
	mango10=new mango(1050,50,30);
	mango11=new mango(1100,250,30);

  

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stoneObj=new stone(235,420,30);
	slingshot = new SlingShot(stoneObj.body,{x:235, y:420});
	
	Engine.run(engine);
  //Render.run(render);
}

function draw() {
  Engine.update(engine);

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  stoneObj.display();
  groundObject.display();
  slingshot.display();

  textSize(25);
  text("Press Space  to get a second Chance to Play",20,50);

}
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
  if (keyCode === 32 ) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
    slingshot.attach(stoneObj.body);
  }
}

function detectollision(stone,mango){
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   if(distance<=mango.r+stone.r)
   {
     Matter.Body.setStatic(mango.body,false);
   }
}


