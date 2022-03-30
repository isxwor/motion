import create from 'zustand';
import { combine } from 'zustand/middleware';

const SHAPES = {
  square: 'SQUARE',
  circle: 'CIRCLE',
};

export type State = keyof typeof SHAPES;
type Value = 'SQUARE' | 'CIRCLE';

const useShapeStore = create(
  combine(
    {
      currentShape: SHAPES.square as Value,
    },
    (set) => ({
      setCurrentShape: (shape: State) =>
        set({ currentShape: SHAPES[shape] as Value }),
    })
  )
);

export { SHAPES, useShapeStore };
