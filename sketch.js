var bg,bgImg;

var zombieGroup;



function preload(){
  

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  
}

function draw() {
  background(0); 


drawSprites();
}

