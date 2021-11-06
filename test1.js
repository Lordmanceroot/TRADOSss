const appNode = document.querySelector('.cards');

const popup = [];

class Card {
    constructor(product) {
        const template = document.querySelector("#card-template");
        const content = template.content.cloneNode(true);

        this.image = content.querySelector('.card-image');
        this.title = content.querySelector('.card-title');
        this.price = content.querySelector('.card-price');
        this.button = content.querySelector('.card-in-basket');

        this.image.src = product.image;
        this.title.innerHTML = product.title;
        this.price.innerHTML = product.price;
        this.button.innerHTML = product.button

        this.button.onclick = () => this.addToCart(product);

        appNode.appendChild(content);
    }

    addToCart(product) {
        popup.push(product)
    }
}


class Product {
    constructor(image, title, price, button) {
        this.image = image;
        this.title = title;
        this.price = price;
        this.button = button
    }
}

const product = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (8/256gb) черный/ Night Black",
    31990,
    "Купить"
)
new Card(product)
const product1 = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (6/256gb) черный/ Night Black",
    29990,
    "Купить"
)
new Card(product1)
const product2 = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (4/256gb) черный/ Night Black",
    27990,
    "Купить"
)
new Card(product2)
const product3 = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (8/128gb) черный/ Night Black",
    30990,
    "Купить"
)
new Card(product3)
const product4 = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (6/128gb) черный/ Night Black",
    28990,
    "Купить"
)
new Card(product4)
const product5 = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (4/128gb) черный/ Night Black",
    26990,
    "Купить"
)
new Card(product5)
const product6 = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (4/64gb) черный/ Night Black",
    22990,
    "Купить"
)
new Card(product6)
const product7 = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (6/64gb) черный/ Night Black",
    23990,
    "Купить"
)
new Card(product7)
const product8 = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (8/512gb) черный/ Night Black",
    35990,
    "Купить"
)
new Card(product8)
const product9 = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (6/512gb) черный/ Night Black",
    33990,
    "Купить"
)
new Card(product9)


function clickOpen() {
    const open = document.querySelector("#open");
    const template1 = document.querySelector("#template1");
    const newOpen = template1.content.cloneNode(true);

    open.appendChild(newOpen)

    popup.forEach((current) => {
        const cards = document.querySelector(".popup-list");
        const template = document.querySelector("#popup-template");
        const newCardPopUp = template.content.cloneNode(true);


        const popUpBasketImage = newCardPopUp.querySelector(".popup-basket-image");
        popUpBasketImage.src = current.image;

        const popUpCardTitle = newCardPopUp.querySelector(".popup-card");
        popUpCardTitle.textContent = current.title;

        // const popUpBasketNumber = newCardPopUp.querySelector(".basket-number");
        // popUpBasketNumber.textContent = current.number;

        const popUpBasketPrice = newCardPopUp.querySelector(".basket-price");
        popUpBasketPrice.textContent = current.price;

        cards.appendChild(newCardPopUp)


    })

}

function clickClose() {
    document.querySelector('.popup').remove();
}

function removeAllItems() {
    popup.length = 0;
    document.querySelector(".popup-list").innerHTML = " ";
}


// const counter = function () {
//     const btns = document.querySelectorAll(".counter-btn");
//
//     btns.forEach(btn => {
//         btn.addEventListener('click', function () {
//             const direction = this.dataset.direction;
//             const inp = this.parentElement.querySelector('.counter-value');
//             const currentValue = +inp.value;
//             let newValue;
//
//             if (direction === 'plus') {
//                 newValue = currentValue + 1;
//             } else {
//                 newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
//             }
//             inp.value = newValue;
//         })
//     })
// }
//
// console.log(counter)


console.log(popup);

