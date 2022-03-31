import { Card, TabGroup, Tab, Range } from '@components/ui';

import { useAnimationTypeStore } from '@store/useAnimationTypeStore';
import type { AnimationT } from '@store/useAnimationTypeStore';
import { useScaleFactorStore } from '@store/useScaleFactorStore';
import { useRotateStore } from '@store/useRotateStore';

const ANIMATION_TYPES: AnimationT[] = ['scale', 'slide', 'rotate'];

const AnimationTypeController = () => {
  const animationType = useAnimationTypeStore((state) => state.animationType);
  const setAnimationType = useAnimationTypeStore(
    (state) => state.setAnimationType
  );
  const scaleFactor = useScaleFactorStore((state) => state.scaleFactor);
  const setScaleFactor = useScaleFactorStore((state) => state.setScaleFactor);

  const rotate = useRotateStore((state) => state.rotate);
  const setRotate = useRotateStore((state) => state.setRotate);

  const isScaleAnimation = animationType === 'scale';
  const isRotateAnimation = animationType === 'rotate';

  return (
    <Card elevation={1} title='Animation Type'>
      <TabGroup>
        {ANIMATION_TYPES.map((type) => (
          <Tab
            key={type}
            isActive={animationType === type}
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
      {isRotateAnimation && (
        <Range
          label='Rotate'
          id='rotate_range'
          max={360}
          step={5}
          value={rotate}
          valuePostfix='&deg;'
          handleOnChange={setRotate}
          sx={{
            marginTop: '1em',
          }}
        />
      )}
    </Card>
  );
};

export default AnimationTypeController;
