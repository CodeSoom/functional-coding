let shippingCart = [];
let shippingCartTotal = 0;

function addItemToCart(name, price) {
  shippingCart.push({
    name,
    price,
  });
  calcCartTotal();
}

function calcCartTotal() {
  shippingCartTotal = 0;
  for (let i = 0; i < shippingCart.length; i++) {
    let item = shippingCart[i];
    shippingCartTotal += item.price;
  }
  setCartTotalDom();
  updateShippingIcons();
  updateTaxDom();
}

function updateShippingIcons() {
  let buyButtons = getBuyButtonsDom();
  for(let i = 0; i < buyButtons.length; i ++) {
    let button = buyButtons[i];
    let item = button.item;
    if (item.price + shippingCartTotal >= 20) {
      button.showFreeShuppingIcon();
    } else {
      button.hideFreeShuppingIcon();
    }
  }
}

function updateTaxDom() {
  setTaxDom(shippingCartTotal * 0.10);
}
