var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
   
}


function setup(){

canvas = createCanvas(800,600);

block1 = createSprite(90,580,200,30)
block1.shapeColor = "blue";
block2 = createSprite(295,580,200,30)
block2.shapeColor = "yellow";
block3 = createSprite(500,580,200,30)
block3.shapeColor = "red";
block4 = createSprite(705,580,200,30)
block4.shapeColor = "green";

ball = createSprite(400,300,30,30)
ball.shapeColor = "white";
ball.velocityY = 5;
ball.velocityX = 4.5;

}

function draw() {
background("black");

edges = createEdgeSprites()
ball.bounceOff(edges)

if(ball.isTouching(block1)){
  ball.shapeColor = "blue";
}

if(ball.isTouching(block2)){
    ball.shapeColor = "yellow";
  }

  if(ball.isTouching(block3)){
    ball.shapeColor = "red";
  }

  if(ball.isTouching(block4)){
    ball.shapeColor = "green";
  }



    
drawSprites();
}
