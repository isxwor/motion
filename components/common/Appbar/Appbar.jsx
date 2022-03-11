import { useState } from 'react';

import { styled } from 'styletron-react';

import { Play, Pause } from '@components/icons';

const Appbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Root>
      <h3>Motion</h3>
      <IconButton type='button' onClick={handleClick}>
        {isPlaying ? <Pause /> : <Play />}
      </IconButton>
    </Root>
  );
};

const Root = styled('div', {
  background: 'grey',
  paddingLeft: 'var(--padding)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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
});

export default Appbar;
