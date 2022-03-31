import { styled } from 'styletron-react';

import { Canvas, Layout } from '@components/common';
import { Card, Container } from '@components/ui';
import {
  AnimationTypeController,
  ShapeController,
  TimingController,
} from '@components/controllers';

const Home = () => (
  // eslint-disable-next-line no-use-before-define
  <Container $as={Grid}>
    <Canvas />
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--padding)',
        overflow: 'auto',
      }}
    >
      <AnimationTypeController />
      <ShapeController />
      <TimingController />
    </Card>
  </Container>
);

const Grid = styled('div', {
  '--appbar-height': '45.325px',

  marginTop: 'var(--padding)',
  marginBottom: 'var(--padding)',
  height: 'calc(100vh - var(--appbar-height) - var(--padding) * 2)',
  display: 'grid',
  gap: 'var(--padding)',
  '@media screen and (max-width: 579px)': {
    // making grid container little larger on mobile to make
    // address bar on safari disappear
    '--appbar-height': '42px',
    gridTemplateRows: '1fr 1fr',
  },
  '@media screen and (min-width: 580px)': {
    gridTemplateColumns: '2fr 1fr',
  },
});

Home.Layout = Layout;

export default Home;
