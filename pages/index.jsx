import { styled } from 'styletron-react';

import { Layout } from '@components/common';
import { Card, Container, Shape, TabGroup, Tab, Range } from '@components/ui';
import { ShapeController, TimingController } from '@components/controllers';
import { useAnimationStore } from '@store/useAnimationStore';
import {
  ANIMATION_TYPES,
  useAnimationTypeStore,
} from '@store/useAnimationTypeStore';
import { useShapeStore } from '@store/useShapeStore';
import { useAutoreverseStore } from '@store/useAutoreverseStore';
import { useSpeedStore } from '@store/useSpeedStore';
import { useDelayStore } from '@store/useDelayStore';
import { useRepeatStore } from '@store/useRepeatStore';
import { useScaleFactorStore } from '@store/useScaleFactorStore';
import findObjectKey from '@lib/find-object-key';

const Home = () => {
  const isAnimating = useAnimationStore((state) => state.isAnimating);
  const stopAnimation = useAnimationStore((state) => state.stopAnimation);

  const currentShape = useShapeStore((state) => state.currentShape);

  const animationType = useAnimationTypeStore((state) => state.animationType);
  const setAnimationType = useAnimationTypeStore(
    (state) => state.setAnimationType
  );

  const autoreverse = useAutoreverseStore((state) => state.autoreverse);

  const speed = useSpeedStore((state) => state.speed);

  const delay = useDelayStore((state) => state.delay);

  const isScaleAnimation = animationType === ANIMATION_TYPES.scale;

  // TODO: add infinite option
  const repeat = useRepeatStore((state) => state.repeat);

  const scaleFactor = useScaleFactorStore((state) => state.scaleFactor);
  const setScaleFactor = useScaleFactorStore((state) => state.setScaleFactor);

  const translate = `translate(-50%, -50%)`;
  const scale = `scale(${scaleFactor})`;

  const preScaleAnimation = `${translate} scale(1)`;
  const postScaleAnimation = `${translate} ${scale}`;

  const baseDuration = 1;

  const timingStyles = {
    animationDelay: `${delay}ms`,
    animationDuration: `${baseDuration / speed}s`,
    animationIterationCount: repeat,
    animationDirection: autoreverse ? 'alternate' : 'normal',
  };

  const scaleStyles = {
    top: '50%',
    left: '50%',
    transform: preScaleAnimation,
    ...timingStyles,
    ...(isAnimating && {
      animationName: {
        to: {
          transform: postScaleAnimation,
        },
      },
    }),
  };

  return (
    // eslint-disable-next-line no-use-before-define
    <Container $as={Grid}>
      <Card
        sx={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Shape
          $shape={currentShape}
          $sx={{
            position: 'absolute',
            ...(isScaleAnimation && scaleStyles),
          }}
          onAnimationEnd={stopAnimation}
        />
      </Card>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--padding)',
          overflow: 'auto',
        }}
      >
        <Card elevation={1} title='Animation Type'>
          <TabGroup>
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
          </TabGroup>
          {isScaleAnimation && (
            <Range
              label='Scale'
              id='scale_range'
              max={2}
              step={0.25}
              value={scaleFactor}
              handleOnChange={setScaleFactor}
              sx={{
                marginTop: '1em',
              }}
            />
          )}
        </Card>

        <ShapeController />
        <TimingController />
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

Home.Layout = Layout;

export default Home;
