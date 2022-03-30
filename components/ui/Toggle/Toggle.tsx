import { FC, InputHTMLAttributes } from 'react';

import { styled, StyletronComponent } from 'styletron-react';

interface ToggleProps {
  checked: boolean;
  onClickHandler: () => void;
}

// TODO: improve accessibility by adding label / pass id to toggle
const Toggle: FC<ToggleProps> = ({ checked, onClickHandler }) => (
  // eslint-disable-next-line no-use-before-define
  <ToogleRoot type='checkbox' $checked={checked} onClick={onClickHandler} />
);

interface StyledToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  $checked: boolean;
}

const ToogleRoot: StyletronComponent<StyledToggleProps> = styled(
  'input',
  ({ $checked }) => ({
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
  })
);

export default Toggle;
