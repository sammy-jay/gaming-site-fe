import { create } from "zustand";

const useStore = create((set) => ({
  depositData: {
    gateway: "",
    amount: 0,
    currency: "USD",
    charge: 0,
    payable: 0,
    finalAmount: 0,
  },
  updateDepositData: (data) => set((state) => ({...state, depositData: {...state.depositData,...data } })),
}));

export default useStore;