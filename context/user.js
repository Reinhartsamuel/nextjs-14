import { create } from 'zustand'

const useAuthStore = create((set) => ({
    userCredentials: {},
    userData: {},
    setUserCredentials: (payload) => set(() => ({ userCredentials: payload })),
    setUserData: (payload) => set(() => ({ userData: payload })),
    resetUser: () => set({ userCredentials: {}, userData: {} }),
}));



export default useAuthStore;