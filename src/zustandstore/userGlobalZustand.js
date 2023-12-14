import { create } from "zustand";

export const userDataZustand = create(set => ({
    userPassword : [],
    addUserPassword : () => set(state => ({userPassword : [...state.userPassword, state.userPassword]}))
}))