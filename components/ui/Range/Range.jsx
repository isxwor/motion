import { styled } from 'styletron-react';

const Range = ({
  label,
  min = 0,
  max = 100,
  step,
  value,
  handleOnChange,
  sx,
}) => {
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <Root $sx={sx}>
      <label htmlFor='scale_range'>{label}</label>
      <RangeInput
        type='range'
        id='scale_range'
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={(e) => handleOnChange(e.target.value)}
        $percent={percent}
      />
    </Root>
  );
};

const Root = styled('div', ({ $sx }) => ({
  display: 'flex',
  gap: 'var(--padding)',
  flexDirection: 'column',
  ...$sx,
}));

const RangeInput = styled('input', ({ $percent }) => ({
  appearance: 'none',
  height: '.5em',
  borderRadius: '1em',
  background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${$percent}%, var(--color-tab) ${$percent}%, var(--color-tab) 100%)`,
  '::-webkit-slider-thumb': {
    appearance: 'none',
    background: 'var(--color-text)',
    height: '1.2em',
    width: '1.2em',
    borderRadius: '50%',
  },
}));

export default Range;
