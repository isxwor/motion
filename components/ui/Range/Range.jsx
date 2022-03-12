import { styled } from 'styletron-react';

const Range = ({ label, min, max, step, value, handleOnChange, sx }) => (
  <Root $sx={sx}>
    <label htmlFor='scale_range'>{label}</label>
    <input
      type='range'
      id='scale_range'
      min={min}
      max={max}
      value={value}
      step={step}
      onChange={(e) => handleOnChange(e.target.value)}
    />
  </Root>
);

const Root = styled('div', ({ $sx }) => ({
  display: 'flex',
  gap: 'var(--padding)',
  flexDirection: 'column',
  ...$sx,
}));

export default Range;
