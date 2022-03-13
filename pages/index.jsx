import { styled } from 'styletron-react';

import { Layout } from '@components/common';
import { Card, Container, Shape } from '@components/ui';
import {
  AnimationTypeController,
  ShapeController,
  TimingController,
} from '@components/controllers';
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
import { useRotateStore } from '@store/useRotateStore';

const Home = () => {
  const isAnimating = useAnimationStore((state) => state.isAnimating);
  const stopAnimation = useAnimationStore((state) => state.stopAnimation);
  const currentShape = useShapeStore((state) => state.currentShape);
  const animationType = useAnimationTypeStore((state) => state.animationType);
  const autoreverse = useAutoreverseStore((state) => state.autoreverse);
  const speed = useSpeedStore((state) => state.speed);
  const delay = useDelayStore((state) => state.delay);
  const scaleFactor = useScaleFactorStore((state) => state.scaleFactor);
  const rotate = useRotateStore((state) => state.rotate);

  // TODO: add infinite option
  const repeat = useRepeatStore((state) => state.repeat);

  const isScaleAnimation = animationType === ANIMATION_TYPES.scale;
  const isRotateAnimation = animationType === ANIMATION_TYPES.rotate;

  const baseDuration = 1;
  const translate = `translate(-50%, -50%)`;

  const timingStyles = {
    animationDelay: `${delay}ms`,
    animationDuration: `${baseDuration / speed}s`,
    animationIterationCount: repeat,
    animationDirection: autoreverse ? 'alternate' : 'normal',
  };

  const postScaleAnimation = `${translate} scale(${scaleFactor})`;
  const postRotateAnimation = `${translate} rotate(${rotate}deg)`;

  const sharedStyles = {
    top: '50%',
    left: '50%',
    transform: `${translate}`,
    ...timingStyles,
  };

  const scaleStyles = {
    ...sharedStyles,
    ...(isAnimating && {
      animationName: {
        to: {
          transform: postScaleAnimation,
        },
      },
    }),
  };

  const rotateStyles = {
    ...sharedStyles,
    ...(isAnimating && {
      animationName: {
        to: {
          transform: postRotateAnimation,
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
            ...(isRotateAnimation && rotateStyles),
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
        <AnimationTypeController />
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
