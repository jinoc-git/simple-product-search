import { create } from 'zustand';

interface SearchStore {
  state: {
    keyWord: string;
    isSearched: boolean;
  };
  actions: {
    search: (keyWord: string) => void;
    resetSearch: () => void;
  };
}

export const searchStore = create<SearchStore>((set, get) => ({
  state: {
    keyWord: '',
    isSearched: false,
  },
  actions: {
    search: (keyWord: string) => {
      set({ state: { keyWord, isSearched: true } });
    },
    resetSearch: () => {
      set({ state: { keyWord: '', isSearched: false } });
    },
  },
}));

export const useSearchStoreState = () => searchStore((store) => store.state);
export const useSearchStoreActions = () => searchStore((store) => store.actions);
