import { styled } from 'styletron-react';

import { Layout } from '@components/common';
import {
  Card,
  Container,
  Shape,
  TabGroup,
  Tab,
  Range,
  Toggle,
} from '@components/ui';
import findObjectKey from '@lib/find-object-key';
import { useAnimationStore } from '@store/useAnimationStore';
import {
  ANIMATION_TYPES,
  useAnimationTypeStore,
} from '@store/useAnimationTypeStore';
import { SHAPES, useShapeStore } from '@store/useShapeStore';
import { useAutoreverseStore } from '@store/useAutoreverseStore';
import { useSpeedStore } from '@store/useSpeedStore';
import { useDelayStore } from '@store/useDelayStore';
import { useRepeatStore } from '@store/useRepeatStore';
import { useScaleFactorStore } from '@store/useScaleFactorStore';

const Home = () => {
  const isAnimating = useAnimationStore((state) => state.isAnimating);
  const stopAnimation = useAnimationStore((state) => state.stopAnimation);

  const currentShape = useShapeStore((state) => state.currentShape);
  const setCurrentShape = useShapeStore((state) => state.setCurrentShape);

  const animationType = useAnimationTypeStore((state) => state.animationType);
  const setAnimationType = useAnimationTypeStore(
    (state) => state.setAnimationType
  );

  const autoreverse = useAutoreverseStore((state) => state.autoreverse);
  const setAutoreverse = useAutoreverseStore((state) => state.setAutoreverse);

  const speed = useSpeedStore((state) => state.speed);
  const setSpeed = useSpeedStore((state) => state.setSpeed);

  const delay = useDelayStore((state) => state.delay);
  const setDelay = useDelayStore((state) => state.setDelay);

  const isScaleAnimation = animationType === ANIMATION_TYPES.scale;

  // TODO: add infinite option
  const repeat = useRepeatStore((state) => state.repeat);
  const incrementRepeat = useRepeatStore((state) => state.incrementRepeat);
  const decrementRepeat = useRepeatStore((state) => state.decrementRepeat);

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
        $sx={{
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

        <Card $elevation={1}>
          <Title>Shape</Title>
          <TabGroup>
            <>
              {Object.keys(SHAPES).map((shape) => (
                <Tab
                  key={shape}
                  isActive={findObjectKey(SHAPES, currentShape) === shape}
                  onClick={() => setCurrentShape(shape)}
                >
                  {shape}
                </Tab>
              ))}
            </>
          </TabGroup>
        </Card>

        <Card $elevation={1}>
          <Title>Timing</Title>
          <Label>
            <p>Repeat</p>
            <LableValue>{repeat}</LableValue>
          </Label>
          <TabGroup>
            <Tab
              onClick={decrementRepeat}
              disabled={repeat < 2}
              sx={{
                borderTopRightRadius: 'none',
                borderBottomRightRadius: 'none',
                borderRight:
                  '.15em solid var(--color-background-card-elevated)',
                ':hover': {
                  background: 'var(--color-tab-active)',
                },
              }}
            >
              -
            </Tab>
            <Tab
              onClick={incrementRepeat}
              sx={{
                borderTopLeftRadius: 'none',
                borderBottomLeftRadius: 'none',
                ':hover': {
                  background: 'var(--color-tab-active)',
                },
              }}
            >
              +
            </Tab>
          </TabGroup>

          <Label>
            <p>Autoreverses</p>
            <Toggle
              checked={autoreverse}
              onClickHandler={() => setAutoreverse(!autoreverse)}
            />
          </Label>

          <Range
            label='Speed'
            id='speed_range'
            min={0.25}
            max={2}
            step={0.25}
            value={speed}
            valuePostfix='x'
            handleOnChange={setSpeed}
            sx={{
              marginTop: '1em',
            }}
          />

          <Range
            label='Delay'
            id='delay_range'
            max={1000}
            step={50}
            value={delay}
            valuePostfix=' ms'
            handleOnChange={setDelay}
            sx={{
              marginTop: '1em',
            }}
          />
        </Card>
      </Card>
    </Container>
  );
};

// TODO: consistent spacing
const Label = styled('div', {
  marginTop: 'var(--padding)',
  marginBottom: 'var(--padding)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const LableValue = styled('span', {
  color: 'var(--color-text-secondary)',
});

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
