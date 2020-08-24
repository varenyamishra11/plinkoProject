const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Render = Matter.Render;
	
var world,engine;


var ground;
var plinkos = [];
var division = [];
var particles = [];
var divisionHeight = 300

function setup() {
	createCanvas(480, 800);
	engine = Engine.create();
  world = engine.world;
  ground=new Ground(240,790,width,20)

   for ( var j= 40; j<= width;j=j+50) {
    plinkos.push(new Plinko(j,75,10))
   }

   for ( var j = 40; j<= width-10 ; j=j+50) {
    plinkos.push(new Plinko(j,125,10))
   }
   
   for ( var j = 40; j<= width-10;j=j+50) {
    plinkos.push(new Plinko(j,175,10))
   }

   for ( var j = 40; j<= width-10;j=j+50) {
    plinkos.push(new Plinko(j,225,10))
   }

   for (var k = 0; k <=width;k = k+80){
    division.push(new Divisions(k,height-divisionHeight/2 ,10,divisionHeight));
  }  

   /*if(frameCount % 60 ===0){
     particles.push(new Particle(random(width/2-10,width/2+10),10,10))
   }
*/
   

}
 
   function draw() {
    background(7);
   
  ground.display();
    
 
 /* for (var j = 0; j<=plinkos.length;j++){
    plinkos[j].display();
  }

  for (var j = 0; j<=plinkos.length;j++){
    plinkos[j].display();
  }

  for (var j = 0; j<=plinkos.length;j++){
    plinkos[j].display();
  }

  for (var j = 0; j<=plinkos.length;j++){
    plinkos[j].display();
  }*/

  for (var k = 0; k<=division.length;k++){
    division[k].display();
  }

// for (var t = 0; t<=plinkos.length;t++){
    //particles[j].display();
  //}
  }

 



