import create from 'zustand';
import { combine } from 'zustand/middleware';

const SHAPES = {
  square: 'SQUARE',
  circle: 'CIRCLE',
};

type State = keyof typeof SHAPES;

const useShapeStore = create(
  combine(
    {
      currentShape: SHAPES.square,
    },
    (set) => ({
      setCurrentShape: (shape: State) => set({ currentShape: SHAPES[shape] }),
    })
  )
);

export { SHAPES, useShapeStore };
