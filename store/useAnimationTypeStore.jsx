import create from 'zustand';

const ANIMATION_TYPES = {
  scale: 'SCALE',
  slide: 'SLIDE',
  rotate: 'ROTATE',
};

const useAnimationTypeStore = create((set) => ({
  animationType: ANIMATION_TYPES.scale,
  setAnimationType: (type) => set({ animationType: ANIMATION_TYPES[type] }),
}));

export { ANIMATION_TYPES, useAnimationTypeStore };
