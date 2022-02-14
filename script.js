import { getProducts } from "/services/products.service.js";
import { renderAddForm } from "/components/Add-form/AddForm.js";
const INDEX_PAGE = "index";
const CART_PAGE = "cart";
const PRODUCT_PREFIX = "product";

let productsLength;
// await loadSidebar();
await loadPage();

// async function loadSidebar() {
//   await loadPosts();
// } //TODO: finish loadSidebar

// async function loadPosts() {}

async function loadPage() {
  let pattern = /([^\/]+)(?=\.\w+$)/;
  let page = window.location.pathname.match(pattern); //returns filename without extension
  if (!page || page[0] === INDEX_PAGE) {
    productsLength = await renderShop();
    filter();
    addShopEventListeners();
  } else if (page[0] === CART_PAGE) {
    renderCart();
  }
}

async function renderShop() {
  let shopGrid = document.querySelector(".shop__grid");
  shopGrid.innerHTML = "";
  let data = await getProducts();

  data.forEach((product) => {
    shopGrid.appendChild(renderProduct(product));
  });
  return data.length;
}

async function renderCart() {
  let cartGrid = document.querySelector(".shop__grid");
  cartGrid.innerHTML = "";
  let data = await getProducts();
  if (data.length >= 2) data = data.slice(0, 2);
  data.forEach((product) => {
    cartGrid.appendChild(renderProduct(product));
  });
  return data.length;
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
  const productImage = document.createElement("img");
  productImage.className = PRODUCT_PREFIX + "__image";
  productImage.src = data.image;
  productImage.alt = PRODUCT_PREFIX;

  const productInfoName = document.createElement("span");
  productInfoName.className = PRODUCT_PREFIX + "__info-name";
  productInfoName.title = data.name;
  productInfoName.appendChild(document.createTextNode(data.name));

  const productInfoPrice = document.createElement("span");
  productInfoPrice.className = PRODUCT_PREFIX + "__info-price";
  productInfoPrice.appendChild(document.createTextNode(`${data.price} €`));

  const productInfoOldPrice = document.createElement("span");
  if (onSale === "true") {
    productInfoOldPrice.className = PRODUCT_PREFIX + "__info-price--old";
    productInfoOldPrice.appendChild(document.createTextNode(`99.99 €`));
  }

  const productInfo = document.createElement("div");
  productInfo.className = PRODUCT_PREFIX + "__info";
  productInfo.appendChild(productInfoName);
  productInfo.appendChild(productInfoOldPrice);
  productInfo.appendChild(productInfoPrice);

  const productAdd = document.createElement("button");
  productAdd.className = PRODUCT_PREFIX + "__add";
  productAdd.appendChild(document.createTextNode("Add to cart"));

  const product = document.createElement("div");
  product.className = PRODUCT_PREFIX;
  product.id = `${PRODUCT_PREFIX}-${data.id}`;
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
function addProduct(event) {
  alert("Product added..." + event);
}
function addShopEventListeners() {
  Array.from(document.getElementsByClassName("product__add")).forEach(
    (button) => {
      button.addEventListener("click", addToCart);
    }
  );
  // document.getElementById("shop").addEventListener("click", renderShop);
  // document.getElementById("cart").addEventListener("click", renderCart);

  document
    .getElementById("newItemButton")
    .addEventListener("click", renderAddForm);

  // document
  //   .getElementById("formAddSubmit")
  //   .addEventListener("click", addProduct);
}
