import '@styles/globals.css';

import { FC } from 'react';

import { Provider as StyletronProvider } from 'styletron-react';
import styletron from '@lib/styletron';
import { AppProps } from 'next/app';

// eslint-disable-next-line react/jsx-no-useless-fragment
const Noop: FC = ({ children }) => <>{children}</>;

const App = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || Noop;

  return (
    <StyletronProvider value={styletron}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyletronProvider>
  );
};

export default App;
