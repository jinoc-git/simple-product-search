import { ProductListResType } from '../types/aboutProduct';

export const getAllProduct = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const productList: ProductListResType = await res.json();

  return productList;
};
