var fixedRect, movingRect;
var sprite1,sprite2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  sprite1=createSprite(100,400,50,100);
  sprite2=createSprite(1000,400,50,100);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  sprite1.velocityX=5;
  sprite2.velocityX=-5;
}

function draw() {
  background(0,0,0);
  
  bounceOff(fixedRect,movingRect);
  bounceOff(sprite2,sprite1);
  
  drawSprites();
}

