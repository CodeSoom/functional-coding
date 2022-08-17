// 유틸함수들
function addElementLast(array, elem) {
  var new_array = array.slice();
  new_array.push(elem);
  return new_array;
}

function setPrice(item, new_price) {
  var item_copy = Object.assign({}, item);
  item_copy.price = new_price;
  return item_copy;
}

function splice(array, index, count) {
  return [...array.slice(0, index), ...array.slice(index + count)]
}

// 카트에 상품을 담는 코드가 있습니다. 카트를 지금은 배열로 관리하고 있는데,
// 카트를 Map객체로 관리할 수 있도록 변경해 주세요
function addItem(cart, item) {
  return addElementLast(cart, item);
}

function calcTotal(cart) {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;
  }
  return total;
}

function setPriceByName(cart, name, price) {
  var cartCopy = cart.slice();
  for (var i = 0; i < cartCopy.length; i++) {
    if (cartCopy[i].name === name)
      cartCopy[i] = setPrice(cartCopy[i], price);
  }
  return cartCopy;
}

function removeItemByName(cart, name) {
  var idx = indexOfItem(cart, name);
  if (idx !== null)
    return splice(cart, idx, 1);
  return cart;
}

function indexOfItem(cart, name) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name)
      return i;
  }
  return null;
}

function isInCart(cart, name) {
  return indexOfItem(cart, name) !== null;
}

test('addItem', () => {
  const cart = [];

  const catToy = {
    name: '고양이 장난감',
    price: 10000,
  };
  const dogToy = {
    name: '개뼛다구',
    price: 5000,
  };

  expect(addItem(cart, catToy)).toEqual([catToy]);
});

test('calcTotal', () => {
  const cart = [];

  const catToy = {
    name: '고양이 장난감',
    price: 10000,
  };
  const dogToy = {
    name: '개뼛다구',
    price: 5000,
  };

  expect(calcTotal(addItem(addItem(cart, catToy), dogToy))).toBe(15000);
});

test('setPriceByName', () => {
  const cart = [{
    name: '고양이 장난감',
    price: 10000,
  }];

  const newCart = setPriceByName(cart, '고양이 장난감', 5000);

  expect(newCart[0].price).toBe(5000);
});

test('removeItemByName', () => {
  const cart = [{
    name: '고양이 장난감',
    price: 10000,
  }];

  const newCart = removeItemByName(cart, '고양이 장난감');

  expect(newCart.length).toBe(0);
});

test('indexOfItem', () => {
  const cart = [{
    name: '고양이 장난감',
    price: 10000,
  }];

  expect(indexOfItem(cart, '고양이 장난감')).toBe(0);
  expect(indexOfItem(cart, '없는 상품')).toBe(null);
});

test('isInCart', () => {
  const cart = [{
    name: '고양이 장난감',
    price: 10000,
  }];

  expect(isInCart(cart, '고양이 장난감')).toBe(true);
  expect(isInCart(cart, '없는 상품')).toBe(false);
});
