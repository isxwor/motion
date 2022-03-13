import create from 'zustand';

const SHAPES = {
  square: 'SQUARE',
  circle: 'CIRCLE',
};

const useShapeStore = create((set) => ({
  currentShape: SHAPES.square,
  setCurrentShape: (shape) => set({ currentShape: SHAPES[shape] }),
}));

export { SHAPES, useShapeStore };
