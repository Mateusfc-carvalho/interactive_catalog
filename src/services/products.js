const URL = "https://dummyjson.com/products";

export async function getProducts() {
  try {
    const response = await fetch(URL);
    if(!response.ok) {
      throw new Error('unsuccessful request')
    }
    return response.json();
  }catch(err) {
    console.log(err);
  }
}
