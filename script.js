import { loadData } from "./services/products.service.js";
let productsLength = await renderShop();
filter();
addEventListeners();

async function renderShop() {
  let shopGrid = document.querySelector(".shop__grid");
  shopGrid.innerHTML = "";
  let data = await loadData();
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
  let productPrefix = "product";

  let name = data.name;
  if (name.length > 20) name = name.substring(0, 17) + "...";

  const productImage = document.createElement("img");
  productImage.className = productPrefix + "__image";
  productImage.src = data.image;
  productImage.alt = productPrefix;

  const productInfoName = document.createElement("span");
  productInfoName.className = productPrefix + "__info-name";
  productInfoName.title = data.name;
  productInfoName.appendChild(document.createTextNode(name));

  const productInfoPrice = document.createElement("span");
  productInfoPrice.className = productPrefix + "__info-price";
  productInfoPrice.appendChild(document.createTextNode(`${data.price} €`));

  const productInfo = document.createElement("div");
  productInfo.className = productPrefix + "__info";
  productInfo.appendChild(productInfoName);
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

  if (data.sale === "true") {
    const productSale = document.createElement("span");
    productSale.className = productPrefix + "__sale";
    productSale.appendChild(document.createTextNode("SALE"));
    product.appendChild(productSale);
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
  console.log("Adding to cart..." + event);
}

function renderCart(event) {
  console.log("Cart rendering..." + event);
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
