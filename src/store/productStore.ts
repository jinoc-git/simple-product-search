import { create } from 'zustand';
import { ProductType } from '../types/aboutProduct';

interface ProductStore {
  productList: ProductType[];
  setProductList: (list: ProductType[]) => void;
}

export const productStore = create<ProductStore>((set, get) => ({
  productList: [],
  setProductList: (list: ProductType[]) => {
    set({ productList: list });
  },
}));
