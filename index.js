var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem{itemName:item,itemPrice:Math.floor(Math.random()*Math.floor(100))}
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart'
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
