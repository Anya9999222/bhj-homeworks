const buttonPlus = document.querySelectorAll('.product__quantity-control_inc');
const buttonMinus = document.querySelectorAll('.product__quantity-control_dec');
const indicator = document.querySelectorAll('.product__quantity-value');

buttonPlus.forEach((item, index) => {
    item.addEventListener('click', function(){
        indicator[index].textContent++
    })
})

buttonMinus.forEach((item, index) => {
    item.addEventListener('click', function(){
        let currentQuantity = Number(indicator[index].textContent);
        if(currentQuantity === 1){
            return
        } else{
            indicator[index].textContent--;
        }
    })
})

const basket = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');
const addButton = document.querySelectorAll('.product__add');
let basketEl = [];

function createHtml(element){
    let elId = element.getAttribute("data-id");
    let number = element.querySelector(".product__quantity-value").textContent;
    if(basketEl.includes(element)){
        basketEl.forEach((item,index) => {
            if(item.dataset.id === elId){
                basket.children[index].querySelector(".cart__product-count").textContent = number
            }  
        })
    } else{
        basketEl.push(element);
        const cartProduct = document.createElement('div');
        basket.appendChild(cartProduct);
        cartProduct.classList.add("cart__product");
        cartProduct.setAttribute('data-id', element.dataset.id);
    
        const image = document.createElement('img');
        cartProduct.appendChild(image);
        image.classList.add('cart__product-image');
        image.setAttribute('src', element.childNodes[3].currentSrc);
    
        const count = document.createElement('div');
        cartProduct.appendChild(count);
        count.classList.add('cart__product-count');
        count.textContent = number;
    }
    
}

addButton.forEach((item) => {
    item.addEventListener('click', function () {
        let product = item.closest(".product");
        createHtml(product);
    })
})
