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
  const { csframework, platform, abstraction } = router.query;

  const isCSFramework =
    csframework === 'react' ||
    csframework === 'vue' ||
    csframework === 'elements';

  const nodeClient = platform === 'node';
  const htmlTemplate = abstraction === 'html-template';
  const expressLayout = abstraction === 'express-layout';
  const expressPodlet = abstraction === 'express-podlet';

  return (
    <>
      <Head>
        <title>Guide - Instructions | FINN Fabric</title>
      </Head>
      <h1>Setup Guide</h1>
      <GuideEik></GuideEik>
      {isCSFramework && <GuideEikJavascript></GuideEikJavascript>}
      {csframework === 'react' && (
        <GuideEikJavascriptReact></GuideEikJavascriptReact>
      )}
      {csframework === 'vue' && <GuideEikJavascriptVue></GuideEikJavascriptVue>}
      {csframework === 'elements' && (
        <GuideEikJavascriptElements></GuideEikJavascriptElements>
      )}
      {csframework === 'react' && <GuideReact></GuideReact>}
      {csframework === 'vue' && <GuideVue></GuideVue>}
      {csframework === 'elements' && (
        <GuideCustomElements></GuideCustomElements>
      )}
      {nodeClient && <GuideEikNodeClient></GuideEikNodeClient>}
      {nodeClient && isCSFramework && (
        <GuideEikNodeClientJavascript></GuideEikNodeClientJavascript>
      )}
      {expressLayout && <GuideExpressLayout></GuideExpressLayout>}
      {expressPodlet && <GuideExpressPodlet></GuideExpressPodlet>}
      {htmlTemplate && <GuideHTMLTemplate></GuideHTMLTemplate>}
    </>
  );
}
