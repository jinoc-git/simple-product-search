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
    getMoreProducts: (data: FetchProductsReturn) => void;
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
      set({ state: { ...data, hasMore: true } });
    },
    setProducts: (data: FetchProductsReturn) => {
      const { total, products: newProducts } = data;
      const { products } = get().state;

      const hasMore = products.length + newProducts.length < total;

      set({ state: { ...data, hasMore } });
    },
    getMoreProducts: (data: FetchProductsReturn) => {
      const { products: newProducts } = data;
      const { total, products } = get().state;

      const hasMore = products.length + newProducts.length < total;
      set({ state: { ...data, products: [...products, ...newProducts], hasMore } });
    },
  },
}));

export const useProductStoreState = () => productStore((store) => store.state);
export const useProductStoreActions = () => productStore((store) => store.actions);
