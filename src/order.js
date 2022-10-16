
function takeOrder(orderObject, deliveryArray){
  if (deliveryArray.length < 3){
    return deliveryArray.push(orderObject)
  }
}

function refundOrder(orderNum,deliveryArray){
for (var i = 0; i < deliveryArray.length; i++) {
if (deliveryArray[i].orderNumber === orderNum){
deliveryArray.splice(i, 1);
  }
}
return deliveryArray
}


function listItems(deliveryArray){
  var items = []
   for (var i = 0; i < deliveryArray.length; i++){
    items.push(deliveryArray[i].item)
   }
return items.join(', ')
}

function searchOrder(deliveryArray,item){
  var inList = false
  for (var i = 0; i < deliveryArray.length; i++){
    if (deliveryArray[i].item === item){
      inList = true;
    }
  }
return inList
}



module.exports = {

  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
