import create from 'zustand';
import { combine } from 'zustand/middleware';

export const useSpeedStore = create(
  combine({ speed: 1 }, (set) => ({
    setSpeed: (speed: number) => set({ speed }),
  }))
);
