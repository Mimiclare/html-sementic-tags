//To select the hamburger to display its contents
const hamburger = document.getElementById('hamburger');
const down = document.querySelector('.down');
const buy = document.querySelector('.buy');
const downcontent = document.querySelector('.down-content')
const category = document.querySelector(".cate")


hamburger.addEventListener('click', () => {
  down.style.display = "block"

})

category.addEventListener('click', () => {
    downcontent.classList.toggle("active")
    // downcontent.style.display = "none"
})

 downcontent.addEventListener('click', () => {
 downcontent.style.display = "none"
})

//=========== for cart selection =============
const cartdetails = document.getElementById("cart-details")
const boxcart = document.getElementById("box-cart")

boxcart.addEventListener("click", () => {
  cartdetails.classList.toggle("active");
});

let cart = [];
let total = 0;

function addToCart(image, name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++ ;
  } else {
    cart.push({image, name, price, quantity: 1});
  }
  updateCartDetails();
}

function clearCart() {
  cart = [];
  total = 0
  document.getElementById('shopping-counter').innerHTML = 0;
  updateCartDetails();
}
function updateCartDetails() {
  const purchasedItems = document.getElementById('purchase-box');
  purchasedItems.innerHTML ='';
  total = 0;
  cart.forEach((item,index) => {
    total += item.price * item.quantity;
    purchasedItems.innerHTML += `
      <div class="purchased">
        <div class="cart-item-image">
          <img src ="${item.image}" alt="">
        </div>
        <div class ="cart-item-details">
          <h3 class = "cart-item-name">${item.name}</h3>
          <p class = "cart-item-price">${item.price}</p>
          <div class = "decrement" onclick="updateQuantity(${index, -1})"><i class='bx bx-chevron-left'></i></div>
          <p class="cart-item-quantity">${item.quantity}</p>
          <div class="increment" onclick="updateQuantity(${index, 1})"><i class= 'bx bx-chevron-right'></i></div>
          <button class ="remove-item" onclick="removeFromCart(${index})"><i class= 'bx bx-trash'></i></button> 
        </div>
      </div>
      `;  
  });
  document.getElementById('shopping-counter').textContent = cart.reduce((sum,item) => sum + item.quantity,0);
  document.getElementById('total-price').textContent = total;
}
function updateQuantity(index,change) {
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    cart.splice(index,1);
  }
  updateCartDetails();
}
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDetails();
};