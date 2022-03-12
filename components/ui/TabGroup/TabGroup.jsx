import { useState } from 'react';

import { styled } from 'styletron-react';

const TabGroup = ({ children }) => {
  if (typeof children !== 'function') {
    throw new Error(
      `children must be a function but got a type of ${typeof children}`
    );
  }

  const [activeIndex, setActiveIndex] = useState(0);

  return <Root>{children({ activeIndex, setActiveIndex })}</Root>;
};

const Root = styled('div', {
  background: 'var(--color-tab)',
  display: 'flex',
  justifyContent: 'space-evenly',
  borderRadius: '.5em',
});

export default TabGroup;
