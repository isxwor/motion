import create from 'zustand';
import { combine } from 'zustand/middleware';

export const useDelayStore = create(
  combine(
    {
      delay: 0,
    },
    (set) => ({
      setDelay: (delay: number) => set({ delay }),
    })
  )
);
