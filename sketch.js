//Create variables here
var canvas;
var feed,add;
var database;
var dog,dogimg,happydog;
var foodStock,milk,foodObj;


function preload()
{
  dogimg = loadImage ("dogImg.png")
  happydog = loadImage ("hdog.png")
}

function setup() {
  canvas = createCanvas(1000, 500);

  //connect database
  database = firebase.database()
 
  //dog
  dog = createSprite(850,300,10,10)
  dog.scale = 0.2
  dog . addImage(dogimg)
  
  //buttons
  feed = createButton("Feed The Dog ^-^")
  feed.position(950,80)

  add = createButton("Add Food ^-^")
  add.position(1100,80)
  add.mousePressed(addFood)

  //food class object
  foodObj = new food;

}

function draw() {  
  background (46, 139, 87)

  
  drawSprites();

}

function addFood ()
{
  foodStock++
  foodObj.upfateFoodStock
  
}

function feedfood ()
{
  dog.addImage(happydog)

  
}