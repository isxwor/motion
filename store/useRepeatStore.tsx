import create from 'zustand';
import { combine } from 'zustand/middleware';

// TODO: add infinite option
export const useRepeatStore = create(
  combine(
    {
      repeat: 1,
    },
    (set) => ({
      // setRepeat: (repeat) => set({ repeat }),
      incrementRepeat: () => set((state) => ({ repeat: state.repeat + 1 })),
      decrementRepeat: () => set((state) => ({ repeat: state.repeat - 1 })),
    })
  )
);
