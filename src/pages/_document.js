import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://assets.finn.no/pkg/@finn-no/fabric-css/v0/fabric.min.css"
            rel="stylesheet"
          />
          <link
            href="https://assets.finn.no/pkg/@finn-no/fabric-common/v1/template/index.js"
            rel="modulepreload"
          />
          <link
            href="https://assets.finn.no/pkg/@finn-no/fabric-common/v1/asset-links/index.js"
            rel="modulepreload"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://assets.finn.no/pkg/@finn-no/fabric-common/v1/template/index.js"
            type="module"
          ></script>
          <script
            src="https://assets.finn.no/pkg/@finn-no/fabric-common/v1/asset-links/index.js"
            type="module"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
