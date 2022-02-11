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

export function renderAddForm() {
  const FORM_PREFIX = "form-add";
  const FORM_ID_PREFIX = "formAdd";
  let shopGrid = document.querySelector(".shop__grid");
  shopGrid.innerHTML = "";
  //-----------------------------------------------------------------------

  const productAddName = document.createElement("input");
  productAddName.classList.add(
    FORM_PREFIX + "__input",
    FORM_PREFIX + "__input--text"
  );
  productAddName.id = FORM_ID_PREFIX + "Name";

  productAddName.type = "text";
  productAddName.placeholder = "Name of the product";

  const productAddNameLabel = document.createElement("label");
  productAddNameLabel.appendChild(document.createTextNode("Name"));
  productAddNameLabel.setAttribute("for", productAddName.id);
  productAddNameLabel.classList.add(FORM_PREFIX + "__label");

  //-----------------------------------------------------------------------

  const productAddPrice = document.createElement("input");
  productAddPrice.classList.add(
    FORM_PREFIX + "__input",
    FORM_PREFIX + "__input--text"
  );

  productAddPrice.id = FORM_ID_PREFIX + "Price";

  productAddName.type = "text";
  productAddPrice.placeholder = "Price of the product";

  const productAddPriceLabel = document.createElement("label");
  productAddPriceLabel.appendChild(document.createTextNode("Price"));
  productAddPriceLabel.setAttribute("for", productAddName.id);
  productAddPriceLabel.classList.add(FORM_PREFIX + "__label");

  //-----------------------------------------------------------------------

  const productAddSale = document.createElement("input");
  productAddSale.classList.add(
    FORM_PREFIX + "__input",
    FORM_PREFIX + "__input--checkbox"
  );

  productAddSale.id = FORM_ID_PREFIX + "Sale";

  productAddSale.type = "checkbox";

  const productAddSaleLabel = document.createElement("label");
  productAddSaleLabel.appendChild(document.createTextNode("On sale?"));
  productAddSaleLabel.setAttribute("for", productAddSale.id);
  productAddSaleLabel.classList.add(FORM_PREFIX + "__label");

  //-----------------------------------------------------------------------

  const productAddSubmit = document.createElement("input");
  productAddSubmit.classList.add(
    FORM_PREFIX + "__input",
    FORM_PREFIX + "__input--submit"
  );
  productAddSubmit.type = "submit";
  productAddSubmit.value = "Add";

  //-----------------------------------------------------------------------

  const productAddImageOption1 = document.createElement("option");
  productAddImageOption1.text = "option1";

  const productAddImageOption2 = document.createElement("option");
  productAddImageOption2.text = "option2";

  const productAddImageOption3 = document.createElement("option");
  productAddImageOption3.text = "option3";

  const productAddImageOption4 = document.createElement("option");
  productAddImageOption4.text = "option4";

  productAddImageOption1.className =
    productAddImageOption2.className =
    productAddImageOption3.className =
    productAddImageOption4.className =
      FORM_PREFIX + "__option";

  //-----------------------------------------------------------------------

  const productAddImage = document.createElement("select");
  productAddImage.class = FORM_PREFIX + "__image-select";

  productAddImage.id = FORM_ID_PREFIX + "Image";

  productAddImage.append(
    productAddImageOption1,
    productAddImageOption2,
    productAddImageOption3,
    productAddImageOption4
  );

  const productAddImageLabel = document.createElement("label");
  productAddImageLabel.appendChild(document.createTextNode("Select image"));
  productAddImageLabel.setAttribute("for", productAddImage.id);
  productAddImageLabel.classList.add(FORM_PREFIX + "__label");

  //-----------------------------------------------------------------------

  const productAddForm = document.createElement("form");
  productAddForm.className = FORM_PREFIX;

  productAddForm.append(
    productAddNameLabel,
    productAddName,
    productAddPriceLabel,
    productAddPrice,
    productAddImageLabel,
    productAddImage,
    productAddSaleLabel,
    productAddSale,
    productAddSubmit
  );

  shopGrid.append(productAddForm);
}
