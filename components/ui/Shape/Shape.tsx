import { styled, StyletronComponent } from 'styletron-react';

const mapShapeToBorderStyle = {
  SQUARE: '1em',
  CIRCLE: '50%',
};

interface ShapeProps {
  $shape: 'SQUARE' | 'CIRCLE';
}

const Shape: StyletronComponent<ShapeProps> = styled('div', ({ $shape }) => ({
  height: '5em',
  width: '5em',
  background: 'var(--color-primary)',
  borderRadius: mapShapeToBorderStyle[$shape] || mapShapeToBorderStyle.SQUARE,
  // this will be dynamically generated in future
  transition: '200ms border-radius ease',
}));

export default Shape;
