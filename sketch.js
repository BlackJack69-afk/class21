var fixedRect, movingRect,rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  rect1 = createSprite(200,500,40,70);
  rect1.shapeColor = "yellow";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  rect2 = createSprite(500,100,20,80);
  rect2.shapeColor = "yellow";
  //movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,rect2)){
    movingRect.shapeColor = "red";
  rect2.shapeColor = "red";

  } else {
movingRect.shapeColor = "green";
  rect2.shapeColor = "yellow";
  }
  

 
  drawSprites();
} 
