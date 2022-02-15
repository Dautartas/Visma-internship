import { baseUrl } from "./index.js";
const url = baseUrl + "posts";

export async function addPosts(posts) {}

export async function getPosts() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error while getting products from database: " + err.message);
  }
}

export async function updatePosts(id) {}

export async function deletePosts(id) {}
