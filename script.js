const goods = [
    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "price": "31 990 ₽",
        "button": "В корзину"
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "price": "31 990 ₽",
        "button": "В корзину"
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "price": "31 990 ₽",
        "button": "В корзину"
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "price": "31 990 ₽",
        "button": "В корзину"
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "price": "31 990 ₽",
        "button": "В корзину"
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "price": "31 990 ₽",
        "button": "В корзину"
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "price": "31 990 ₽",
        "button": "В корзину"
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "price": "31 990 ₽",
        "button": "В корзину"
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "price": "31 990 ₽",
        "button": "В корзину"
    }
]

goods.forEach((current) => {
    const cards = document.querySelector(".cards");
    const template = document.querySelector("#card-template");

    const newCard = template.content.cloneNode(true);
    const cardImage = newCard.querySelector(".card-image");
    cardImage.src = current.image;
    const cardTitle = newCard.querySelector(".card-title");
    cardTitle.textContent = current.title;
    const cardPrice = newCard.querySelector(".card-price");
    cardPrice.textContent = current.price;
    const cardButton = newCard.querySelector(".card-in-basket");
    cardButton.textContent = current.button;

    cards.appendChild(newCard);


})
