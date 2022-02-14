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
  if (target.name.value === "" || target.name.value.length > 100) {
    alert("Product name cannot be empty or longer than 100 symbols.");
    return false;
  }
  if (isNaN(target.price.value) || target.price.value <= 0) {
    alert("Product price cannot be empty, equal or lower than zero.");
    return false;
  }
  if (target.formAddSubmit) {
    target.formAddSubmit.disabled = true;
    target.formAddSubmit.innerHTML = "Adding...";
  } // preventing multiple submits
  if (target.formEditSubmit) {
    target.formEditSubmit.disabled = true;
    target.formEditSubmit.innerHTML = "Updating...";
  } // preventing multiple edits

  return true;
}
