import create from 'zustand';

export const useSpeedStore = create((set) => ({
  speed: 1,
  setSpeed: (speed) => set({ speed }),
}));
