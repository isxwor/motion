import { styled, StyleObject } from 'styletron-react';

import { Container } from '@components/ui';
import { Play, Pause } from '@components/icons';
import { useAnimationStore } from '@store/useAnimationStore';
import { FC } from 'react';

const Appbar: FC<{ sx?: StyleObject }> = ({ sx }) => {
  const isAnimating = useAnimationStore((state) => state.isAnimating);
  const toggleAnimation = useAnimationStore((state) => state.toggleAnimation);

  return (
    // eslint-disable-next-line no-use-before-define
    <FullBleed $style={sx}>
      <Container
        $style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingRight: 0,
        }}
      >
        <h3>Motion</h3>
        {/* eslint-disable-next-line no-use-before-define */}
        <IconButton type='button' onClick={toggleAnimation}>
          {isAnimating ? <Pause /> : <Play />}
        </IconButton>
      </Container>
    </FullBleed>
  );
};

Appbar.defaultProps = {
  sx: {},
};

const FullBleed = styled('div', {
  background: 'var(--color-background-card)',
});

const IconButton = styled('button', {
  paddingTop: 'var(--padding)',
  paddingBottom: 'var(--padding)',
  paddingLeft: 'var(--padding)',
  paddingRight: 'var(--padding)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  background: 'none',
  color: 'var(--color-text)',
  fill: 'var(--color-text)',
});

export default Appbar;
