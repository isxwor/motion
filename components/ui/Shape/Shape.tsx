import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { styled, StyletronComponent } from 'styletron-react';

const mapShapeToBorderStyle = {
  SQUARE: '1em',
  CIRCLE: '50%',
};

interface ShapeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  $shape: 'SQUARE' | 'CIRCLE';
}

const Shape: StyletronComponent<ShapeProps> = styled('div', ({ $shape }) => ({
  height: '5em',
  width: '5em',
  background: 'var(--color-primary)',
  borderRadius: mapShapeToBorderStyle[$shape],
  transition: '200ms border-radius ease',
}));

export default Shape;
