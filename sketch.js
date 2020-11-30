var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  obstacleGroup=createGroup();
  foodGroup=createGroup();
}


function draw() {

  if(ground.x<0){
    
    ground.x=ground.width/2;
    
  }
  
  if(keyDown("space")){
    
    monkey.velocityY=-12;
    
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  background(225);
  
  food();
  
  monster();

  stroke("white");
  textSize(20);
  fill("white");
  text("Score-"+score,500,50);

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime-"+survivalTime,100,50);

  drawSprites();
}

function food(){

 if(frameCount % 80 === 0){
    
   banana = createSprite(300,200,20,20);
   banana.scale=0.1;
   banana.addImage("banana",bananaImage);
   banana.y = Math.round(random(120,200));
   banana.velocityX=-6;
   banana.lifetime=50;
   
   foodGroup.add(banana);
}

}

function monster(){
  
  if(frameCount % 300 === 0){
    
    
   obstacle = createSprite(400,315,20,20);
   obstacle.addImage("monster",obstacleImage);
   obstacle.velocityX=-6;
   obstacle.lifetime=70;   
   obstacle.scale=0.2; 
    
   obstacleGroup.add(obstacle);
  }
  
}