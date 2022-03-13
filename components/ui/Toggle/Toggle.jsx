import { styled } from 'styletron-react';

// TODO: improve accessibility by adding label / pass id to toggle
const Toggle = ({ checked, onClickHandler }) => (
  <ToogleRoot type='checkbox' $checked={checked} onClick={onClickHandler} />
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
    left: '0.2em',
    transform: `translateY(-50%) translateX(${
      // x-axis offset is calculated by:
      //   width of toggle - width of indicator - left offset of indicator * 2
      $checked ? 'calc(3.75em - 100% - 0.4em)' : 0
    })`,
    height: '1.8em',
    width: '1.8em',
    background: 'var(--color-text)',
    borderRadius: '50%',
    transition: 'transform 200ms ease',
  },
}));

export default Toggle;
