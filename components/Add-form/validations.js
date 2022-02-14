export function colorName(event) {
  if (event.target.value === "" || event.target.value.length > 100)
    event.target.style.background = "pink";
  else event.target.style.background = "lightgreen";
}

export function colorPrice(event) {
  if (isNaN(event.target.value) || event.target.value <= 0)
    event.target.style.background = "pink";
  else event.target.style.background = "lightgreen";
}

export function validateForm(target) {
  let flag = true;
  if (target.name.value === "" || target.name.value.length > 100) {
    alert("Product name cannot be empty or longer than 100 symbols.");
    flag = false;
  }
  if (isNaN(target.price.value) || target.price.value <= 0) {
    alert("Product price cannot be empty, equal or lower than zero.");
    flag = false;
  }
  return flag;
}
