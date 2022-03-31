/* eslint-disable no-use-before-define */
import { FC, InputHTMLAttributes } from 'react';

import { styled, StyleObject, StyletronComponent } from 'styletron-react';

interface RangeProps {
  label: string;
  id: string;
  valuePostfix?: string;
  value: number;
  min?: number;
  max?: number;
  step: number;
  // eslint-disable-next-line no-unused-vars
  handleOnChange: (value: number) => void;
  sx?: StyleObject;
}

const Range: FC<RangeProps> = ({
  label,
  id,
  min,
  max,
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
        <Value>{`${value}${valuePostfix}`}</Value>
      </LabelWrapper>
      <Input
        type='range'
        id={id}
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={(e) => handleOnChange(parseFloat(e.target.value))}
        $percent={percent}
      />
    </Root>
  );
};

Range.defaultProps = {
  valuePostfix: '',
  min: 0,
  max: 100,
  sx: {},
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

interface StyledRangeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  $percent: number;
}

const Input: StyletronComponent<StyledRangeInputProps> = styled(
  'input',
  ({ $percent }) => ({
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
  })
);

export default Range;
