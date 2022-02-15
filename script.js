import { renderShop } from "/components/Shop/Shop.js";
import { filter } from "/components/Filter/Filter.js";
import { renderCart } from "/components/Cart/Cart.js";
import { INDEX_PAGE, CART_PAGE } from "./services/utils.js";

let productsLength;
await loadPage();

async function loadPage() {
  let pattern = /([^\/]+)(?=\.\w+$)/;
  let page = window.location.pathname.match(pattern); //returns filename without extension
  if (!page || page[0] === INDEX_PAGE) {
    productsLength = await renderShop();
    filter(productsLength);
  } else if (page[0] === CART_PAGE) {
    renderCart();
  }
}
