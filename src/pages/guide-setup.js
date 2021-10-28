import * as React from 'react';
import Head from 'next/head';
import { Card } from '@fabric-ds/react';

export default function ColorPage() {
  const [platform, setPlatform] = React.useState('node');
  const [framework, setFramework] = React.useState();
  const [podium, setPodium] = React.useState();
  const [abstraction, setAbstraction] = React.useState();
  const [eikHelp, setEikHelp] = React.useState();
  const [clientSideFramework, setClientSideFramework] = React.useState();

  return (
    <>
      <Head>
        <title>Guide - Setting up | FINN Fabric</title>
      </Head>

      <h1>Let's get you setup...</h1>

      <p>
        We can taylor your setup instructions to your situation. Just answer
        these few questions below...
      </p>

      <h2>Which platform are you using?</h2>

      <div className="flex">
        <Card onClick={() => setPlatform('node')}>Node.js</Card>
        <Card onClick={() => setPlatform('other')}>Other</Card>
      </div>

      {platform === 'node' ? (
        <>
          <h2>What server side framework are you using?</h2>

          <div className="flex">
            <Card onClick={() => setFramework('next')}>Next.js</Card>
            <Card onClick={() => setFramework('fastify')}>Fastify</Card>
            <Card onClick={() => setFramework('express')}>Express</Card>
          </div>
        </>
      ) : (
        ''
      )}
      <h2>Is your app using Podium?</h2>

      <div className="flex">
        <Card onClick={() => setPodium('podlet')}>My app is a podlet</Card>
        <Card onClick={() => setPodium('layout')}>My app is a layout</Card>
        <Card onClick={() => setPodium('none')}>
          My app is not a Podium layout or podlet
        </Card>
      </div>

      {platform === 'node' ? (
        <>
          <h2>Is your app using a Podium abstraction module?</h2>

          <div className="flex">
            {podium === 'podlet' ? (
              <Card onClick={() => setAbstraction('express-podlet')}>
                I'm using Express podlet
              </Card>
            ) : (
              ''
            )}
            {podium === 'layout' ? (
              <Card onClick={() => setAbstraction('express-layout')}>
                I'm using Express layout
              </Card>
            ) : (
              ''
            )}
            <Card onClick={() => setAbstraction('html-template')}>
              I'm using HTML Template
            </Card>
            <Card onClick={() => setAbstraction('none')}>
              I'm not using any abstractions
            </Card>
          </div>
        </>
      ) : (
        ''
      )}

      <h2>Do you need help getting Eik setup?</h2>

      <div className="flex">
        <Card onClick={() => setEikHelp(true)}>I need help setting up Eik</Card>
        <Card onClick={() => setEikHelp(false)}>
          Eik is already setup thanks
        </Card>
      </div>

      <h2>Are you using a client side framework?</h2>

      <div className="flex">
        <Card onClick={() => setClientSideFramework('react')}>
          I'm using React
        </Card>
        <Card onClick={() => setClientSideFramework('vue')}>I'm using Vue</Card>
        <Card onClick={() => setClientSideFramework('elements')}>
          I need to setup web component (custom element) support
        </Card>
        <Card onClick={() => setClientSideFramework('none')}>
          Plain old HTML for me!
        </Card>
      </div>
    </>
  );
}
