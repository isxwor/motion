import { styled } from 'styletron-react';

// TODO: improve accessibility by adding label / pass id to toggle
const Toggle = ({ checked, onClickHandler }) => (
  <ToogleRoot
    type='checkbox'
    $checked={checked}
    onClick={() => onClickHandler(!checked)}
  />
);

const ToogleRoot = styled('input', ({ $checked }) => ({
  appearance: 'none',
  position: 'relative',
  height: '2.125em',
  width: '3.75em',
  background: $checked ? 'var(--color-primary)' : 'var(--color-tab)',
  borderRadius: '2em',
  ':before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: $checked ? 'calc(100% - 1.8em - 0.25em)' : '0.25em',
    transform: 'translateY(-50%)',
    height: '1.8em',
    width: '1.8em',
    background: 'var(--color-text)',
    borderRadius: '50%',
    transition: 'left 200ms ease',
  },
}));

export default Toggle;
