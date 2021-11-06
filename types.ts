const appNode: HTMLDivElement = document.querySelector('.cards');

const popup: Product[] = [];

class Card {

    private image: HTMLImageElement | null;
    private title: HTMLElement | null;
    private price: HTMLElement | null;
    private button: HTMLButtonElement | null;
    constructor(product) {
        const template: HTMLTemplateElement = document.querySelector("#card-template");
        const content: DocumentFragment = document.importNode(template.content ,true);

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

    addToCart(product: Product): void {
        popup.push(product)
    }
}


class Product {
    image: string;
    title: string;
    price: number;
    button: string;
    constructor(image: string, title: string, price: number, button: string) {
        this.image = image;
        this.title = title;
        this.price = price;
        this.button = button
    }
}

const product: Product = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (8/256gb) черный/ Night Black",
    31990,
    "Купить"
)
new Card(product)
const product1: Product = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (6/256gb) черный/ Night Black",
    29990,
    "Купить"
)
new Card(product1)
const product2: Product = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (4/256gb) черный/ Night Black",
    27990,
    "Купить"
)
new Card(product2)
const product3: Product = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (8/128gb) черный/ Night Black",
    30990,
    "Купить"
)
new Card(product3)
const product4: Product = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (6/128gb) черный/ Night Black",
    28990,
    "Купить"
)
new Card(product4)
const product5: Product = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (4/128gb) черный/ Night Black",
    26990,
    "Купить"
)
new Card(product5)
const product6: Product = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (4/64gb) черный/ Night Black",
    22990,
    "Купить"
)
new Card(product6)
const product7: Product = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (6/64gb) черный/ Night Black",
    23990,
    "Купить"
)
new Card(product7)
const product8: Product = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (8/512gb) черный/ Night Black",
    35990,
    "Купить"
)
new Card(product8)
const product9: Product = new Product(
    "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    "Смартфон POCO F3 (6/512gb) черный/ Night Black",
    33990,
    "Купить"
)
new Card(product9)


function clickOpen(): void {
    const open: HTMLDivElement = document.querySelector("#open");
    const template1: HTMLTemplateElement = document.querySelector("#template1");
    const newOpen: DocumentFragment = document.importNode(template1.content,true);

    open.appendChild(newOpen)

    popup.forEach((current) => {
        const cards: HTMLDivElement = document.querySelector(".popup-list");
        const template: HTMLTemplateElement = document.querySelector("#popup-template");
        const newCardPopUp: DocumentFragment = document.importNode(template.content,true);


        const popUpBasketImage: HTMLImageElement = newCardPopUp.querySelector(".popup-basket-image");
        popUpBasketImage.src = current.image;

        const popUpCardTitle: HTMLDivElement = newCardPopUp.querySelector(".popup-card");
        popUpCardTitle.textContent = current.title;

        // const popUpBasketNumber = newCardPopUp.querySelector(".basket-number");
        // popUpBasketNumber.textContent = current.number;

        const popUpBasketPrice: HTMLDivElement = newCardPopUp.querySelector(".basket-price");
        popUpBasketPrice.textContent = String(current.price);

        cards.appendChild(newCardPopUp)

    })

}

function clickClose(): void {
    document.querySelector('.popup').remove();
}

function removeAllItems(): void {
    popup.length = 0;
    document.querySelector(".popup-list").innerHTML = " ";
}

console.log(popup);

