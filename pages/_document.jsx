import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Provider as StyletronProvider } from 'styletron-react';
import styletron from '@lib/styletron';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const renderPage = () =>
      ctx.renderPage({
        enhanceApp: (App) => (props) =>
          (
            <StyletronProvider value={styletron}>
              <App {...props} />
            </StyletronProvider>
          ),
      });

    const initialProps = await Document.getInitialProps({ ...ctx, renderPage });
    const stylesheets = styletron.getStylesheets() || [];
    return { ...initialProps, stylesheets };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className='_styletron_hydrate_'
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              // eslint-disable-next-line react/no-array-index-key
              key={i}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
