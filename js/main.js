const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
    constructor(product, img = "https://loremflickr.com/280/200?lock=1") {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }

    render() {
        return `
        <div class="goods-list__item" data-id="${this.id}">
        <img src = "${this.img}">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button>Купить</button>
        </div>`
    }
}

class GoodsList {
    constructor(container = '.goods-list__row') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render();
            });
    }

    // fetchGoods() {
    //     this.goods = [
    //         { title: 'Shirt', price: 150 },
    //         { title: 'Socks', price: 50 },
    //         { title: 'Jacket', price: 350 },
    //         { title: 'Shoes', price: 250 },
    //     ];
    // }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log('error');
            })
    }

    getSum() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price;
        })
        console.log(`Стоимость всех товаров = ${sum}`);
    }

    render() {
        const block = document.querySelector(this.container);
        let listHTML = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good);
            listHTML += goodItem.render();
        });
        block.innerHTML = listHTML;
    }
}

const list = new GoodsList();

class Basket {
    constructor(container = '.cart-block') {
        this.container = container;
        this.goods = [];
        this._clickBasket();
        this._getBasketItem()
            .then(data => {
                this.goods = data.contents;
                this.render();
            });
    }

    _clickBasket() {
        document.querySelector('.cart-button').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        })
    }


    _getBasketItem() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log('error');
            })
    }

    addGood() {

    }

    removeGood() {

    }

    editGood() {

    }

    render() {
        const block = document.querySelector(this.container);
        let listHTML = "";
        this.goods.forEach(good => {
            const goodItem = new BasketItem(good);
            listHTML += goodItem.render();
        });
        block.innerHTML = listHTML;
    }
}

class BasketItem {
    constructor(product, img = "https://loremflickr.com/80/80?lock=1") {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.quantity = product.quantity;
        this.img = img;
    }

    render() {
        return `<div class="cart-item" data-id="${this.id}">
        <div class="product__bio">
            <img src="${this.img}">
                <div class="product__desc">
                    <h3 class="product__title">${this.title}</h3>
                    <p class="product__quantity">Quantity: ${this.quantity}</p>
                    <p class="product__single-price">$${this.price} each</p>
                </div>
            </div>
            <div class="product__right">
                <p class="product__price">$${this.quantity * this.price}</p>
                <button class="product__del-btn" data-id="${this.id}">&times;</button>
            </div>
        </div>`
    }
}

let bask = new Basket();

/*
const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (good, img = "https://loremflickr.com/280/200?lock=1") => {
    return `
    <div class="goods-list__item">
    <img src = "${img}">
    <h3>${good.title}</h3>
    <p>${good.price}</p>
    <button>Купить</button>
    </div>`;
};

const renderGoodsList = (list) => {
    document.querySelector('.goods-list__row').innerHTML = list.map(item => renderGoodsItem(item)).join('');
}

renderGoodsList(goods);
*/