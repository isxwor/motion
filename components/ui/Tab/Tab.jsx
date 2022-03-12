import { styled } from 'styletron-react';

const Tab = ({ isActive, children, onClick }) => (
  <Root type='button' $isActive={isActive} onClick={onClick}>
    {children}
  </Root>
);

const Root = styled('button', ({ $isActive }) => ({
  paddingTop: '.5rem',
  paddingBottom: '.5rem',
  width: '100%',
  textAlign: 'center',
  color: 'currentcolor',
  background: $isActive ? 'var(--color-tab-active)' : 'none',
  border: 'none',
  borderRadius: '.5em',
  cursor: 'pointer',
}));

export default Tab;
