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
  if (menueItem.type === "breakfast" && !restaurant.menus.breakfast.includes(menueItem)) {
    restaurant.menus.breakfast.push(menueItem)
  } else if (menueItem.type === "lunch" && !restaurant.menus.lunch.includes(menueItem)) {
    restaurant.menus.lunch.push(menueItem)
  } else if (foodItem.type === "dinner" && !restaurant.menus.dinner.includes(menueItem)) {
    restaurant.menus.dinner.push(menueItem)
  };
  return restaurant
}


module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
