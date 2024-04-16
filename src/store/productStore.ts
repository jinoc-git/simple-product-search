import { create } from 'zustand';
import { ProductType } from '../types/aboutProduct';

interface ProductStore {
  productList: ProductType[];
  initProduct: (list: ProductType[]) => void;
  setProductList: (list: ProductType[]) => void;
}

export const productStore = create<ProductStore>((set, get) => ({
  productList: [],
  initProduct: (list: ProductType[]) => {
    set({ productList: list });
  },
  setProductList: (list: ProductType[]) => {
    const origin = get().productList;
    set({ productList: origin.concat(list) });
  },
}));
