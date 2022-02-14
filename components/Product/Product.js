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
export function renderProduct(data) {
  const PRODUCT_PREFIX = "product";

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
