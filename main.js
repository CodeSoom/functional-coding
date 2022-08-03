let shoppingCart = [];
let shoppingCartTotal = 0;

function addItemToCart(name, price) {
  shoppingCart.push({
    name,
    price,
  });
  calcCartTotal();
}

function calcCartTotal() {
  shoppingCartTotal = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    let item = shoppingCart[i];
    shoppingCartTotal += item.price;
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
    if (item.price + shoppingCartTotal >= 20) {
      button.showFreeShuppingIcon();
    } else {
      button.hideFreeShuppingIcon();
    }
  }
}

function updateTaxDom() {
  setTaxDom(shoppingCartTotal * 0.10);
}
