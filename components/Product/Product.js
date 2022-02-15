import { PRODUCT_PREFIX } from "../../services/utils.js";
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
  let productClass = PRODUCT_PREFIX;
  if (data.onSale === true) {
    productClass += " sale";
  }
  return `<div class="${productClass}" id="${PRODUCT_PREFIX}-${data.id}">
  <button class="${PRODUCT_PREFIX}__edit" id="${PRODUCT_PREFIX}Edit-${data.id}">EDIT</button>
  <img class="${PRODUCT_PREFIX}__image" src="${data.image}" alt="product" />
  <div class="${PRODUCT_PREFIX}__info">
    <span
      class="${PRODUCT_PREFIX}__info-name"
      title="${data.name}"
      >${data.name}</span
    ><span></span><span class="${PRODUCT_PREFIX}__info-price">${data.price} €</span>
  </div>
  <button class="${PRODUCT_PREFIX}__add">Add to cart</button>
</div>`;
}
