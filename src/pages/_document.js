import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://assets.finn.no/pkg/troika-css-core/v1/core.css"
          />
          <link
            rel="stylesheet"
            href="https://assets.finn.no/pkg/troika-css-utilities/v1/utilities.css"
          />
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
