import { FILTER_PREFIX } from "../../services/utils.js";

export function renderFilter() {
  document.getElementsByClassName(FILTER_PREFIX)[0].innerHTML = `
  <span class="${FILTER_PREFIX}__text">
    Showing 
    <span id="filter__range"></span> 
    of
    <span id="filter__count"></span>
    results
  </span>

<select name="sort" id="sort" class="${FILTER_PREFIX}__sort">
  <option value="default" selected="selected">
    Default sorting
  </option>
  <option value="other">Other sorting</option>
</select>`;
}

/**
 * function that calculates data for shop filter box
 */
export function filter(productsLength) {
  setAmount(productsLength);
  setInterval(productsLength);
}

function setInterval(productsLength) {
  document.getElementById("filter__range").innerHTML =
    "1" + "-" + productsLength;
}

function setAmount(productsLength) {
  document.getElementById("filter__count").innerHTML = productsLength;
}
