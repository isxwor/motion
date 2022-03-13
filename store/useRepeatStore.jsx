import create from 'zustand';

// TODO: add infinite option
export const useRepeatStore = create((set) => ({
  repeat: 1,
  // setRepeat: (repeat) => set({ repeat }),
  incrementRepeat: () => set((state) => ({ repeat: state.repeat + 1 })),
  decrementRepeat: () => set((state) => ({ repeat: state.repeat - 1 })),
}));
