import create from 'zustand';

export const useAutoreverseStore = create((set) => ({
  autoreverse: false,
  toggleAutoreverse: () =>
    set((state) => ({ autoreverse: !state.autoreverse })),
}));
