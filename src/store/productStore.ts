import { create } from 'zustand';
import { FetchProductsReturn } from '../types/aboutProduct';

export interface ProductStoreState extends FetchProductsReturn {
  hasMore: boolean;
}

interface ProductStore {
  state: ProductStoreState;
  actions: {
    initProducts: (data: FetchProductsReturn) => void;
    setProducts: (data: FetchProductsReturn) => void;
    setMoreProducts: (data: FetchProductsReturn) => void;
    resetProducts: () => void;
  };
}

export const productStore = create<ProductStore>((set, get) => ({
  state: {
    limit: 10,
    products: [],
    skip: 0,
    total: 0,
    hasMore: true,
  },
  actions: {
    initProducts: (data: FetchProductsReturn) => {
      set({ state: { ...data, hasMore: true, skip: data.products.length } });
    },
    setProducts: (data: FetchProductsReturn) => {
      const { total, products } = data;

      const hasMore = products.length < total;

      set({ state: { ...data, hasMore, skip: data.products.length } });
    },
    setMoreProducts: (data: FetchProductsReturn) => {
      const { products: newProducts } = data;
      const { total, products } = get().state;

      const hasMore = products.length + newProducts.length < total;
      const skip = products.length + newProducts.length;

      set({ state: { ...data, products: [...products, ...newProducts], hasMore, skip } });
    },
    resetProducts: () => {
      const state = get().state;
      set({ state: { ...state, products: [] } });
    },
  },
}));

export const useProductStoreState = () => productStore((store) => store.state);
export const useProductStoreActions = () => productStore((store) => store.actions);
