import '@styles/globals.css';

import { Provider as StyletronProvider } from 'styletron-react';
import styletron from '@lib/styletron';

import { UIProvider } from '@components/ui/context';

// eslint-disable-next-line react/jsx-no-useless-fragment
const Noop = ({ children }) => <>{children}</>;

const App = ({ Component, pageProps }) => {
  const Layout = Component.Layout || Noop;

  return (
    <StyletronProvider value={styletron}>
      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </StyletronProvider>
  );
};

export default App;
