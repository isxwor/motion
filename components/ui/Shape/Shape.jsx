import { styled } from 'styletron-react';

const mapShapeToBorderStyle = {
  square: '1em',
  circle: '50%',
};

const Shape = styled('div', ({ $shape }) => ({
  height: '5em',
  width: '5em',
  background: 'var(--color-primary)',
  borderRadius: mapShapeToBorderStyle[$shape] || mapShapeToBorderStyle.square,
  // this will be dynamically generated in future
  transition: '200ms all ease',
}));

export default Shape;