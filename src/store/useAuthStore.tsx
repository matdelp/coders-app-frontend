import { create } from "zustand";

type Authentication = {
  isAuthenticated: boolean;
  user: string;
  token: number;
  login: (user: string, token: number) => void;
  logout: () => void;
};

export const useAuth = create<Authentication>((set) => ({
  isAuthenticated: false,
  user: "",
  token: 0,

  login: (user, token) => set({ isAuthenticated: true, user, token }),
  logout: () => set({ isAuthenticated: false, user: "", token: 0 }),
}));
