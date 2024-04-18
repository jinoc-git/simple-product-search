import { create } from 'zustand';
import { FetchProductsReturn, ProductType } from '../types/aboutProduct';

export interface ProductStoreState extends FetchProductsReturn {}

interface ProductStore {
  state: ProductStoreState;
  actions: {
    initProduct: (data: ProductStoreState) => void;
    addProducts: (list: ProductType[]) => void;
    setProducts: (list: ProductType[]) => void;
  };
}

export const productStore = create<ProductStore>((set, get) => ({
  state: {
    limit: 10,
    products: [],
    skip: 0,
    total: 0,
  },
  actions: {
    initProduct: (data: ProductStoreState) => {
      set({ state: data });
    },
    addProducts: (list: ProductType[]) => {
      const origin = get().state;
      set({ state: { ...origin, products: [...origin.products, ...list] } });
    },
    setProducts: (products: ProductType[]) => {
      const origin = get().state;
      set({ state: { ...origin, products } });
    },
  },
}));

export const useProductStoreState = () => productStore((store) => store.state);
export const useProductStoreActions = () => productStore((store) => store.actions);
