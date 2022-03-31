import create from 'zustand';
import { combine } from 'zustand/middleware';

export type ShapeT = 'square' | 'circle';

const useShapeStore = create(
  combine(
    {
      currentShape: 'square' as ShapeT,
    },
    (set) => ({
      setCurrentShape: (shape: ShapeT) => set({ currentShape: shape }),
    })
  )
);

export { useShapeStore };
