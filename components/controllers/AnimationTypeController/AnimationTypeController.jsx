import { Card, TabGroup, Tab, Range } from '@components/ui';

import {
  ANIMATION_TYPES,
  useAnimationTypeStore,
} from '@store/useAnimationTypeStore';
import { useScaleFactorStore } from '@store/useScaleFactorStore';
import findObjectKey from '@lib/find-object-key';

const AnimationTypeController = () => {
  const animationType = useAnimationTypeStore((state) => state.animationType);
  const setAnimationType = useAnimationTypeStore(
    (state) => state.setAnimationType
  );
  const scaleFactor = useScaleFactorStore((state) => state.scaleFactor);
  const setScaleFactor = useScaleFactorStore((state) => state.setScaleFactor);

  const isScaleAnimation = animationType === ANIMATION_TYPES.scale;

  return (
    <Card elevation={1} title='Animation Type'>
      <TabGroup>
        {Object.keys(ANIMATION_TYPES).map((type) => (
          <Tab
            key={type}
            isActive={findObjectKey(ANIMATION_TYPES, animationType) === type}
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
  );
};

export default AnimationTypeController;
