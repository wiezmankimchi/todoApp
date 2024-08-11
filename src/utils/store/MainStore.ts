import { create } from "zustand";

interface MainState {
    products: number,
    increase: (by:number) => void,
    decrease: (by:number) => void
}

export const useMainStore = create<MainState>()((set)=>({
    products:0,
    increase: (by) => set((state)=>({products:state.products+by})),
    decrease: (by) => set((state)=>({products:state.products-by})),
}))