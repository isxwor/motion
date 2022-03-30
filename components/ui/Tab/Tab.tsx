import { ButtonHTMLAttributes, FC } from 'react';
import { styled, StyleObject, StyletronComponent } from 'styletron-react';

interface TabProps {
  isActive: boolean;
  disabled?: boolean | undefined;
  onClick: () => void;
  sx?: StyleObject;
}

const Tab: FC<TabProps> = ({ isActive, disabled, onClick, sx, children }) => (
  // eslint-disable-next-line no-use-before-define
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

Tab.defaultProps = {
  disabled: undefined,
  sx: {},
};

interface StyledTabProps extends ButtonHTMLAttributes<{}> {
  $isActive: boolean;
  $disabled: boolean;
}

const Root: StyletronComponent<StyledTabProps> = styled(
  'button',
  ({ $isActive, $disabled }) => ({
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
  })
);

export default Tab;
