import { FetchProductsReturn, ProductType } from '../types/aboutProduct';

export const fetchInitProductList = async () => {
  const res = await fetch('https://dummyjson.com/products?limit=10');
  const productList: FetchProductsReturn = await res.json();

  return productList;
};

export const fetchProductById = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const productList: ProductType = await res.json();

  return productList;
};

export const fetchMoreInitProductList = async (skip: number) => {
  const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`);
  const productList: FetchProductsReturn = await res.json();

  return productList;
};

export const fetchProductListByKeyWord = async (keyWord: string) => {
  const res = await fetch(`https://dummyjson.com/products/search?q=${keyWord}&limit=10`);
  const productList: FetchProductsReturn = await res.json();

  return productList;
};
