
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine,world;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var polygon,slingshot;


function setup() {
	createCanvas(1500, 500);
  engine = Engine.create();
	world = engine.world;

  
  polygon= new Polygon(50,200,5);
  rubberband = new RubberBand(polygon.body,{x :100, y: 200});

	/*ground1= new Ground(1000,300,100000,15);
  ground2= new Ground(1000,350,250,15);
  ground3= new Ground(690,500,1690,24);*/
	 

    /*block1 = new Block(650,295,30,40);
    block2 = new Block(660,295,30,40);
    block3 = new Block(670,295,30,40);
    block4 = new Block(680,295,30,40);
    block5 = new Block(690,295,30,40);
    block6 = new Block(630,295,30,40);
    block7 = new Block(640,295,30,40);

    block8 = new Block(645,275,30,40);
    block9 = new Block(655,275,30,40);
    block10 = new Block(665,275,30,40);
    block11 = new Block(675,275,30,40);
    block12 = new Block(685,275,30,40);
    block101=new Block(630,275,30,40);

    block13 = new Block(650,255,30,40);
    block14 = new Block(660,255,30,40);
    block15 = new Block(670,255,30,40);
    block102=new Block(685,255,30,40);
    block103=new Block(640,255,30,40);


    block16 = new Block(390,155,30,40);*/
    //blok104 = new Block()
    /*block17= new Block(750,150,30,40);
    block18= new Block(780,150,30,40)
    block19= new Block(810,150,30,40)
    block20= new Block(840,150,30,40)
    block21= new Block(870,150,30,40)

    block22= new Block(780,110,30,40)
    block23= new Block(810,110,30,40)
    block24= new Block(840,110,30,40)

    block25= new Block(810,70,30,40)*/
	//Engine.run(engine);
  ground1= new Ground(1000,500,2000,25);
  ground2= new Ground(385,280,230,15);
  ground3= new Ground(800,160,250,15);
	 

    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);

    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);

    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);

    block16 = new Block(390,155,30,40);

    block17= new Block(750,150,30,40);
    block18= new Block(780,150,30,40)
    block19= new Block(810,150,30,40)
    block20= new Block(840,150,30,40)
    block21= new Block(870,150,30,40)

    block22= new Block(780,110,30,40)
    block23= new Block(810,110,30,40)
    block24= new Block(840,110,30,40)

    block25= new Block(810,70,30,40)
}


function draw() {
  Engine.update(engine)
  //rectMode(CENTER);
  background("brown");
  

  polygon.display();
  rubberband.display();

  fill("chocolate");
  ground1.display();
ground2.display();
ground3.display();

fill("palegreen");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();


fill("yellow")
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
//block101.display();

fill("palegreen");
block13.display();
block14.display();
block15.display();
//block102.display();
//block103.display();
fill("yellow");


block17.display();
block18.display();
block19.display();
block20.display();
block21.display();



fill("palegreen");

block22.display();
block23.display();
block24.display();
fill("yellow");
block16.display();

block25.display();




fill("snow")
textSize(20)
text ("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.",850,50)
fill ("mightyrose")
text ("Press the space key for a second chance.",1000,75)


//drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rubberband.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:100,y:100})
    rubberband.attach(polygon.body)
  }
}

