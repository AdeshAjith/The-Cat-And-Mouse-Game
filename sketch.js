var tom, jerry;
var tomImage,jerryImage;
var tomRunning,jerryTeasing;
var garden,gardenImage;


function preload() {

    gardenImage = loadImage("garden.png");
    jerryImage = loadImage("jerryOne.png");
    tomImage = loadImage("tomOne.png");
    tomRunning = loadAnimation("tomTwo.png","tomThree.png");
    jerryTeasing = loadAnimation("jerryTwo.png","jerryThree.png");
    tomLastImage = loadImage("tomFour.png");
    jerryLastImage = loadImage("jerryFour.png")

}

function setup(){
   

    createCanvas(1000,800);
    
    garden = createSprite(500,400);
    garden.addImage(gardenImage);
   
    jerry = createSprite(200,580);
    jerry.addImage(jerryImage);
    jerry.addAnimation("Teasing",jerryTeasing);
    jerry.addAnimation("Stopping",jerryLastImage)

    jerry.scale = 0.1;

    tom = createSprite(700,580);
    tom.addImage(tomImage);
    tom.addAnimation("Running",tomRunning);
    tom.addAnimation("Stopping",tomLastImage)
    tom.scale = 0.12;

}

function draw() {

    background("white");
   
    keyPressed();

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
      tom.x = 258
      tom.scale = 0.15
      tom.velocityX = 0
      tom.changeAnimation("Stopping",tomLastImage)
      jerry.changeAnimation("Stopping",jerryLastImage)
    }

    drawSprites();
}


function keyPressed(){
  
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.changeAnimation("Running",tomRunning);
    tom.scale = 0.17;
        
    jerry.changeAnimation("Teasing",jerryTeasing);
        
  }
}
