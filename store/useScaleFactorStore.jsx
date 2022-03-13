import create from 'zustand';

export const useScaleFactorStore = create((set) => ({
  scaleFactor: 1.5,
  setScaleFactor: (scaleFactor) => set({ scaleFactor }),
}));
