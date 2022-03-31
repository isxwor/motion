import create from 'zustand';
import { combine } from 'zustand/middleware';

export type AnimationT = 'scale' | 'slide' | 'rotate';

const useAnimationTypeStore = create(
  combine(
    {
      animationType: 'scale' as AnimationT,
    },
    (set) => ({
      setAnimationType: (type: AnimationT) => set({ animationType: type }),
    })
  )
);

export { useAnimationTypeStore };
