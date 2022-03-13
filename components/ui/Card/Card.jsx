import { styled } from 'styletron-react';

const Card = ({ elevation, title, sx, children }) => (
  <Root $elevation={elevation} $sx={sx}>
    {title && <Title>{title}</Title>}
    {children}
  </Root>
);

const mapElevationToBackground = {
  0: 'var(--color-background-card)',
  1: 'var(--color-background-card-elevated)',
};

const Root = styled('div', ({ $elevation, $sx }) => ({
  paddingTop: 'var(--padding)',
  paddingBottom: 'var(--padding)',
  paddingLeft: 'var(--padding)',
  paddingRight: 'var(--padding)',
  borderRadius: '1em',
  background:
    mapElevationToBackground[$elevation] || mapElevationToBackground[0],
  ...$sx,
}));

const Title = styled('h4', {
  marginBottom: '1rem',
});

export default Card;
