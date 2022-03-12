import { styled } from 'styletron-react';

const mapShapeToBorderStyle = {
  square: '1em',
  circle: '50%',
};

const Shape = styled('div', ({ $shape, $sx }) => ({
  height: '5em',
  width: '5em',
  background: 'var(--color-primary)',
  borderRadius: mapShapeToBorderStyle[$shape] || mapShapeToBorderStyle.square,
  // this will be dynamically generated in future
  transition: '200ms border-radius ease',
  ...$sx,
}));

export default Shape;
