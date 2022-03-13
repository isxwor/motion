import create from 'zustand';

export const useRotateStore = create((set) => ({
  rotate: 180,
  setRotate: (rotate) => set({ rotate }),
}));
