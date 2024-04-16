export const getAllProduct = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const productList = await res.json();

  return productList;
};
