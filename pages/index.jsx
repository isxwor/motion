import { styled } from 'styletron-react';

import { Layout } from '@components/common';
import { Card } from '@components/ui';

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

Home.Layout = Layout;

export default Home;
