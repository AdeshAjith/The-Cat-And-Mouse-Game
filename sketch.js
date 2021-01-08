var tom, jerry;
var tomImage,jerryImage;
var tomRunning,jerryTeasing;
var tomStop,jerryStop;
var garden,gardenImage;


function preload() {

    gardenImage = loadImage("garden.png");
    jerryImage = loadImage("jerryOne.png");
    tomImage = loadImage("tomOne.png");
    tomStop = loadImage("tomFour.png");
    jerryStop = loadImage("jerryFour.png");
    tomRunning = loadAnimation("tomTwo.png","tomThree.png");
    jerryTeasing = loadAnimation("jerryTwo.png","jerryThree.png");

}

function setup(){
   

    createCanvas(1000,800);
    
    garden = createSprite(500,400);
    garden.addImage(gardenImage);
   
    jerry = createSprite(200,580);
    jerry.addImage(jerryImage);
    jerry.addImage("Stop",jerryStop);
    jerry.addAnimation("Teasing",jerryTeasing)
    jerry.scale = 0.12;
    jerry.debug = true;

    tom = createSprite(700,580);
    tom.addImage(tomImage);
    tom.addImage("Stopping",tomStop)
    tom.addAnimation("Running",tomRunning);
    tom.scale = 0.12;
    tom.debug = true;


    //create tom and jerry sprites here

}

function draw() {

    background("black");
  
    if(tom.x-jerry.x <tom.x/2+jerry.x/2){
      tom.addImage(tomStop);
      tom.changeImage("Stopping",tomStop);
      tom.velocityX = 0;
     
      jerry.changeImage("Stop",jerryStop);
    }
  
    keyPressed();
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    text(mouseX+','+mouseY,10,45);
}


function keyPressed(){
  
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.changeAnimation("Running",tomRunning);
    tom.scale = 0.15;
    
    
    jerry.changeAnimation("Teasing",jerryTeasing);
    
    
  }

  //For moving and changing animation write code here


}
