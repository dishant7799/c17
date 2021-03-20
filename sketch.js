//Game States
var PLAY=1;
var END=0;
var gameState=1;

var knife;
var knifeImage ;
var fruit,fruit1,fruit4;
var fruitGroup,monsterGroup;
var monster,monsterimg;

function preload(){
  
  knifeImage = loadImage("knife.png");
  fruit1=loadImage("fruit1.png");
  fruit4=loadImage("fruit4.png");
  monsterimg=loadImage("alien1.png");
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  score=0;
  //create fruit and monster Group variable here
  fruitGroup=new Group();
  monsterGroup=new Group();
  
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
    
    //calling fruit and monster function
    Fruits();
    Monster();
    
    
    // Move knife with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
  if(fruitGroup.isTouching(knife)){
    fruitGroup.destroyEach();
    score=score+1;
  }
    if(monsterGroup.isTouching(knife)){
    monsterGroup.destroyEach();
    knife.velocityX=0;
      knife.velocityY=0;
  } // Increase score if knife touching fruit
   
    // Go to end state if knife touching enemy
      
  }
  
  drawSprites();
  
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}

function Fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1);
    }
    else{
       fruit.addImage(fruit4);
    }
    fruit.y = Math.round(random(50,340));
    fruit.velocityX=-7;
    fruit.setLifetime=100;
    fruitGroup.add(fruit);
  }
  
}
 
function Monster(){
  if(World.frameCount%100===0){
    monster=createSprite(400,200,20,20);
    monster.addImage(monsterimg);
    monsterGroup.add(monster);
    monster.velocityX=-7;
  }
}



