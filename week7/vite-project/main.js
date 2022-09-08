class Queue {
  constructor() {
    this.queue = [];
    this.working = false;
  }

  runNext() {
    if (this.working) {
      return;
    }

    if (this.isEmpty()) {
      return;
    }

    this.working = true;

    const action = this.dequeue();

    action(() => {
      this.working = false;
      setTimeout(() => {
        this.runNext();
      }, 0)
    });
  }

  enqueue(action) {
    this.queue.push(action);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const queue = new Queue();

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

  queue.enqueue(
    (callback) => {
      calculateCartTotal(carts, render, callback);
    }
  )
  queue.runNext();
}

async function calculateCartTotal(localCarts, render, callback) {
  let localTotal = 0;
  const [cost, shipping] = await Promise.all([
    new Promise((resolve) => {
      costAjax(localCarts, function (cost) {
        resolve(cost);
      });
    }),
    new Promise((resolve) => {
      shoppingAjax(localCarts, function (shipping) {
        resolve(shipping);
      });
    })
  ]);
  render(localTotal + cost + shipping);
  callback();
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
