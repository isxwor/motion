import { styled } from 'styletron-react';

import { Appbar } from '@components/common';
import { FC } from 'react';

const Layout: FC = ({ children }) => (
  <>
    <Appbar />
    {/* eslint-disable-next-line no-use-before-define */}
    <Content>{children}</Content>
  </>
);

const Content = styled('div', {});

export default Layout;
