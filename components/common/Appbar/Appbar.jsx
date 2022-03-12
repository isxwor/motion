import { styled } from 'styletron-react';

import { useUI } from '@components/ui/context';
import { Container } from '@components/ui';
import { Play, Pause } from '@components/icons';

const Appbar = () => {
  const { isAnimating, setIsAnimating } = useUI();

  const handleClick = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <FullBleed>
      <Container
        $sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h3>Motion</h3>
        <IconButton type='button' onClick={handleClick}>
          {isAnimating ? <Pause /> : <Play />}
        </IconButton>
      </Container>
    </FullBleed>
  );
};

const FullBleed = styled('div', {
  background: 'var(--color-background-card)',
});

const IconButton = styled('button', {
  paddingTop: 'var(--padding)',
  paddingBottom: 'var(--padding)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  background: 'none',
  color: 'var(--color-text)',
  fill: 'var(--color-text)',
});

export default Appbar;
