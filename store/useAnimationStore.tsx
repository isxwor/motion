import create from 'zustand';
import { combine } from 'zustand/middleware';

export const useAnimationStore = create(
  combine(
    {
      isAnimating: false,
    },
    (set) => ({
      startAnimation: () => set({ isAnimating: true }),
      stopAnimation: () => set({ isAnimating: false }),
      toggleAnimation: () =>
        set((state) => ({ isAnimating: !state.isAnimating })),
    })
  )
);
