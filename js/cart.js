
let cart = [];

const png1 = 'https://www.gamewallpapers.com/download.php?img=wallpaper_the_last_of_us_part_1_01_1920x1080.jpg';
const png2 = 'https://lostfilm.info/images/photo/105/2967723_1043268.jpg';
const png3 = 'https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-essential-plan-thumbnail-01-12may22$en?$1600px$';
const png4 = 'https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-extra-plan-thumbnail-01-12may22$en?$1600px$';
const png5 = 'https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-premium-plan-thumbnail-01-12may22$uk?$1600px$';

const products = [
    {id: 1, name : 'THE LAST OF US', price: 60, img: png1, count: 1},
    {id: 2, name : 'GOD OF WAR', price: 50,img: png2,  count: 1},
    {id: 3, name : 'ESSENTIAL PS+', price: 10,img: png3,  count: 1},
    {id: 4, name : 'EXTRA PS+', price: 15,img: png4,  count: 1},
    {id: 5, name : 'DELUXE PS+', price: 20,img: png5,  count: 1}
]

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if(!product) return;
    basketField.classList.add('active')
    basketIcon.classList.add('active')
    userIcon.classList.add('active')



    const existingItem = cart.find(item => item.id === productId);
    if(existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id:product.id,
            name:product.name,
            count:product.count,
            price:product.price,
            img: product.img,
            quantity: 1
        });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;



    cartItems.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        const itemTotal = item.price * item.quantity;






        itemElement.innerHTML = `
            <div class="item-info">
                <img src="${item.img}"  class="cart-item-img">
                <div>
                    <h4 id="cart-item-name">${item.name}</h4>
                    <div class="quantity-controls">
                        <button id="quantity-button1" onclick="decreaseQuantity(${item.id})">-</button>
                        <span id="quantity">${item.quantity}</span>
                        <button id="quantity-button" onclick="increaseQuantity(${item.id})">+</button>
                        <span id="item-price">$${itemTotal} </span>
                        <img src="https://cdn-icons-png.flaticon.com/128/3416/3416079.png" alt="" id="remove-icon" onclick="removeFromCart(${item.id})">  
                    </div>
                </div>
            </div>
        `;

        cartItems.appendChild(itemElement);
        total += itemTotal;
    });

    totalElement.textContent = total;
}



function increaseQuantity(productId){
    const item = cart.find(item => item.id === productId)
    {
        if(item.id === 3 || item.id === 4 || item.id === 5){
        } else {
            item.quantity++
            updateCart()
        }
    }
}


function decreaseQuantity(productId){
    const itemIndex = cart.findIndex(item => item.id = productId);
    if(itemIndex >=0) {
        if(cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity --;
        } else{
            cart.splice(itemIndex, 1)
        }
        updateCart()
    }
}

function removeFromCart(productId){
    cart = cart.filter(item => item.id !== productId);
    updateCart()
}

function clearCart() {
    cart = [];
    updateCart();
}