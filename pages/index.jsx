import { styled } from 'styletron-react';

import { ANIMATION_TYPES, useUI } from '@components/ui/context';
import { Layout } from '@components/common';
import { Card, Container, Shape, TabGroup, Tab } from '@components/ui';
import findObjectKey from '@lib/find-object-key';

const Home = () => {
  const { animationType, setAnimationType } = useUI();

  return (
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
            <>
              {Object.keys(ANIMATION_TYPES).map((type) => (
                <Tab
                  key={type}
                  isActive={
                    findObjectKey(ANIMATION_TYPES, animationType) === type
                  }
                  onClick={() => setAnimationType(type)}
                >
                  {type}
                </Tab>
              ))}
            </>
          </TabGroup>
        </Card>
      </Card>
    </Container>
  );
};

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
