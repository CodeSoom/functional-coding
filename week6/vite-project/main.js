let carts = [];
let total = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function costAjax(carts, callback) {
  setTimeout(() => {
    callback(
      carts.reduce((acc, { price }) => acc + price, 0)
    );
  }, getRandomInt(3) * 1000);
}

function shoppingAjax(cart, callback) {
  setTimeout(() => {
    callback(2);
  }, getRandomInt(3) * 1000);
}

function addItem(cart, item) {
  return [...cart, item];
}

function addItemToCart(item) {
  carts = addItem(carts, item);

  calculateCartTotal();
}

function calculateCartTotal() {
  total = 0;
  costAjax(carts, function (cost) {
    total += cost;
    shoppingAjax(carts, function (shipping) {
      total += shipping;
      render();
    });
  });
}

function handleClick() {
  addItemToCart({
    name: '신발',
    price: 6,
  });
}

function render() {
  document.querySelector('#app').innerHTML = `
    <div>
      <h1>Hello</h1>
      <p>
        합계: ${total}
      </p>
      <button id="button" type="button">상품 담기</button>
    </div>
  `;

  document.getElementById('button').addEventListener('click', handleClick);
}

render();
