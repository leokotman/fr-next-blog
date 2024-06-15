import { create } from 'zustand';

export interface IAuthStoreInterface {
  isAuthenticated: boolean; // a boolean value indicating whether the user is authenticated or not
  setIsAuthenticated: (val: boolean) => void; // a function to set the authentication status
  user: any; // an object that stores user information
  setUser: (user: any) => void; // a function to set user information
}

export const defaultInitState: IAuthStoreInterface = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: {},
  setUser: () => {},
};

// create our store
export const useAuthStore = (
  initState: IAuthStoreInterface = defaultInitState
) =>
  create<IAuthStoreInterface>((set) => ({
    ...defaultInitState,
    isAuthenticated: false, // initial value of authenticated property
    setIsAuthenticated: (val) => set((state) => ({ isAuthenticated: val })), // function to set the authentication status
    user: {}, // initial value of user property
    setUser: (user) => set({ user }), // function to set user information
  }));
