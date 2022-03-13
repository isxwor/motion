import create from 'zustand';

export const useAnimationStore = create((set) => ({
  isAnimating: false,
  startAnimation: () => set({ isAnimating: true }),
  stopAnimation: () => set({ isAnimating: false }),
  toggleAnimation: () => set((state) => ({ isAnimating: !state.isAnimating })),
}));
