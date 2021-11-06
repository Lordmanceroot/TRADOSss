const popUp = [
    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "number": "x1",
        "price": "31 990 ₽",
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "number": "x1",
        "price": "31 990 ₽",
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "number": "x1",
        "price": "31 990 ₽",
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "number": "x1",
        "price": "31 990 ₽",
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "number": "x1",
        "price": "31 990 ₽",
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "number": "x1",
        "price": "31 990 ₽",
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "number": "x1",
        "price": "31 990 ₽",
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "number": "x1",
        "price": "31 990 ₽",
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "number": "x1",
        "price": "31 990 ₽",
    },

    {
        "image": "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
        "title": "Смартфон POCO F3 (8/256gb) черный/ Night Black",
        "number": "x1",
        "price": "31 990 ₽",
    },
];

function clickOpen() {
    const open = document.querySelector("#open");
    const template1 = document.querySelector("#template1");
    const newOpen = template1.content.cloneNode(true);
    open.appendChild(newOpen);

    popUp.forEach((current) => {
        const cards = document.querySelector(".popup-list");
        const template = document.querySelector("#popup-template");
        const newCardPopUp = template.content.cloneNode(true);

        const popUpBasketImage = newCardPopUp.querySelector(".popup-basket-image");
        popUpBasketImage.src = current.image;

        const popUpCardTitle = newCardPopUp.querySelector(".popup-card");
        popUpCardTitle.textContent = current.title;

        const popUpBasketNumber = newCardPopUp.querySelector(".basket-number");
        popUpBasketNumber.textContent = current.number;

        const popUpBasketPrice = newCardPopUp.querySelector(".basket-price");
        popUpBasketPrice.textContent = current.price;


        cards.appendChild(newCardPopUp);

    })


}
function clickClose() {
    document.querySelector('.popup').remove();
}


