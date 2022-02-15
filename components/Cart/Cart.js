import { getProducts } from "../../services/products.service.js";
import { renderProduct } from "../Product/Product.js";

export async function renderCart() {
  let cartGrid = document.querySelector(".shop__grid");
  cartGrid.innerHTML = "";
  cartGrid.classList.add("loader-large");
  let data = await getProducts();
  cartGrid.classList.remove("loader-large");

  if (data.length >= 2) data = data.slice(0, 2);
  data.forEach((product) => {
    cartGrid.innerHTML += renderProduct(product);
  });
  return data.length;
}
