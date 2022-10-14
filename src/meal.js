function nameMenuItem(food) {

return 'Delicious ' + food

};

function createMenuItem(name, price, type)
{
return {

  name: name ,
  price: price ,
  type: type ,

};

}
function addIngredients(food,foodArray){

//i need to check each itom in the array for the new itom passing through, if the itom has a duplecet dont add new itom.

if (foodArray.includes(food)){

 }
else {

  return foodArray.push(food)
}
 }

function formatPrice(price){
  return '$'+ price


}
//take cost into function, return cast at discounted price
function decreasePrice(discountPrice){
  return discountPrice - (discountPrice * .1)


}





module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
};
