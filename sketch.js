var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//apple = createApples();
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX;

  drawSprites();
}

function createApples(){
apple = createSprite(random(50,350),40,10,10);
apple.lifetime = 20;
apple.addImage(appleImg);
apple.velocityY = 2;
}
var select_sprites = Math.round(random(1,2));

if (frameCount % 80 == 0){
  if (select_sprites == 1){
    createApples();
  

    }
  }
