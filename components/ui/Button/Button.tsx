import { ButtonHTMLAttributes, FC } from 'react';
import {
  styled,
  StyletronComponent,
  StyletronComponentInjectedProps,
} from 'styletron-react';

type ButtonT = StyletronComponentInjectedProps<{}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonT> = (props) => {
  const { disabled } = props;
  return (
    // eslint-disable-next-line no-use-before-define
    <Root $disabled={disabled} {...props} />
  );
};

interface StyledButtonT {
  $disabled?: boolean;
}

const Root: StyletronComponent<StyledButtonT> = styled(
  'button',
  ({ $disabled }) => ({
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    paddingLeft: '.75rem',
    paddingRight: '.75rem',
    textAlign: 'center',
    color: 'currentcolor',
    background: $disabled ? 'none' : 'var(--color-tab-active)',
    border: 'none',
    borderTopLeftRadius: '.5em',
    borderBottomLeftRadius: '.5em',
    borderTopRightRadius: '.5em',
    borderBottomRightRadius: '.5em',
    cursor: $disabled ? 'not-allowed' : 'pointer',
  })
);

export default Button;
