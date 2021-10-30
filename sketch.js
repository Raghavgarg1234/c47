var bgImg,bg;
var bird,birdImg

function preload () {
  bgImg = loadImage("BackGround.jpg");
  birdImg = loadImage("Bird.png");
  obImg =loadImage("Obstacles.png")
}

function setup(){
  createCanvas(500,500);
  bg=createSprite(250,250,500,500);
  bg.velocityX = -2 
  bg.scale=0.6
  bg.addImage(bgImg);
  bird = createSprite(50,200,10,10);
  bird.addImage(birdImg)
  bird.scale = 0.13;
}

function draw() {
  background (bgImg);
  if (bg.x<0) {
    bg.x = bg.width/2
 }

  if (keyDown("space")){

   bird.velocityY = -12

  }
  bird.velocityY+=0.8;
  spawnObstacles1();
  spawnObstacles2()
  drawSprites ();
}
function spawnObstacles1(){
  if (frameCount%80 == 0 ){
    var ob = createSprite(300,100,10,10);
    ob.velocityX=-3;
    ob.addImage(obImg)
    
    ob.scale=random(0.3,0.4)

  }
}

function spawnObstacles2(){
  if (frameCount%80 == 0 ){
    var ob2 = createSprite(300,400,10,10);
    ob2.velocityX=-3;
    ob2.addImage(obImg)
    
    ob2.scale=random(0.1,0.3)

  }
}