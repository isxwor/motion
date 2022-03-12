import { styled } from 'styletron-react';

const mapElevationToBackground = {
  0: 'var(--color-background-card)',
  1: 'var(--color-background-card-elevated)',
};

const Card = styled('div', ({ $elevation }) => ({
  background:
    mapElevationToBackground[$elevation] || mapElevationToBackground[0],
}));

export default Card;
