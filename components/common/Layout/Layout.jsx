import { styled } from 'styletron-react';

import { Appbar } from '@components/common';

const Layout = ({ children }) => (
  <>
    <Appbar />
    <Content>{children}</Content>
  </>
);

const Content = styled('div', {});

export default Layout;
