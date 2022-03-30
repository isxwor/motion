import create from 'zustand';
import { combine } from 'zustand/middleware';

export const useScaleFactorStore = create(
  combine(
    {
      scaleFactor: 1.5,
    },
    (set) => ({
      setScaleFactor: (scaleFactor: number) => set({ scaleFactor }),
    })
  )
);
