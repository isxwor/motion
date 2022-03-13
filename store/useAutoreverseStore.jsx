import create from 'zustand';

export const useAutoreverseStore = create((set) => ({
  autoreverse: false,
  setAutoreverse: (value) => set({ autoreverse: value }),
}));
