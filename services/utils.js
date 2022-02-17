export const INDEX_PAGE = "index";
export const CART_PAGE = "cart";
export const PRODUCT_PREFIX = "product";

export const ADD_SUBMIT_ID = "formAddSubmit";
export const EDIT_SUBMIT_ID = "formEditSubmit";
export const ERROR_COLOR = "pink";
export const CORRECT_COLOR = "white";

export const IMAGE_CHOICES = ["hat", "tshirt", "pants", "shoes"];

export const FORM_ADD_ID_PREFIX = "formAdd";
export const FORM_EDIT_ID_PREFIX = "formEdit";
export const FILTER_PREFIX = "filter"; // constants.js share arba core folderis

export function addClass(elements, className) {
  //domAddClass
  elements.forEach((element) => {
    element.classList.add(className);
  });
}

export function removeClass(elements, className) {
  elements.forEach((element) => {
    try {
      element.classList.remove(className);
    } catch (error) {
      console.error("Cannot remove class from element " + error);
    }
  });
}
