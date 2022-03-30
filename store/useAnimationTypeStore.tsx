import create from 'zustand';
import { combine } from 'zustand/middleware';

const ANIMATION_TYPES = {
  scale: 'SCALE',
  slide: 'SLIDE',
  rotate: 'ROTATE',
};

export type State = keyof typeof ANIMATION_TYPES;

const useAnimationTypeStore = create(
  combine(
    {
      animationType: ANIMATION_TYPES.scale,
    },
    (set) => ({
      setAnimationType: (type: State) =>
        set({ animationType: ANIMATION_TYPES[type] }),
    })
  )
);

export { ANIMATION_TYPES, useAnimationTypeStore };
