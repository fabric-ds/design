import * as React from 'react';
import Head from 'next/head';
import { theme } from '@finn-no/fabric-tailwind-config';
import mapObject from 'map-obj';
import decamelize from 'decamelize';

import { AssetLink, AssetLinks } from '../components/AssetLink';

export default function ColorPage({ colors }) {
  return (
    <>
      <Head>
        <title>Color | FINN Fabric</title>
      </Head>

      <h1 className="mb-16">Colors</h1>

      <p className="u-t4 mb-32">
        Fabric colors are designed to be clear and accessible. They come in
        different color ranges.
      </p>

      <AssetLinks>
        <AssetLink href="https://www.figma.com/file/l85T4rDU53Cz5Rz0lo89z1/FINN-Colors-v2.0" />
      </AssetLinks>

      <section className="my-32">
        <h2>Palette</h2>
        <Palette colors={colors} />
      </section>

      <h2>Guidelines</h2>
      <div className="grid gap-10">
        <div>
          <h3>Don't create your own colors</h3>
          <p>
            Every part of the interface should use a color defined by Fabric to
            ensure consistency across products. Fabric’s colors are carefully
            chosen and tested to ensure they meet accessibility standards.
          </p>
        </div>

        <div>
          <h3>Communicating with color</h3>
          <p>
            In order to be accessible for every user, do not use color alone as
            a method of communication. For every usage of color as a feedback
            method, there should be an accompanying label and/or icon.
          </p>
        </div>
      </div>
    </>
  );
}

function Palette({ colors }) {
  return (
    <div className="mt-16 grid gap-24 grid-flow-row">
      {Object.entries(colors).map(([colorName, colors]) => (
        <ColorRange key={colorName} colorName={colorName} colors={colors} />
      ))}
    </div>
  );
}

function ColorRange({ colors, colorName }) {
  return (
    <div>
      <span className="block mb-16 font-bold text-lg">{colorName}</span>

      <div className="grid grid-cols-10 gap-10">
        {typeof colors === 'string' ? (
          // Not all colors are ranges
          <Color colorHex={colors} />
        ) : (
          Object.entries(colors).map(([token, colorHex]) => (
            <Color key={colorHex} token={token} colorHex={colorHex} />
          ))
        )}
      </div>
    </div>
  );
}

function Color({ token, colorHex }) {
  return (
    <div>
      <div
        className="w-48 h-48 rounded shadow"
        style={{ backgroundColor: colorHex }}
      />

      <span className="block mt-10 text-gray-500 font-bold text-sm">
        {token}
      </span>

      <span className="block mt-8 text-sm font-bold">{colorHex}</span>
    </div>
  );
}

export function getStaticProps() {
  let colors = theme.colors;

  // decamlize the color names and uppercase the first letter
  colors = mapObject(colors, (key, value) => [
    decamelizeCaptitalize(key),
    value,
  ]);

  return {
    props: { colors },
  };
}

function decamelizeCaptitalize(str) {
  return decamelize(str, { separator: ' ' }).replace(/^\w/, (c) =>
    c.toUpperCase()
  );
}
