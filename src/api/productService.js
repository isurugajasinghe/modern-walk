import client from ".";

export const limitResults = async ({ limitSize }) => {
  const response = await client().get(`products?limit=${limitSize}`);
  return response.data;
};

export const getAllCategories = async () => {
  const response = await client().get("products/categories");
  return response.data;
};

export const getProductsInCategory = async ({ categoryType }) => {
  const response = await client().get(`products/category/${categoryType}`);
  return response.data;
};
