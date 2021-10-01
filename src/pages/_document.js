import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Fabric Design</title>
          <style
            dangerouslySetInnerHTML={{
              __html: `
              f-docs-template {
                visibility: hidden;
              }
              f-docs-template:defined {
                visibility: visible;
              }
            `,
            }}
          ></style>
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
          <link
            href="https://assets.finn.no/pkg/@fabric-ds/common/v1/highlight-box/index.js"
            rel="modulepreload"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://assets.finn.no/pkg/@fabric-ds/common/v1/template/index.js"
            type="module"
          ></script>
          <script
            src="https://assets.finn.no/pkg/@fabric-ds/common/v1/asset-links/index.js"
            type="module"
          ></script>
          <script
            src="https://assets.finn.no/pkg/@fabric-ds/common/v1/highlight-box/index.js"
            type="module"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
