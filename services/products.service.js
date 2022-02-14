import { baseUrl } from "./index.js";
const url = baseUrl + "products";

function mapProduct(product) {
  return {
    name: product.name,
    price: product.price,
    image: product.image,
    onSale: product.onSale,
  };
}

export async function addProduct(event) {
  console.log(event.target);
  alert(event);
  // product = mapProduct(product);
  product = {
    name: "TEST DATA",
    price: "3.0",
    image: "assets/product.png",
    onSale: "true",
  };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(product),
  });
  const content = await response.json();

  console.log(content);
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
