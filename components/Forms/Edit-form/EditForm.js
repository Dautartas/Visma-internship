import {
  getProduct,
  updateProduct,
  deleteProduct,
} from "../../../../services/products.service.js";
import { colorName, colorPrice, validateForm } from "./EditFormValidations.js";

const FORM_ID_PREFIX = "formEdit";
let currentProductId = null; // for editing product

function submitEditedForm(event) {
  event.preventDefault();
  if (validateForm(event.target)) updateProduct(event, currentProductId);
}
function removeProduct(event) {
  console.log(event.target);
  if (confirm("Delete the product?") == true) {
    event.target.disabled = true;
    event.target.innerHTML = "Deleting...";
    deleteProduct(currentProductId);
  }
}

/**
 * function that renders product edit form
 * <form>
 *    <input type="checkbox">
 *    <input type="checkbox">
 *    <select>
 *        <option></option>
 *    </select>
 *    <input type="checkbox">
 *    <button type="submit"></button>
 *    <button type="button"></button>
 * </form>
 */
export function renderEditForm(id) {
  const imageChoices = ["hat", "tshirt", "pants", "shoes"];
  document.querySelector(".shop__filter").remove();
  document.querySelector(".shop__grid").innerHTML = `
      <form class=form id ="${FORM_ID_PREFIX}">
        <label for="${FORM_ID_PREFIX}Name" class="form__label">
          Name
        </label>
        <input
          class="form__input form__input--text"
          id="${FORM_ID_PREFIX}Name"
          type="text"
          name = "name"
          placeholder="Name of the product"
        />
        <label for="${FORM_ID_PREFIX}Name" class="form__label">
          Price
        </label>
        <input
          class="form__input form__input--text"
          id="${FORM_ID_PREFIX}Price"
          name = "price"
          placeholder="Price of the product"
        />
        <label for="${FORM_ID_PREFIX}Image" class="form__label">
          Select image
        </label>
        <select id="${FORM_ID_PREFIX}Image" name="image">
          <option class="form__option">${imageChoices[0]}</option>
          <option class="form__option">${imageChoices[1]}</option>
          <option class="form__option">${imageChoices[2]}</option>
          <option class="form__option">${imageChoices[3]}</option>
        </select>
        <label for="${FORM_ID_PREFIX}Sale" class="form__label">
          On sale?
        </label>
        <input
          class="form__input form__input--checkbox"
          id="${FORM_ID_PREFIX}Sale"
          name ="onSale"
          type="checkbox"
        />
        <button
          class="form__input form__input--submit"
          id="${FORM_ID_PREFIX}Submit"
          type="submit"
        >Update</button>
        <button
          class="form__input form__input--submit"
          id="${FORM_ID_PREFIX}Delete"
          type="button"
        >Delete Product</button>
      </form>`;

  fillEditForm(id);

  const formName = document.getElementById(`${FORM_ID_PREFIX}Name`);
  formName.addEventListener("blur", colorName);
  const formPrice = document.getElementById(`${FORM_ID_PREFIX}Price`);
  formPrice.addEventListener("blur", colorPrice);

  const form = document.getElementById(FORM_ID_PREFIX);
  form.addEventListener("submit", submitEditedForm);

  const deleteButton = document.getElementById(`${FORM_ID_PREFIX}Delete`);
  deleteButton.addEventListener("click", removeProduct);
}

async function fillEditForm(id) {
  currentProductId = id;
  let product = await getProduct(id);
  document.getElementById(`${FORM_ID_PREFIX}Name`).value = product.name;
  document.getElementById(`${FORM_ID_PREFIX}Price`).value = product.price;
  document.getElementById(`${FORM_ID_PREFIX}Image`).value = product.image.slice(
    7,
    -4
  ); // slice removes assets/ in the front and .png in the back
  document.getElementById(`${FORM_ID_PREFIX}Sale`).checked = product.onSale;
}
