import { styled } from 'styletron-react';

const mapShapeToBorderStyle = {
  square: '1em',
  cirlce: '50%',
};

const Shape = styled('div', ({ $shape }) => ({
  height: '5em',
  width: '5em',
  background: 'var(--color-primary)',
  borderRadius: mapShapeToBorderStyle[$shape] || mapShapeToBorderStyle.square,
}));

export default Shape;
