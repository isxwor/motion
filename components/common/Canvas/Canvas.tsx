import { FC } from 'react';

import { Card, Shape } from '@components/ui';

import { useAnimationStore } from '@store/useAnimationStore';
import { useAnimationTypeStore } from '@store/useAnimationTypeStore';
import { useShapeStore } from '@store/useShapeStore';
import { useAutoreverseStore } from '@store/useAutoreverseStore';
import { useSpeedStore } from '@store/useSpeedStore';
import { useDelayStore } from '@store/useDelayStore';
import { useRepeatStore } from '@store/useRepeatStore';
import { useScaleFactorStore } from '@store/useScaleFactorStore';
import { useRotateStore } from '@store/useRotateStore';

const Canvas: FC = () => {
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

  const isScaleAnimation = animationType === 'scale';
  const isRotateAnimation = animationType === 'rotate';

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
    <Card
      sx={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Shape
        $shape={currentShape}
        $style={
          {
            position: 'absolute',
            ...(isScaleAnimation && scaleStyles),
            ...(isRotateAnimation && rotateStyles),
          } as any
          // FIXME: fix types ^^^
        }
        onAnimationEnd={stopAnimation}
      />
    </Card>
  );
};

export default Canvas;
