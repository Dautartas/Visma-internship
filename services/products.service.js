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
    onSale: data.onSale.checked,
  };
}

export async function addProduct(event) {
  event.preventDefault();
  let product = mapProduct(event.target);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(product),
    });
  } catch (err) {
    console.log("Error while adding the product: " + err.message);
  }

  // const content = await response.json();
  // console.log(content);
}

export async function getProducts() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error while getting products: " + err.message);
  }
}

export async function getProduct(id) {
  try {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error while getting product: " + err.message);
  }
}

export async function updateProduct(event, id) {
  event.preventDefault();
  let product = mapProduct(event.target);
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(product),
    });
  } catch (err) {
    console.log("Error while updating the product: " + err.message);
  }
}

export async function deleteProduct(id) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log("Error while deleting the product: " + err.message);
  }
}
