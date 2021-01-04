class food
{
    constructor()
    {
      //image
      this.milk = loadImage("Milk.png")
      
    }

  getFoodStock ()
  {
    var food = data.ref('foods')
    food.on("value",function(data){
     foodStock =  data.val();
    })
  }

  updateFoodStock (food)
  {
    database.ref('/').uapdate({
      foodStock : food
    })
    
  }

  
}