import { getProducts } from "../../services/products.service.js";
import { renderProduct } from "../Product/Product.js";
import { renderAddForm } from "../Add-form/AddForm.js";

export async function renderShop() {
  addShopEventListeners();
  let shopGrid = document.querySelector(".shop__grid");
  shopGrid.innerHTML = "";
  let data = await getProducts();

  data.forEach((product) => {
    shopGrid.appendChild(renderProduct(product));
  });
  addProductEventListeners();
  return data.length;
}

function addToCart(event) {
  alert("Adding to cart..." + event);
}

function addShopEventListeners() {
  document
    .getElementById("newItemButton")
    .addEventListener("click", renderAddForm);
}

function addProductEventListeners() {
  Array.from(document.getElementsByClassName("product__add")).forEach(
    (button) => {
      button.addEventListener("click", addToCart);
    }
  );
}
