// step-1 

const cart = [];
let cupon = false;
let totalPrice = 0;
let discount = 0;
let finalPrice = 0

document.addEventListener('click', (e)=>{
    let el = e.target.closest('.category-card');
    if(el){
        let title = el.querySelector('.card-title').innerText;
        let price = el.querySelector('.price').innerText;
        if(price){
            price =  Number(price.replace('TK', ''));
        }

        if(price && title ){
            cart.push({price,title})
            let parchesEl = document.getElementById('parches-button');
            parchesEl.classList.remove('disabled:opacity-50','disabled:cursor-not-allowed')
            parchesEl.removeAttribute('disabled');
        }
        updateCart()
    }
})


const updateCart = () => {
    let cartEl = document.getElementById('cart-container');
    cartEl.innerHTML = '';
    let total = 0;

    for(let i = 0; cart.length > i; i++){
        let liEl = document.createElement('li');
        liEl.classList.add('mb-1', 'font-medium', 'text-[#111]');
        liEl.innerHTML = `${i+1}. ${cart[i].title}`
        cartEl.append(liEl);

        total += cart[i].price;
    }

    let priceEl = document.getElementById('total-price');
    priceEl.innerHTML = total + ' TK';

    let finalPriceEl = document.getElementById('final-price');
    finalPriceEl.innerHTML = total + ' TK';

    totalPrice = total;

    if(total > 200){
        let cuponEl = document.getElementById('cupon-button');
        cuponEl.classList.remove('disabled:opacity-50','disabled:cursor-not-allowed')
        cuponEl.removeAttribute('disabled');
        //Cupon code will go here.
    }
}

const getCupon = (e) => {
    if(e.value == 'SELL200'){
        cupon = true;
    }else{
        cupon = false;
    }
}

const applyCupon = () => {
    if(cupon === true){
        discount = Math.round((20/100)*totalPrice);
        finalPrice = totalPrice - discount;
    }else{
        discount = 0;
        finalPrice = totalPrice;
    }
    let discountEl = document.getElementById('discount');
    discountEl.innerHTML = discount;

    let finalPriceEl = document.getElementById('final-price');
    finalPriceEl.innerHTML = finalPrice;
    
}

const resetCart = () => {
    let cartEl = document.getElementById('cart-container');
    cartEl.innerHTML = '';

    let discountEl = document.getElementById('discount');
    discountEl.innerHTML = '0.00 TK';

    let finalPriceEl = document.getElementById('final-price');
    finalPriceEl.innerHTML = '0.00 TK';

    let priceEl = document.getElementById('total-price');
    priceEl.innerHTML = '0.00 TK';

    totalPrice = 0;
    discount = 0;
    finalPrice = 0;
}