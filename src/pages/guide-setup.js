import React, { useState } from 'react';
import Head from 'next/head';
import { Card, Toggle, Button } from '@fabric-ds/react';
import { useRouter } from 'next/router';

export default function GuideSetup() {
  const Router = useRouter();

  const [platform, setPlatform] = useState();
  const [framework, setFramework] = useState();
  const [podium, setPodium] = useState();
  const [abstraction, setAbstraction] = useState();
  // const [eikHelp, setEikHelp] = useState();
  const [clientSideFramework, setClientSideFramework] = useState();

  const query = new URLSearchParams();
  if (platform) query.append('platform', platform);
  if (framework) query.append('framework', framework);
  // if (podium) query.append('podium', podium);
  if (abstraction) query.append('abstraction', abstraction);
  if (clientSideFramework) query.append('csframework', clientSideFramework);

  return (
    <>
      <Head>
        <title>Guide - Setting up | FINN Fabric</title>
      </Head>

      <h1>Let's get you setup...</h1>

      <p>We can customise your instructions to your situation. Just answer a few questions to get started...</p>

      <h4 className="mt-20">Which platform are you using?</h4>
      <div className="flex flex-wrap">
        <Card selected={platform === 'node'} className="py-12 px-20 m-10" onClick={() => setPlatform('node')}>
          <Toggle type="radio" checked={platform === 'node'} label="Node.js" onChange={() => setPlatform('node')} />
        </Card>
        <Card selected={platform === 'other'} className="py-12 px-20 m-10" onClick={() => setPlatform('other')}>
          <Toggle type="radio" label="Other" checked={platform === 'other'} onChange={() => setPlatform('other')} />
        </Card>
      </div>
      <hr className="mt-20" />

      {platform === 'node' ? (
        <>
          <h4 className="mt-20">What server side framework are you using?</h4>

          <div className="flex flex-wrap">
            {/* <Card
              selected={framework === 'next'}
              className="py-12 px-20 m-10"
              onClick={() => setFramework('next')}
            >
              <Toggle
                type="radio"
                label="Next.js"
                checked={framework === 'next'}
                onChange={() => setFramework('next')}
              />
            </Card> */}
            <Card
              selected={framework === 'fastify'}
              className="py-12 px-20 m-10"
              onClick={() => setFramework('fastify')}
            >
              <Toggle
                type="radio"
                label="Fastify"
                checked={framework === 'fastify'}
                onChange={() => setFramework('fastify')}
              />
            </Card>
            <Card
              selected={framework === 'express'}
              className="py-12 px-20 m-10"
              onClick={() => setFramework('express')}
            >
              <Toggle
                type="radio"
                label="Express"
                checked={framework === 'express'}
                onChange={() => setFramework('express')}
              />
            </Card>
          </div>
          <hr className="mt-20" />
        </>
      ) : (
        ''
      )}

      {/* {platform === 'node' && framework === 'express' && (
        <>
          <h4 className="mt-20">Is your app using Podium?</h4>
          <div className="flex flex-wrap">
            <Card
              selected={podium === 'podlet'}
              className="py-12 px-20 m-10"
              onClick={() => setPodium('podlet')}
            >
              <Toggle
                type="radio"
                label="My app is a podlet"
                checked={podium === 'podlet'}
                onChange={() => setPodium('podlet')}
              />
            </Card>
            <Card
              selected={podium === 'layout'}
              className="py-12 px-20 m-10"
              onClick={() => setPodium('layout')}
            >
              <Toggle
                type="radio"
                label="My app is a layout"
                checked={podium === 'layout'}
                onChange={() => setPodium('layout')}
              />
            </Card>
            <Card
              selected={podium === 'none'}
              className="py-12 px-20 m-10"
              onClick={() => setPodium('none')}
            >
              <Toggle
                type="radio"
                label="My app is not a Podium layout or podlet"
                checked={podium === 'none'}
                onChange={() => setPodium('none')}
              />
            </Card>
          </div>
          <hr className="mt-20" />
        </>
      )} */}

      {platform === 'node' && framework ? (
        <>
          <h4 className="mt-20">Is your app using a Podium abstraction module?</h4>
          <div className="flex flex-wrap">
            {framework === 'express' && (
              <>
                {/* {podium === 'podlet' ? ( */}
                <Card
                  selected={abstraction === 'express-podlet'}
                  className="py-12 px-20 m-10"
                  onClick={() => setAbstraction('express-podlet')}
                >
                  <Toggle
                    type="radio"
                    label="I'm using Express podlet"
                    checked={abstraction === 'express-podlet'}
                    onChange={() => setAbstraction('express-podlet')}
                  />
                </Card>
                {/* ) : (
                  ''
                )} */}
                {/* {podium === 'layout' ? ( */}
                <Card
                  selected={abstraction === 'express-layout'}
                  className="py-12 px-20 m-10"
                  onClick={() => setAbstraction('express-layout')}
                >
                  <Toggle
                    type="radio"
                    label="I'm using Express layout"
                    checked={abstraction === 'express-layout'}
                    onChange={() => setAbstraction('express-layout')}
                  />
                </Card>
                {/* ) : (
                  ''
                )} */}
              </>
            )}
            <Card
              selected={abstraction === 'html-template'}
              className="py-12 px-20 m-10"
              onClick={() => setAbstraction('html-template')}
            >
              <Toggle
                type="radio"
                label="I'm using HTML Template"
                checked={abstraction === 'html-template'}
                onChange={() => setAbstraction('html-template')}
              />
            </Card>
            <Card selected={abstraction === 'none'} className="py-12 px-20 m-10" onClick={() => setAbstraction('none')}>
              <Toggle
                type="radio"
                label="I'm not using any abstractions"
                checked={abstraction === 'none'}
                onChange={() => setAbstraction('none')}
              />
            </Card>
          </div>
          <hr className="mt-20" />
        </>
      ) : (
        ''
      )}

      {/* <h4 className="mt-20">Do you need help getting Eik setup?</h4>
      <div className="flex flex-wrap">
        <Card
          selected={eikHelp === true}
          className="py-12 px-20 m-10"
          onClick={() => setEikHelp(true)}
        >
          <Toggle
            type="radio"
            label="I need help setting up Eik"
            checked={eikHelp === true}
            onChange={() => setEikHelp(true)}
          />
        </Card>
        <Card
          selected={eikHelp === false}
          className="py-12 px-20 m-10"
          onClick={() => setEikHelp(false)}
        >
          <Toggle
            type="radio"
            label="Eik is already setup thanks"
            checked={eikHelp === false}
            onChange={() => setEikHelp(false)}
          />
        </Card>
      </div>
      <hr className="mt-20" /> */}

      {((!abstraction && platform == 'other') || (abstraction && platform == 'node')) && (
        <>
          <h4 className="mt-20">Are you using a client side framework?</h4>
          <div className="flex flex-wrap">
            <Card
              selected={clientSideFramework === 'react'}
              className="py-12 px-20 m-10"
              onClick={() => setClientSideFramework('react')}
            >
              <Toggle
                type="radio"
                label="I'm using React"
                checked={clientSideFramework === 'react'}
                onChange={() => setClientSideFramework('react')}
              />
            </Card>
            <Card
              selected={clientSideFramework === 'vue'}
              className="py-12 px-20 m-10"
              onClick={() => setClientSideFramework('vue')}
            >
              <Toggle
                type="radio"
                label="I'm using Vue"
                checked={clientSideFramework === 'vue'}
                onChange={() => setClientSideFramework('vue')}
              />
            </Card>
            <Card
              selected={clientSideFramework === 'elements'}
              className="py-12 px-20 m-10"
              onClick={() => setClientSideFramework('elements')}
            >
              <Toggle
                type="radio"
                label="I need to setup custom element support (web components)"
                checked={clientSideFramework === 'elements'}
                onChange={() => setClientSideFramework('elements')}
              />
            </Card>
            <Card
              selected={clientSideFramework === 'none'}
              className="py-12 px-20 m-10"
              onClick={() => setClientSideFramework('none')}
            >
              <Toggle
                type="radio"
                label="Plain old HTML for me!"
                checked={clientSideFramework === 'none'}
                onChange={() => setClientSideFramework('none')}
              />
            </Card>
          </div>
        </>
      )}

      {platform && (
        <div className="flex flex-wrap justify-center mt-20">
          <Button onClick={() => Router.push(`/guide-instructions?${query.toString()}`)} utility>
            Show me the docs!
          </Button>
        </div>
      )}
    </>
  );
}
