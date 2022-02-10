import { loadData } from "./services/data.service.js";
import {
  productsDataPath,
  categoriesDataPath,
  archivesDataPath,
  commentsDataPath,
  postsDataPath,
} from "./services/index.js";
let productsLength = await renderShop();
filter();
addEventListeners();

async function renderShop() {
  let shopGrid = document.querySelector(".shop__grid");
  shopGrid.innerHTML = "";
  let data = await loadData(productsDataPath);
  data["products"].forEach((product) => {
    shopGrid.appendChild(renderProduct(product));
  });
  return data["products"].length;
}

/**
 *
 * @param {object} data {id,name,price, image}
 *
 * @returns {object}
 * <div>
 *    <img>
 *    <div>
 *        <span></span>
 *        <span></span>
 *    </div>
 *    <button></button>
 *    <span></span> [Optional]
 * </div>
 */
function renderProduct(data) {
  let onSale = data.onSale;
  let productPrefix = "product";

  const productImage = document.createElement("img");
  productImage.className = productPrefix + "__image";
  productImage.src = data.image;
  productImage.alt = productPrefix;

  const productInfoName = document.createElement("span");
  productInfoName.className = productPrefix + "__info-name";
  productInfoName.title = data.name;
  productInfoName.appendChild(document.createTextNode(data.name));

  const productInfoPrice = document.createElement("span");
  productInfoPrice.className = productPrefix + "__info-price";
  productInfoPrice.appendChild(document.createTextNode(`${data.price} €`));

  const productInfoOldPrice = document.createElement("span");
  if (onSale === "true") {
    productInfoOldPrice.className = productPrefix + "__info-price--old";
    productInfoOldPrice.appendChild(document.createTextNode(`99.99 €`));
  }

  const productInfo = document.createElement("div");
  productInfo.className = productPrefix + "__info";
  productInfo.appendChild(productInfoName);
  productInfo.appendChild(productInfoOldPrice);
  productInfo.appendChild(productInfoPrice);

  const productAdd = document.createElement("button");
  productAdd.className = productPrefix + "__add";
  productAdd.appendChild(document.createTextNode("Add to cart"));

  const product = document.createElement("div");
  product.className = productPrefix;
  product.id = `${productPrefix}-${data.id}`;
  product.appendChild(productImage);
  product.appendChild(productInfo);
  product.appendChild(productAdd);

  if (onSale === "true") {
    product.classList.add("sale");
  }
  return product;
}
/**
 * function that calculates data for shop filter box
 */
function filter() {
  setAmount();
  setInterval();
}

function setInterval() {
  document.getElementById("filter__range").innerHTML =
    "1" + "-" + productsLength;
}

function setAmount() {
  document.getElementById("filter__count").innerHTML = productsLength;
}

function addToCart(event) {
  alert("Adding to cart..." + event);
}

function renderCart(event) {
  alert("Cart rendering..." + event);
}

function addEventListeners() {
  Array.from(document.getElementsByClassName("product__add")).forEach(
    (button) => {
      button.addEventListener("click", addToCart);
    }
  );

  document.getElementById("shop").addEventListener("click", renderShop);
  document.getElementById("cart").addEventListener("click", renderCart);
}
