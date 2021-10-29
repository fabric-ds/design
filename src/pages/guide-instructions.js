import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import GuideReact from './guide-react.mdx';
import GuideCustomElements from './guide-custom-elements.mdx';
import GuideEikNodeClient from './guide-eik-node-client.mdx';
import GuideEikNodeClientJavascript from './guide-eik-node-client-javascript.mdx';
import GuideExpressLayout from './guide-express-layout.mdx';
import GuideExpressPodlet from './guide-express-podlet.mdx';
import GuideHTMLTemplate from './guide-html-template.mdx';
import GuideVue from './guide-vue.mdx';
import GuideEik from './guide-eik.mdx';
import GuideEikJavascript from './guide-eik-javascript.mdx';
import GuideEikJavascriptReact from './guide-eik-javascript-react.mdx';
import GuideEikJavascriptVue from './guide-eik-javascript-vue.mdx';
import GuideEikJavascriptElements from './guide-eik-javascript-elements.mdx';

export default function Instructions() {
  const router = useRouter();
  const {
    eik,
    react,
    vue,
    elements,
    nodeClient,
    htmlTemplate,
    layout,
    podlet,
  } = router.query;
  return (
    <>
      <Head>
        <title>Guide - Instructions | FINN Fabric</title>
      </Head>
      {eik && <GuideEik></GuideEik>}
      {eik && (react || vue || elements) && (
        <GuideEikJavascript></GuideEikJavascript>
      )}
      {eik && react && <GuideEikJavascriptReact></GuideEikJavascriptReact>}
      {eik && vue && <GuideEikJavascriptVue></GuideEikJavascriptVue>}
      {eik && elements && (
        <GuideEikJavascriptElements></GuideEikJavascriptElements>
      )}
      {nodeClient && <GuideEikNodeClient></GuideEikNodeClient>}
      {nodeClient && (react || vue || elements) && (
        <GuideEikNodeClientJavascript></GuideEikNodeClientJavascript>
      )}
      {layout && <GuideExpressLayout></GuideExpressLayout>}
      {podlet && <GuideExpressPodlet></GuideExpressPodlet>}
      {htmlTemplate && <GuideHTMLTemplate></GuideHTMLTemplate>}
      {react && <GuideReact></GuideReact>}
      {vue && <GuideVue></GuideVue>}
      {elements && <GuideCustomElements></GuideCustomElements>}
    </>
  );
}
