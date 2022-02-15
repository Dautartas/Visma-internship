import { addProduct } from "../../../../services/products.service.js";
import { colorName, colorPrice, validateForm } from "./AddFormValidations.js";
import { IMAGE_CHOICES } from "../../../services/utils.js";
import { FORM_ADD_ID_PREFIX } from "../../../services/utils.js";

function submitForm(event) {
  event.preventDefault();
  if (validateForm(event.target)) addProduct(event);
}

/**
 * function that renders product add form
 * <form>
 *    <input type="checkbox">
 *    <input type="checkbox">
 *    <select>
 *        <option></option>
 *    </select>
 *    <input type="checkbox">
 *    <button type="submit"></button>
 * </form>
 */
export function renderAddForm() {
  document.querySelector(".shop__filter").remove();
  document.querySelector(".shop__grid").innerHTML = `
    <form class=form id ="${FORM_ADD_ID_PREFIX}">
      <label for="${FORM_ADD_ID_PREFIX}Name" class="form__label">
        Name
      </label>
      <input
        class="form__input form__input--text"
        id="${FORM_ADD_ID_PREFIX}Name"
        type="text"
        name = "name"
        placeholder="Name of the product"
      />
      <label for="${FORM_ADD_ID_PREFIX}Name" class="form__label">
        Price
      </label>
      <input
        class="form__input form__input--text"
        id="${FORM_ADD_ID_PREFIX}Price"
        name = "price"
        placeholder="Price of the product"
      />
      <label for="${FORM_ADD_ID_PREFIX}Image" class="form__label">
        Select image
      </label>
      <select id="${FORM_ADD_ID_PREFIX}Image" name="image">
        <option class="form__option">${IMAGE_CHOICES[0]}</option>
        <option class="form__option">${IMAGE_CHOICES[1]}</option>
        <option class="form__option">${IMAGE_CHOICES[2]}</option>
        <option class="form__option">${IMAGE_CHOICES[3]}</option>
      </select>
      <label for="${FORM_ADD_ID_PREFIX}Sale" class="form__label">
        On sale?
      </label>
      <input
        class="form__input form__input--checkbox"
        id="${FORM_ADD_ID_PREFIX}Sale"
        name ="onSale"
        type="checkbox"
      />
      <button
        class="form__input form__input--submit"
        id="${FORM_ADD_ID_PREFIX}Submit"
        type="submit"
        disabled
      >Add</button>
    </form>`;

  const formName = document.getElementById(`${FORM_ADD_ID_PREFIX}Name`);
  formName.addEventListener("blur", colorName);
  const formPrice = document.getElementById(`${FORM_ADD_ID_PREFIX}Price`);
  formPrice.addEventListener("blur", colorPrice);

  const form = document.getElementById(FORM_ADD_ID_PREFIX);
  form.addEventListener("submit", submitForm);
}
