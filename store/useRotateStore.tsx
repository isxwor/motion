import create from 'zustand';
import { combine } from 'zustand/middleware';

export const useRotateStore = create(
  combine(
    {
      rotate: 180,
    },
    (set) => ({
      setRotate: (rotate: number) => set({ rotate }),
    })
  )
);
