import { renderShop } from "/components/Shop/Shop.js";
import { renderCart } from "/components/Cart/Cart.js";
import { INDEX_PAGE, CART_PAGE } from "./services/utils.js";

await loadPage();

async function loadPage() {
  let pattern = /([^\/]+)(?=\.\w+$)/;
  let page = window.location.pathname.match(pattern); //returns filename without extension
  if (!page || page[0] === INDEX_PAGE) {
    await renderShop();
  } else if (page[0] === CART_PAGE) {
    renderCart();
  }
}
