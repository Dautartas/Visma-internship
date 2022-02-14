import { addProduct } from "../../services/products.service.js";
import { colorName, colorPrice, validateForm } from "./validations.js";
/**
 * function that renders product add form
 * <form>
 *    <input type="checkbox">
 *    <input type="checkbox">
 *    <select>
 *        <option></option>
 *    </select>
 *    <input type="checkbox">
 *    <input type="submit">
 * </form>
 */
function submitForm(event) {
  event.preventDefault();
  if (validateForm(event.target)) addProduct(event);
}

export function renderAddForm() {
  //innerhtml
  const imageChoices = ["hat", "tshirt", "pants", "shoes"];
  const FORM_PREFIX = "form-add";
  const FORM_ID_PREFIX = "formAdd";
  document.querySelector(".shop__filter").remove();
  document.querySelector(".shop__grid").innerHTML = `
    <form class=${FORM_PREFIX} id ="${FORM_ID_PREFIX}">
      <label for="${FORM_ID_PREFIX}Name" class="${FORM_PREFIX}__label">
        Name
      </label>
      <input
        class="${FORM_PREFIX}__input ${FORM_PREFIX}__input--text"
        id="${FORM_ID_PREFIX}Name"
        type="text"
        name = "name"
        placeholder="Name of the product"
      />
      <label for="${FORM_ID_PREFIX}Name" class="${FORM_PREFIX}__label">
        Price
      </label>
      <input
        class="${FORM_PREFIX}__input ${FORM_PREFIX}__input--text"
        id="${FORM_ID_PREFIX}Price"
        name = "price"
        placeholder="Price of the product"
      />
      <label for="${FORM_ID_PREFIX}Image" class="${FORM_PREFIX}__label">
        Select image
      </label>
      <select id="${FORM_ID_PREFIX}Image" name="image">
        <option class="${FORM_PREFIX}__option">${imageChoices[0]}</option>
        <option class="${FORM_PREFIX}__option">${imageChoices[1]}</option>
        <option class="${FORM_PREFIX}__option">${imageChoices[2]}</option>
        <option class="${FORM_PREFIX}__option">${imageChoices[3]}</option>
      </select>
      <label for="${FORM_ID_PREFIX}Sale" class="${FORM_PREFIX}__label">
        On sale?
      </label>
      <input
        class="${FORM_PREFIX}__input ${FORM_PREFIX}__input--checkbox"
        id="${FORM_ID_PREFIX}Sale"
        name ="onSale"
        type="checkbox"
      />
      <button
        class="${FORM_PREFIX}__input ${FORM_PREFIX}__input--submit"
        id="${FORM_ID_PREFIX}Submit"
        type="submit"
      >Add</button>
    </form>`;

  const formName = document.getElementById(`${FORM_ID_PREFIX}Name`);
  formName.addEventListener("blur", colorName);
  const formPrice = document.getElementById(`${FORM_ID_PREFIX}Price`);
  formPrice.addEventListener("blur", colorPrice);

  const form = document.getElementById(FORM_ID_PREFIX);
  form.addEventListener("submit", submitForm);
}
