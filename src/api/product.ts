import { ProductListResType, ProductType } from '../types/aboutProduct';

export const getInitProductList = async () => {
  const res = await fetch('https://dummyjson.com/products?limit=10');
  const productList: ProductListResType = await res.json();

  return productList;
};

export const getProductById = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const productList: ProductType = await res.json();

  return productList;
};

export const getMoreInitProductList = async (skip: number) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=10&skip=${skip}`,
  );
  const productList: ProductListResType = await res.json();

  return productList;
};

export const getProductListByKeyWord = async (keyWord: string) => {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${keyWord}&limit=10`,
  );
  const productList: ProductListResType = await res.json();

  return productList;
};
