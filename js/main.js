const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (good, img = "https://loremflickr.com/280/200?lock=1") => {
    return `
    <div class="goods-item">
    <img src = "${img}">
    <h3>${good.title}</h3>
    <p>${good.price}</p>
    <button>Купить</button>
    </div>`;
};

const renderGoodsList = (list) => {
    document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item)).join('');
}

renderGoodsList(goods);