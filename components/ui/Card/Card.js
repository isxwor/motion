import { styled } from 'styletron-react';

const mapElevationToBackground = {
  0: 'var(--color-background-card)',
  1: 'var(--color-background-card-elevated)',
};

const Card = styled('div', ({ $elevation }) => ({
  paddingTop: 'var(--padding)',
  paddingBottom: 'var(--padding)',
  paddingLeft: 'var(--padding)',
  paddingRight: 'var(--padding)',
  borderRadius: '1em',
  background:
    mapElevationToBackground[$elevation] || mapElevationToBackground[0],
}));

export default Card;
