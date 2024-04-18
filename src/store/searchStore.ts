import { create } from 'zustand';

interface SearchStore {
  state: {
    keyWord: string;
    isSearched: boolean;
  };
  actions: {
    setKeyWord: (keyWord: string) => void;
    search: (keyWord: string) => void;
  };
}

export const searchStore = create<SearchStore>((set, get) => ({
  state: {
    keyWord: '',
    isSearched: false,
  },
  actions: {
    setKeyWord: (keyWord: string) => {
      const isSearched = get().state.isSearched;
      set({ state: { keyWord, isSearched } });
    },
    search: (keyWord: string) => {
      set({ state: { keyWord, isSearched: true } });
    },
  },
}));

export const useSearchStoreState = () => searchStore((store) => store.state);
export const useSearchStoreActions = () => searchStore((store) => store.actions);
