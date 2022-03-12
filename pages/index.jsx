import { styled } from 'styletron-react';

import { Layout } from '@components/common';
import { Card, Container, Shape, TabGroup, Tab } from '@components/ui';

const Home = () => (
  // eslint-disable-next-line no-use-before-define
  <Container $as={Grid}>
    <Card
      $sx={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Shape />
    </Card>
    <Card>
      <Card $elevation={1}>
        <Title>Animation Type</Title>
        <TabGroup>
          {({ activeIndex, setActiveIndex }) => (
            <>
              <Tab
                isActive={activeIndex === 0}
                onClick={() => setActiveIndex(0)}
              >
                Scale
              </Tab>
              <Tab
                isActive={activeIndex === 1}
                onClick={() => setActiveIndex(1)}
              >
                Translate
              </Tab>
              <Tab
                isActive={activeIndex === 2}
                onClick={() => setActiveIndex(2)}
              >
                Rotate
              </Tab>
            </>
          )}
        </TabGroup>
      </Card>
    </Card>
  </Container>
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

const Title = styled('h4', {
  marginBottom: '1rem',
});

Home.Layout = Layout;

export default Home;
