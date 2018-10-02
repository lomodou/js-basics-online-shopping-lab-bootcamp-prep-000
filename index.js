var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  var price = Math.floor(Math.random() * 100);
  
  cart.push({item: price});
  
  console.log(`${item} has been added to your cart.`);
  
  return cart;
}

function viewCart() {
  
  var list = 'In your cart, you have ';
  
  if(cart.length === 0) {
    
    console.log('Your shopping cart is empty.');
    
  }else {
    
    for(var i = 0, l = cart.length; i < l; i++) {
      
      for(var item in cart[i]) {
        
        list += item + ' at' + ' $' + cart[i][item] + ', ';
        
      }
    }
    
    list = list.replace(/,$/,"") + ".";
    console.log(list);
    
  }
}

function total() {
  
  
   
}

function removeFromCart(item) {

  var itemInCart = false
  
  for(var i = 0; i < cart.length; i++){
    
    if (cart[i].hasOwnProperty(item)) {
      
      itemInCart = true;
      cart.splice(i, 1);
      
    }
  }
  
  if (!itemInCart) {
    
    console.log("That item is not in your cart.");
    
  }
  return cart

}

function placeOrder(cardNumber) {
  
  if(!cardNumber) {
    
    console.log("We don't have a credit card on file for you to place your order");
    
  }else {
    
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    
    cart = [];
    
  }
}
