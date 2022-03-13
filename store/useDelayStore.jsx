import create from 'zustand';

export const useDelayStore = create((set) => ({
  delay: 0,
  setDelay: (delay) => set({ delay }),
}));
