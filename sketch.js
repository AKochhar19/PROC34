const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var ball_img;
var bg;
function preload(){
  bg = loadImage("buldings.jpg")
  ball_img=loadImage("ball.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  //stand1 = new Stand(390,300,250,10);
  
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  
  //level two
  block2b = new Block(300,235,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  blockb = new Block(480,235,30,40);
  //level three
  block3b = new Block(300,195,30,40);
  block4b = new Block(330,195,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block5b = new Block(450,195,30,40);
  block6b = new Block(480,195,30,40);
  //top
  block7b = new Block(300,155,30,40);
  block8b = new Block(330,155,30,40);
  block9b = new Block(360,155,30,40);
  block16 = new Block(390,155,30,40);
  block10b = new Block(420,155,30,40);
  block11b = new Block(450,155,30,40);
  block12b = new Block(480,155,30,40);

  block1a = new Block(300,115,30,40);
  block2a = new Block(330,115,30,40);
  block3a = new Block(360,115,30,40);
  block4a = new Block(390,115,30,40);
  block5a = new Block(420,115,30,40);
  block6a = new Block(450,115,30,40);
  block7a = new Block(480,115,30,40);
  
  //level two
  block2ba = new Block(300,75,30,40);
  block8a = new Block(330,75,30,40);
  block9a = new Block(360,75,30,40);
  block10a = new Block(390,75,30,40);
  block11a = new Block(420,75,30,40);
  block12a = new Block(450,75,30,40);
  blockba = new Block(480,75,30,40);
  //level three
  block3ba = new Block(300,35,30,40);
  block4ba= new Block(330,35,30,40);
  block13a = new Block(360,35,30,40);
  block14a = new Block(390,35,30,40);
  block15a = new Block(420,35,30,40);
  block5ba = new Block(450,35,30,40);
  block6ba = new Block(480,35,30,40);
  
  
  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  
  rope = new Rope(this.ball,{x:150,y:50});

}
function draw() {
  background(bg); 
 
  //Engine.update(engine);
  
  textSize(20);
  fill("lightyellow");
  text("Drag the ball to destroy the blocks",300,30);
  textSize(10);
  ground.display();
  //stand1.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block2b.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  blockb.display();
  fill("turquoise");
  block3b.display();
  block4b.display();
  block13.display();
  block14.display();
  block15.display();
  block5b.display();
  block6b.display();
  fill("grey");
  block7b.display();
  block8b.display();
  block9b.display();
  block16.display();
  block10b.display();
  block11b.display();
  block12b.display();
  
  fill("skyblue");
  block1a.display();
  block2a.display();
  block3a.display();
  block4a.display();
  block5a.display();
  block6a.display();
  block7a.display();
  fill("pink");
  block2ba.display();
  block8a.display();
  block9a.display();
  block10a.display();
  block11a.display();
  block12a.display();
  blockba.display();
  fill("turquoise");
  block3ba.display();
  block4ba.display();
  block13a.display();
  block14a.display();
  block15a.display();
  block5ba.display();
  block6ba.display();
  fill("gold");
  imageMode(CENTER)
  image(ball_img ,ball.position.x,ball.position.y,40,40);

  rope.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}


