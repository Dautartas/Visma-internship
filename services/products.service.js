import { baseUrl } from "./index.js";
const url = baseUrl + "products";

export async function addProduct(product) {}

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
