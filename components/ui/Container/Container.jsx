import { styled } from 'styletron-react';

const Container = styled('div', ({ $sx }) => ({
  position: 'relative',
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingRight: 'var(--padding)',
  paddingLeft: 'var(--padding)',
  maxWidth: '1200px',
  ...$sx,
}));

export default Container;
