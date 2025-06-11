import { create } from "zustand";
import { UseStoreState } from "..";


export const useStore = create<UseStoreState>((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}));