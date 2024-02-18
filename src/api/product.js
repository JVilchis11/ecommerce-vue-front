import { API_URL } from "../utils/constants";

export async function getProducts(limit = 40) {
  try {
    // const response = await fetch(
    //   `${API_URL}/api/products?_sort=created_at:desc&_limit=${limit}`
    // );
    const response = await fetch(`${API_URL}/api/products?populate=*&sort=createdAt%3Aasc&pagination[limit]=${limit}`);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProductsCategory(category) {
  try {
    const response = await fetch(
      // `${API_URL}/products?_where[category.slug]=${category}&_sort=created_at:desc`
      `${API_URL}/api/products?fields=name,price&populate=image,category&filters[category][slug][$eq]=${category}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}