import { styled } from 'styletron-react';

const Range = ({
  label,
  id,
  min = 0,
  max = 100,
  step,
  value,
  valuePostfix,
  handleOnChange,
  sx,
}) => {
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <Root $style={sx}>
      <LabelWrapper>
        <label htmlFor={id}>{label}</label>
        <Value>
          {value}
          {valuePostfix}
        </Value>
      </LabelWrapper>
      <Input
        type='range'
        id={id}
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

const Root = styled('div', {
  display: 'flex',
  gap: 'var(--padding)',
  flexDirection: 'column',
});

const LabelWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

const Value = styled('span', {
  color: 'var(--color-text-secondary)',
});

const Input = styled('input', ({ $percent }) => ({
  appearance: 'none',
  height: '.5em',
  borderRadius: '1em',
  background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${$percent}%, var(--color-tab) ${$percent}%, var(--color-tab) 100%)`,
  '::-webkit-slider-thumb': {
    appearance: 'none',
    background: 'var(--color-text)',
    height: '1.5em',
    width: '1.5em',
    borderRadius: '50%',
    cursor: 'pointer',
  },
}));

export default Range;
