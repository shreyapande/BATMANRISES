const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var thunder,thunder1;
var rand;
var t1,t2,t3,t4, w1,w2,w3,w4,w5,w6,w7,w8;
var boy;
var ground;

  var drops = [];
  var maxDrops = 100;
  var thunderFrame=0;

function preload(){
  t1= loadImage("Images/thunderbolt/1.png");
  t2= loadImage("Images/thunderbolt/2.png");
  t3= loadImage("Images/thunderbolt/3.png");
  t4= loadImage("Images/thunderbolt/4.png");
  
  w1= loadAnimation("WalkingFrame/walking_1.png", "WalkingFrame/walking_2.png", "WalkingFrame/walking_3.png", "WalkingFrame/walking_4.png", "WalkingFrame/walking_5.png", "WalkingFrame/walking_6.png", "WalkingFrame/walking_7.png", "WalkingFrame/walking_8.png");
  
 
}

function setup(){
    createCanvas(600, 800);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(300,500);
    boy= createSprite(300, 600, 10, 10);
    boy.addAnimation("boy", w1);
    boy.scale= 0.5
    ground=createSprite(300, 783, 800, 30);
   
    if(frameCount % 150 === 0){

      for(var i=0; i<maxDrops; i++){
          drops.push(new Drops(random(0,600), random(0,600)));
          
      }

  }
}

function draw(){
    background("black");
    Engine.update(engine);
        
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderFrame=frameCount;
        thunder = createSprite(random(10,570, 10, 10));
        var r= Math.round(random(1,4))
        switch(r){
          case 1:   thunder.addImage("thunder", t1);
          break
          case 2:   thunder.addImage("thunder", t2);
          break
          case 3:   thunder.addImage("thunder", t3);
          break
          case 4:   thunder.addImage("thunder", t4);
          break

          default:break
        }
      
        thunder.scale = random(0.3,0.6)
    }
      
    if(thunderFrame + 10 ===frameCount && thunder){
      thunder.destroy();
  }

  umbrella.display();

  //displaying rain drops
  for(var i = 0; i<maxDrops; i++){
      drops[i].Drop();
      drops[i].updateY()
      
  }
  
  drawSprites();

   }