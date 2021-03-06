import {
  getProduct,
  updateProduct,
  deleteProduct,
} from "../../../../services/products.service.js";
import { colorName, colorPrice, validateForm } from "./EditFormValidations.js";
import {
  addClass,
  removeClass,
  IMAGE_CHOICES,
  FORM_EDIT_ID_PREFIX,
} from "../../../services/utils.js";
let currentProductId = null; // for editing product

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
  document.getElementById("newItemButton").remove();
  document.querySelector(".filter").remove();
  document.querySelector(".shop__grid").innerHTML = `
      <form class=form id ="${FORM_EDIT_ID_PREFIX}">
        <label for="${FORM_EDIT_ID_PREFIX}Name" class="form__label">
          Name
        </label>
        <input
          class="form__input form__input--text"
          id="${FORM_EDIT_ID_PREFIX}Name"
          type="text"
          name = "name"
          placeholder="Name of the product"
        />
        <label for="${FORM_EDIT_ID_PREFIX}Name" class="form__label">
          Price
        </label>
        <input
          class="form__input form__input--text"
          id="${FORM_EDIT_ID_PREFIX}Price"
          name = "price"
          placeholder="Price of the product"
        />
        <label for="${FORM_EDIT_ID_PREFIX}Image" class="form__label">
          Select image
        </label>
        <select id="${FORM_EDIT_ID_PREFIX}Image" name="image" class="form__input">
          <option class="form__option">${IMAGE_CHOICES[0]}</option>
          <option class="form__option">${IMAGE_CHOICES[1]}</option>
          <option class="form__option">${IMAGE_CHOICES[2]}</option>
          <option class="form__option">${IMAGE_CHOICES[3]}</option>
        </select>
        <label for="${FORM_EDIT_ID_PREFIX}Sale" class="form__label">
          On sale?
        </label>
        <input
          class="form__input form__input--checkbox"
          id="${FORM_EDIT_ID_PREFIX}Sale"
          name ="onSale"
          type="checkbox"
        />
        <button
          class="form__input--submit submit-green"
          id="${FORM_EDIT_ID_PREFIX}Submit"
          type="submit"
        >Update</button>
        <button
          class="form__input--submit submit-red"
          id="${FORM_EDIT_ID_PREFIX}Delete"
          type="button"
        >Delete Product</button>
      </form>`;

  fillEditForm(id);

  const formName = document.getElementById(`${FORM_EDIT_ID_PREFIX}Name`);
  formName.addEventListener("blur", colorName);
  const formPrice = document.getElementById(`${FORM_EDIT_ID_PREFIX}Price`);
  formPrice.addEventListener("blur", colorPrice);

  const form = document.getElementById(FORM_EDIT_ID_PREFIX);
  form.addEventListener("submit", submitEditedForm);

  const deleteButton = document.getElementById(`${FORM_EDIT_ID_PREFIX}Delete`);
  deleteButton.addEventListener("click", removeProduct);
}

function submitEditedForm(event) {
  event.preventDefault();
  if (validateForm(event.target)) updateProduct(event, currentProductId);
}

function removeProduct(event) {
  if (confirm("Delete the product?") == true) {
    event.target.disabled = true;
    event.target.innerHTML = "Deleting...";
    deleteProduct(currentProductId);
  }
}

async function fillEditForm(id) {
  currentProductId = id;
  const name = document.getElementById(`${FORM_EDIT_ID_PREFIX}Name`);
  const price = document.getElementById(`${FORM_EDIT_ID_PREFIX}Price`);
  const image = document.getElementById(`${FORM_EDIT_ID_PREFIX}Image`);
  const sale = document.getElementById(`${FORM_EDIT_ID_PREFIX}Sale`);

  addClass([name, price, image, sale], "loader-small");

  let product = await getProduct(id);

  removeClass([name, price, image, sale], "loader-small");

  name.value = product.name;
  price.value = product.price;
  image.value = product.image.slice(7, -4); // slice removes assets/ in the front and .png in the back
  sale.checked = product.onSale;
}
