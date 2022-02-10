export async function loadData(path) {
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (err) {
    return console.log("Error while fetching the data: " + err.message);
  }
}
