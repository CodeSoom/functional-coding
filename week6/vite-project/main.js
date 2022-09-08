let carts = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function costAjax(c, callback) {
  setTimeout(() => {
    callback(
      [...c].reduce((acc, { price }) => acc + price, 0)
    );
  }, getRandomInt(2) * 1000);
}

function shoppingAjax(cart, callback) {
  setTimeout(() => {
    callback(2);
  }, getRandomInt(2) * 1000);
}

function addItem(cart, item) {
  return [...cart, item];
}

function addItemToCart(item) {
	carts = addItem(carts, item);

  calculateCartTotal(carts, render);
}

function calculateCartTotal(localCarts, render) {
  let localTotal = 0;
  costAjax(localCarts, function (cost) {
    localTotal = localTotal + cost;
    shoppingAjax(localCarts, function (shipping) {
      render(localTotal + shipping);
    });
  });
}

function handleClick() {
  addItemToCart({
    name: '신발',
    price: 6,
  });
}

function render(t = 0) {
  document.querySelector('#app').innerHTML = `
    <div>
      <h1>Hello</h1>
      <p>
        합계: ${t}
      </p>
      <button id="button" type="button">상품 담기</button>
    </div>
  `;

  document.getElementById('button').addEventListener('click', handleClick);
}

render();
