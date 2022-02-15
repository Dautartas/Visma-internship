const EDIT_SUBMIT_ID = "formEditSubmit";
const ERROR_COLOR = "pink";
const CORRECT_COLOR = "white";

let isNameValid = true;
let isPriceValid = true;

function submitButtonHandler() {
  let submit = document.getElementById(EDIT_SUBMIT_ID);
  submit.disabled = !(isNameValid && isPriceValid);
}

function validateInput(isValid, event) {
  if (isValid) {
    event.target.style.background = ERROR_COLOR;
    return 0;
  } else {
    event.target.style.background = CORRECT_COLOR;
    return 1;
  }
}

export function colorName(event) {
  let validation = event.target.value === "" || event.target.value.length > 100;
  isNameValid = validateInput(validation, event);
  submitButtonHandler();
}

export function colorPrice(event) {
  let validation = isNaN(event.target.value) || event.target.value <= 0;
  isPriceValid = validateInput(validation, event);
  submitButtonHandler();
}

export function validateForm(target) {
  let submit = target.formEditSubmit;
  let name = target.name;
  let price = target.price;

  if (name.value === "" || name.value.length > 100) {
    alert("Product name cannot be empty or longer than 100 symbols.");
    return false;
  }
  if (isNaN(price.value) || price.value <= 0) {
    alert("Product price cannot be empty, equal or lower than zero.");
    return false;
  }
  submit.disabled = true;
  submit.innerHTML = "Updating..."; // preventing multiple submits
  return true;
}
