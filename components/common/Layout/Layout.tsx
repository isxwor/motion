import { styled } from 'styletron-react';

import { Appbar } from '@components/common';
import { FC } from 'react';

const Layout: FC = ({ children }) => (
  <>
    <Appbar
      sx={{
        '@media screen and (max-width: 579px)': {
          // experemental trick to hide address bar on mobile devices
          // if you know a better way, please let me know
          marginTop: '.5rem',
        },
      }}
    />
    {/* eslint-disable-next-line no-use-before-define */}
    <Content>{children}</Content>
  </>
);

const Content = styled('div', {});

export default Layout;
