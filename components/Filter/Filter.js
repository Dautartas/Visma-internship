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
