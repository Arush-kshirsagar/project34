//Create variables here
var dog,happyDog,database,foodS,foodStock;

function preload()
{
  //load images here
  happyDog=loadImage("dogImg1.png");
  dogimg=loadImage("dogImg.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  
  dog=createSprite(200,200,50,50);
  dog.addImage(dogimg);
  dog.scale=0.3
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);
  
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
// dog.display();
drawSprites();
textSize(20);
fill("blue");
text("Press up arrow To Feed the dog milk",100,100);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }
  database.ref('/').update({
  Food:x
  })


}


