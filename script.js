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
      let name = product.name;
      if (name.length > 20) name = name.substring(0, 17) + "...";
      shopGrid.innerHTML += `<div class="product" id="product-${product.id}">
              <img src=${product.image} alt="product" class="product__image" />
              <div class="product__info">
                <span class="product__info__name" title="${product.name}">${name}</span>
                <span class="product__info__price">${product.price} €</span>
              </div>
              <button class="product__add">Add to cart</button>
            </div>`;
      // FIXME:innerHTML
      if (product.sale === "true") {
        let element = document.getElementById(`product-${product.id}`);
        console.log(element);
        element.innerHTML += `<span class="product__sale">SALE</span>`;
      }
    });
  });
}
function addToCart(event) {
  console.log(event.target.elements);
}

function renderCart(event) {
  console.log("Cart rendering...");
}

function addEventListeners() {
  Array.from(document.getElementsByClassName("product__add")).forEach(
    (button) => {
      button.addEventListener("click", addToCart);
    }
  );

  document.getElementById("shop").addEventListener("click", renderShop);
  document.getElementById("cart").addEventListener("click", renderCart);
}
