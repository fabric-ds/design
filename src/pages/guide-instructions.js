import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import GuideReact from '../../guides/react.mdx';
import GuideCustomElements from '../../guides/custom-elements.mdx';
import GuideEikNodeClient from '../../guides/eik-node-client.mdx';
import GuideEikNodeClientJavascript from '../../guides/eik-node-client-javascript.mdx';
import GuideExpressLayout from '../../guides/express-layout.mdx';
import GuideExpressPodlet from '../../guides/express-podlet.mdx';
import GuideHTMLTemplate from '../../guides/html-template.mdx';
import GuideVue from '../../guides/vue.mdx';
import GuideEik from '../../guides/eik.mdx';
import GuideEikJavascript from '../../guides/eik-javascript.mdx';
import GuideEikJavascriptReact from '../../guides/eik-javascript-react.mdx';
import GuideEikJavascriptVue from '../../guides/eik-javascript-vue.mdx';
import GuideEikJavascriptElements from '../../guides/eik-javascript-elements.mdx';

export default function Instructions() {
  const router = useRouter();
  const { react, vue, elements, nodeClient, htmlTemplate, layout, podlet } =
    router.query;

  React.useEffect(() => {
    console.log(react, vue, elements, nodeClient, htmlTemplate, layout, podlet);
  }, [router]);

  return (
    <>
      <Head>
        <title>Guide - Instructions | FINN Fabric</title>
      </Head>
      <h1>Setup Guide</h1>
      <GuideEik></GuideEik>
      {(react || vue || elements) && <GuideEikJavascript></GuideEikJavascript>}
      {react && <GuideEikJavascriptReact></GuideEikJavascriptReact>}
      {vue && <GuideEikJavascriptVue></GuideEikJavascriptVue>}
      {elements && <GuideEikJavascriptElements></GuideEikJavascriptElements>}
      {react && <GuideReact></GuideReact>}
      {vue && <GuideVue></GuideVue>}
      {elements && <GuideCustomElements></GuideCustomElements>}
      {nodeClient && <GuideEikNodeClient></GuideEikNodeClient>}
      {nodeClient && (react || vue || elements) && (
        <GuideEikNodeClientJavascript></GuideEikNodeClientJavascript>
      )}
      {layout && <GuideExpressLayout></GuideExpressLayout>}
      {podlet && <GuideExpressPodlet></GuideExpressPodlet>}
      {htmlTemplate && <GuideHTMLTemplate></GuideHTMLTemplate>}
    </>
  );
}
