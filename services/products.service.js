const dataPath = "../data/products.json";

export async function loadData() {
  try {
    const response = await fetch(dataPath);
    const data = await response.json();
    return data;
  } catch (err) {
    return console.log("Error while fetching the data: " + err.message);
  }
}
