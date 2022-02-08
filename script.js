import { loadData } from "./services/dataService.js";
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
  console.log(data);
  console.log(data["products"]);
  console.log(data["products"].length);
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

  const product__image = document.createElement("img");
  product__image.className = productPrefix + "__image";
  product__image.src = data.image;
  product__image.alt = productPrefix;

  const product__info__name = document.createElement("span");
  product__info__name.className = productPrefix + "__info__name";
  product__info__name.title = data.name;
  product__info__name.appendChild(document.createTextNode(name));

  const product__info__price = document.createElement("span");
  product__info__price.className = productPrefix + "__info__price";
  product__info__price.appendChild(document.createTextNode(`${data.price} €`));

  const product__info = document.createElement("div");
  product__info.className = productPrefix + "__info";
  product__info.appendChild(product__info__name);
  product__info.appendChild(product__info__price);

  const product__add = document.createElement("button");
  product__add.className = productPrefix + "__add";
  product__add.appendChild(document.createTextNode("Add to cart"));

  if (data.sale === "true") {
    const product__sale = document.createElement("span");
    product__sale.className = productPrefix + "__sale";
    product__sale.appendChild(document.createTextNode("SALE"));
  }

  const product = document.createElement("div");
  product.className = productPrefix;
  product.id = `${productPrefix}-${data.id}`;
  product.appendChild(product__image);
  product.appendChild(product__info);
  product.appendChild(product__add);

  if (data.sale === "true") {
    const product__sale = document.createElement("span");
    product__sale.className = productPrefix + "__sale";
    product__sale.appendChild(document.createTextNode("SALE"));
    product.appendChild(product__sale);
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
