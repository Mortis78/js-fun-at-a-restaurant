function createRestaurant(restaurantName){
  var restaurant = {
    name:restaurantName,
    menus: {
      breakfast:[],
      lunch:[],
      dinner:[]
  }
}
return restaurant
}
function addMenuItem(restaurant,menueItem){

  //restaurant.menus.lunch.push(foodItem);
  if (menueItem.type === "breakfast" && !restaurant.menus.breakfast.includes(menueItem)) {
    restaurant.menus.breakfast.push(menueItem)

  } else if (menueItem.type === "lunch" && !restaurant.menus.lunch.includes(menueItem)) {
    restaurant.menus.lunch.push(menueItem)

  } else if (foodItem.type === "dinner" && !restaurant.menus.dinner.includes(menueItem)) {
    restaurant.menus.dinner.push(menueItem)
  };
  return restaurant
}
















//   for (var i = 0; i < restaurant.menus.lunch.length; i++){
// //  console.log(' first step')
//     if (menueItem.type === 'lunch' &&
//     restaurant.menus.lunch[i].name !== menueItem.name){
//       console.log('step two')
// //      restaurant.menus.lunch.push(menueItem)
//     }
//       console.log(menueItem)
// }
//
// //   for (var i = 0; i < restaurant.menus.breakfast.length; i++){
// //
// //     if (menueItem.type === 'breakfast' &&
// //     !restaurant.menus.breakfast[i].name !== menueItem.name){
// //      restaurant.menus.breakfast.push(menueItem)
// // }
// // }

















module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
