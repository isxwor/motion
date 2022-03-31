import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { styled, StyletronComponent } from 'styletron-react';

import type { ShapeT } from '@store/useShapeStore';

const mapShapeToBorderStyle: Record<ShapeT, string> = {
  square: '1em',
  circle: '50%',
};

interface ShapeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  $shape: ShapeT;
}

const Shape: StyletronComponent<ShapeProps> = styled('div', ({ $shape }) => ({
  height: '5em',
  width: '5em',
  background: 'var(--color-primary)',
  borderRadius: mapShapeToBorderStyle[$shape],
  transition: '200ms border-radius ease',
}));

export default Shape;
