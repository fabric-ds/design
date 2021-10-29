import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import GuideReact from './guide-react.mdx';
import GuideCustomElements from './guide-custom-elements.mdx';
import GuideEikNodeClient from './guide-eik-node-client.mdx';
import GuideExpressLayout from './guide-express-layout.mdx';
import GuideExpressPodlet from './guide-express-podlet.mdx';
import GuideHTMLTemplate from './guide-html-template.mdx';
import GuideVue from './guide-vue.mdx';

export default function Instructions() {
  const router = useRouter();
  const { react, vue, elements, nodeClient, htmlTemplate, layout, podlet } =
    router.query;
  return (
    <>
      <Head>
        <title>Guide - Instructions | FINN Fabric</title>
      </Head>

      {nodeClient && <GuideEikNodeClient></GuideEikNodeClient>}
      {layout && <GuideExpressLayout></GuideExpressLayout>}
      {podlet && <GuideExpressPodlet></GuideExpressPodlet>}
      {htmlTemplate && <GuideHTMLTemplate></GuideHTMLTemplate>}
      {react && <GuideReact></GuideReact>}
      {vue && <GuideVue></GuideVue>}
      {elements && <GuideCustomElements></GuideCustomElements>}
    </>
  );
}
