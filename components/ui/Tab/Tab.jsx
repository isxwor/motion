import { styled } from 'styletron-react';

const Tab = ({ isActive, disabled, onClick, sx, children }) => (
  <Root
    type='button'
    $isActive={isActive}
    $style={sx}
    $disabled={disabled}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Root>
);

const Root = styled('button', ({ $isActive, $disabled }) => ({
  paddingTop: '.5rem',
  paddingBottom: '.5rem',
  width: '100%',
  textAlign: 'center',
  textTransform: 'capitalize',
  color: 'currentcolor',
  background: $isActive ? 'var(--color-tab-active)' : 'none',
  border: 'none',
  borderTopLeftRadius: '.5em',
  borderBottomLeftRadius: '.5em',
  borderTopRightRadius: '.5em',
  borderBottomRightRadius: '.5em',
  cursor: $disabled ? 'not-allowed' : 'pointer',
}));

export default Tab;
