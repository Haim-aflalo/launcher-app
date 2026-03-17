import { create } from "zustand";

export const useAuth = create((set) => ({
  userType: "",
  setUserType: (newUserType) => set({ userType: newUserType }),
  logOut: () => set({ userType: "" }),
}));
