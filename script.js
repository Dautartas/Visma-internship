// classnames as constants?
// function or const
renderShop();
addEventListeners();

async function loadData() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
  } catch (err) {
    return console.log("Error while fetching the data: " + err.message);
  }
}
function renderShop() {
  let shopGrid = document.querySelector(".shop__grid");
  shopGrid.innerHTML = "";
  loadData().then((data) => {
    data["products"].forEach((product) => {
      shopGrid.innerHTML += `<div class="product">
              <img src=${product.image} alt="product" class="product__image" />
              <div class="product__info">
                <span class="product__info__name">${product.name}</span>
                <span class="product__info__price">${product.price} €</span>
              </div>
              <button class="product__add">Add to cart</button>
            </div>`;
    });
  });
}
function addToCart(event) {
  console.log(event.target.elements);
}

function renderCart(event) {
  console.log("Cart rendering...");
}

function renderAccount(event) {
  console.log("Profile rendering...");
}

function addEventListeners() {
  Array.from(document.getElementsByClassName("product__add")).forEach(
    (button) => {
      button.addEventListener("click", addToCart);
    }
  );

  document.getElementById("products").addEventListener("click", renderShop);
  document.getElementById("cart").addEventListener("click", renderCart);
  document.getElementById("account").addEventListener("click", renderAccount);
}
