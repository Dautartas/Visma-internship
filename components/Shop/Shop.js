import { getProducts } from "../../services/products.service.js";
import { renderProduct } from "../Product/Product.js";
import { renderAddForm } from "../Forms/Add-form/AddForm.js";
import { renderEditForm } from "../Forms/Edit-form/EditForm.js";
import { renderFilter, filter } from "../Filter/Filter.js";
export async function renderShop() {
  addShopEventListeners();
  let shopGrid = document.querySelector(".shop__grid");
  shopGrid.classList.add("loader-large");
  let data = await getProducts();
  shopGrid.classList.remove("loader-large");
  renderFilter();
  filter(data.length);
  data.forEach((product) => {
    shopGrid.innerHTML += renderProduct(product);
  });
  addProductEventListeners();
}

function addToCart(event) {
  alert("Adding to cart..." + event);
}

function editProduct(event) {
  let id = event.target.id.split("-")[1];
  renderEditForm(id);
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
  Array.from(document.getElementsByClassName("product__edit")).forEach(
    (button) => {
      button.addEventListener("click", editProduct);
    }
  );
}
