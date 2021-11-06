var appNode = document.querySelector('.cards');
var popup = [];
var Card = /** @class */ (function () {
    function Card(product) {
        var _this = this;
        var template = document.querySelector("#card-template");
        var content = document.importNode(template.content, true);
        this.image = content.querySelector('.card-image');
        this.title = content.querySelector('.card-title');
        this.price = content.querySelector('.card-price');
        this.button = content.querySelector('.card-in-basket');
        this.image.src = product.image;
        this.title.innerHTML = product.title;
        this.price.innerHTML = product.price;
        this.button.innerHTML = product.button;
        this.button.onclick = function () { return _this.addToCart(product); };
        appNode.appendChild(content);
    }
    Card.prototype.addToCart = function (product) {
        popup.push(product);
    };
    return Card;
}());
var Product = /** @class */ (function () {
    function Product(image, title, price, button) {
        this.image = image;
        this.title = title;
        this.price = price;
        this.button = button;
    }
    return Product;
}());
var product = new Product("https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg", "Смартфон POCO F3 (8/256gb) черный/ Night Black", 31990, "Купить");
new Card(product);
var product1 = new Product("https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg", "Смартфон POCO F3 (6/256gb) черный/ Night Black", 29990, "Купить");
new Card(product1);
var product2 = new Product("https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg", "Смартфон POCO F3 (4/256gb) черный/ Night Black", 27990, "Купить");
new Card(product2);
var product3 = new Product("https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg", "Смартфон POCO F3 (8/128gb) черный/ Night Black", 30990, "Купить");
new Card(product3);
var product4 = new Product("https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg", "Смартфон POCO F3 (6/128gb) черный/ Night Black", 28990, "Купить");
new Card(product4);
var product5 = new Product("https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg", "Смартфон POCO F3 (4/128gb) черный/ Night Black", 26990, "Купить");
new Card(product5);
var product6 = new Product("https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg", "Смартфон POCO F3 (4/64gb) черный/ Night Black", 22990, "Купить");
new Card(product6);
var product7 = new Product("https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg", "Смартфон POCO F3 (6/64gb) черный/ Night Black", 23990, "Купить");
new Card(product7);
var product8 = new Product("https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg", "Смартфон POCO F3 (8/512gb) черный/ Night Black", 35990, "Купить");
new Card(product8);
var product9 = new Product("https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg", "Смартфон POCO F3 (6/512gb) черный/ Night Black", 33990, "Купить");
new Card(product9);
function clickOpen() {
    var open = document.querySelector("#open");
    var template1 = document.querySelector("#template1");
    var newOpen = document.importNode(template1.content, true);
    open.appendChild(newOpen);
    popup.forEach(function (current) {
        var cards = document.querySelector(".popup-list");
        var template = document.querySelector("#popup-template");
        var newCardPopUp = document.importNode(template.content, true);
        var popUpBasketImage = newCardPopUp.querySelector(".popup-basket-image");
        popUpBasketImage.src = current.image;
        var popUpCardTitle = newCardPopUp.querySelector(".popup-card");
        popUpCardTitle.textContent = current.title;
        // const popUpBasketNumber = newCardPopUp.querySelector(".basket-number");
        // popUpBasketNumber.textContent = current.number;
        var popUpBasketPrice = newCardPopUp.querySelector(".basket-price");
        popUpBasketPrice.textContent = String(current.price);
        cards.appendChild(newCardPopUp);
    });
}
function clickClose() {
    document.querySelector('.popup').remove();
}
function removeAllItems() {
    popup.length = 0;
    document.querySelector(".popup-list").innerHTML = " ";
}
console.log(popup);
