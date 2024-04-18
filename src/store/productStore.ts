import { create } from 'zustand';
import { ProductType } from '../types/aboutProduct';

interface ProductStore {
  productList: ProductType[];
  actions: {
    initProduct: (list: ProductType[]) => void;
    addProductList: (list: ProductType[]) => void;
    setProductList: (list: ProductType[]) => void;
  };
}

export const productStore = create<ProductStore>((set, get) => ({
  productList: [],
  actions: {
    initProduct: (list: ProductType[]) => {
      set({ productList: list });
    },
    addProductList: (list: ProductType[]) => {
      const origin = get().productList;
      set({ productList: origin.concat(list) });
    },
    setProductList: (list: ProductType[]) => {
      set({ productList: list });
    },
  },
}));

export const useProductList = () => productStore((store) => store.productList);
export const useProductActions = () => productStore((store) => store.actions);
