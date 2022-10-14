function nameMenuItem(food) {

return 'Delicious ' + food

};

function createMenuItem(name, price, type)
{
return {
  //name, price, type
  //
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
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
};
