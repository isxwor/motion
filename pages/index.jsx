import { styled } from 'styletron-react';

import { Layout } from '@components/common';

const Home = () => (
  <Grid>
    <Card>Playgorund</Card>
    <Card>Controls</Card>
  </Grid>
);

const Grid = styled('div', {
  '--appbar-height': '40px', // computed value

  marginTop: 'var(--padding)',
  marginBottom: 'var(--padding)',
  height: 'calc(100vh - var(--appbar-height) - var(--padding) * 2)',
  display: 'grid',
  gap: 'var(--padding)',
  '@media screen and (min-width: 580px)': {
    gridTemplateColumns: '2fr 1fr',
  },
});

const mapElevationToBackground = {
  0: 'var(--color-background-card)',
  1: 'var(--color-background-card-elevated)',
};

const Card = styled('div', ({ $elevation }) => ({
  background:
    mapElevationToBackground[$elevation] || mapElevationToBackground[0],
}));

Home.Layout = Layout;

export default Home;
