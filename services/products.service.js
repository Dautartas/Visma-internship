import { baseUrl } from "./index.js";
const url = baseUrl + "products";

function chooseImage(option) {
  return `assets/${option}.png`;
}

function mapProduct(data) {
  return {
    name: data.name.value,
    price: data.price.value,
    image: chooseImage(data.image.value),
    onSale: data.onSale.value == "on" ? "true" : "false",
  };
}

export async function addProduct(event) {
  event.preventDefault();
  console.log(event);
  let product = mapProduct(event.target);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(product),
  });

  // const content = await response.json();
  // console.log(content);
}

export async function getProducts() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error while getting products from database: " + err.message);
  }
}

export async function updateProduct(id) {}

export async function deleteProduct(id) {}
