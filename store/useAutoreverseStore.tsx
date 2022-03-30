import create from 'zustand';
import { combine } from 'zustand/middleware';

export const useAutoreverseStore = create(
  combine(
    {
      autoreverse: false,
    },
    (set) => ({
      toggleAutoreverse: () =>
        set((state) => ({ autoreverse: !state.autoreverse })),
    })
  )
);
