import { useState } from 'react';

import { styled } from 'styletron-react';

import { ANIMATION_TYPES, SHAPES, useUI } from '@components/ui/context';
import { Layout } from '@components/common';
import { Card, Container, Shape, TabGroup, Tab, Range } from '@components/ui';
import findObjectKey from '@lib/find-object-key';

const Home = () => {
  const {
    isAnimating,
    setIsAnimating,
    animationType,
    setAnimationType,
    shape: currentShape,
    setShape,
  } = useUI();

  const isScaleAnimation = animationType === ANIMATION_TYPES.scale;

  const [scaleTo, setScaleTo] = useState(1.5);

  const translate = `translate(-50%, -50%)`;
  const scale = `scale(${scaleTo})`;

  const preScaleAnimation = `${translate} scale(1)`;
  const postScaleAnimation = `${translate} ${scale}`;

  const scaleStyles = {
    animationDuration: '3s',
    animationIterationCount: '1',
    animationName: {
      from: {
        transform: preScaleAnimation,
      },
      to: {
        transform: postScaleAnimation,
      },
    },
  };

  const handleAnimationEnd = () => setIsAnimating(false);

  return (
    // eslint-disable-next-line no-use-before-define
    <Container $as={Grid}>
      <Card
        $sx={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Shape
          $shape={findObjectKey(SHAPES, currentShape)}
          $sx={{
            position: 'absolute',
            ...(isScaleAnimation && {
              top: '50%',
              left: '50%',
              ...(isAnimating ? scaleStyles : { transform: preScaleAnimation }),
            }),
          }}
          onAnimationEnd={handleAnimationEnd}
        />
      </Card>
      <Card
        $sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--padding)',
          overflow: 'auto',
        }}
      >
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
          {isScaleAnimation && (
            <Range
              label='Scale'
              max={2}
              step={0.25}
              value={scaleTo}
              handleOnChange={setScaleTo}
              sx={{
                marginTop: '1em',
              }}
            />
          )}
        </Card>
        <Card $elevation={1}>
          <Title>Shape</Title>
          <TabGroup>
            <>
              {Object.keys(SHAPES).map((shape) => (
                <Tab
                  key={shape}
                  isActive={findObjectKey(SHAPES, currentShape) === shape}
                  onClick={() => setShape(shape)}
                >
                  {shape}
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
  '@media screen and (max-width: 579px)': {
    gridTemplateRows: '1fr 1fr',
  },
  '@media screen and (min-width: 580px)': {
    gridTemplateColumns: '2fr 1fr',
  },
});

const Title = styled('h4', {
  marginBottom: '1rem',
});

Home.Layout = Layout;

export default Home;
