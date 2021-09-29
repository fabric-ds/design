import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://assets.finn.no/pkg/@fabric-ds/css/v0/fabric.min.css"
            rel="stylesheet"
          />
          <link
            href="https://assets.finn.no/pkg/@fabric-ds/common/v1/template/index.js?a=1"
            rel="modulepreload"
          />
          <link
            href="https://assets.finn.no/pkg/@fabric-ds/common/v1/asset-links/index.js"
            rel="modulepreload"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://assets.finn.no/pkg/@fabric-ds/common/v1/template/index.js?a=1"
            type="module"
          ></script>
          <script
            src="https://assets.finn.no/pkg/@fabric-ds/common/v1/asset-links/index.js?a=1"
            type="module"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
