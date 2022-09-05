class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render(img = "https://loremflickr.com/280/200?lock=1") {
        return `
        <div class="goods-list__item">
        <img src = "${img}">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button>Купить</button>
        </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }

    getSum() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price;
        })
        console.log(`Стоимость всех товаров = ${sum}`);
    }

    render() {
        let listHTML = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHTML += goodItem.render();
        });
        document.querySelector('.goods-list__row').innerHTML = listHTML;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.getSum();

class Basket {
    addGood() {

    }

    removeGood() {

    }

    editGood() {

    }

    render() {

    }
}

class BasketItem {
    render() {

    }
}


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