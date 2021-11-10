import React from 'react';
import Head from 'next/head';
import { colors } from '@fabric-ds/tailwind-config/colors.js';
import mapObject from 'map-obj';
import decamelize from 'decamelize';

import { AssetLink, AssetLinks } from '../components/AssetLink';

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

export default function ColorPage({ colors }) {
  return (
    <>
      <Head>
        <title>Color | FINN Fabric</title>
      </Head>

      <h1>Colors</h1>

      <p>
        Fabric colors are designed to be clear and accessible. They come in
        different color ranges.
      </p>

      <AssetLinks>
        <AssetLink href="https://www.figma.com/file/l85T4rDU53Cz5Rz0lo89z1/FINN-Colors-v2.0" />
      </AssetLinks>
      <section className="my-48">
        <h3 className="mt-24">Logo colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="bg-blue-600 rounded-t-8 h-64"></div>
            <div className="p-16 border-2 border-t-0 rounded-b-8">
              <h4>Primary-blue</h4>
              <dl className="m-0 text-12">
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">HEX</dt>
                  <dd className="m-0">#2563eb</dd>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">Alias of</dt>
                  <dd className="m-0">blue-600</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <div className="bg-aqua-400 rounded-t-8 h-64"></div>
            <div className="p-16 border-2 border-t-0 rounded-b-8">
              <h4>Secondary-blue</h4>
              <dl className="m-0 text-12">
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">HEX</dt>
                  <dd className="m-0">#38bdf8</dd>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">Alias of</dt>
                  <dd className="m-0">aqua-400</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <h3 className="mt-24">Text colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="bg-gray-700 rounded-t-8 h-64"></div>
            <div className="p-16 border-2 border-t-0 rounded-b-8">
              <h4>Licorice</h4>
              <dl className="m-0 text-12">
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">HEX</dt>
                  <dd className="m-0">#474445</dd>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">Alias of</dt>
                  <dd className="m-0">gray-700</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <div className="bg-gray-500 rounded-t-8 h-64"></div>
            <div className="p-16 border-2 border-t-0 rounded-b-8">
              <h4>Stone</h4>
              <dl className="m-0 text-12">
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">HEX</dt>
                  <dd className="m-0">#767676</dd>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">Alias of</dt>
                  <dd className="m-0">gray-500</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <div className="bg-bluegray-300 rounded-t-8 h-64"></div>
            <div className="p-16 border-2 border-t-0 rounded-b-8">
              <h4>Sardine</h4>
              <dl className="m-0 text-12">
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">HEX</dt>
                  <dd className="m-0">#C3CCD9</dd>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">Alias of</dt>
                  <dd className="m-0">bluegray-300</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <h3 className="mt-24">Background colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="bg-aqua-200 rounded-t-8 h-64 border-2"></div>
            <div className="p-16 border-2 border-t-0 rounded-b-8">
              <h4>Toothpaste</h4>
              <dl className="m-0 text-12">
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">HEX</dt>
                  <dd className="m-0">#B6F0FF</dd>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">Alias of</dt>
                  <dd className="m-0">aqua-200</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <div className="bg-aqua-50 rounded-t-8 h-64 border-2"></div>
            <div className="p-16 border-2 border-t-0 rounded-b-8">
              <h4>Ice</h4>
              <dl className="m-0 text-12">
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">HEX</dt>
                  <dd className="m-0">#F1F9FF</dd>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">Alias of</dt>
                  <dd className="m-0">aqua-50</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <div className="bg-bluegray-100 rounded-t-8 h-64 border-2"></div>
            <div className="p-16 border-2 border-t-0 rounded-b-8">
              <h4>Marble</h4>
              <dl className="m-0 text-12">
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">HEX</dt>
                  <dd className="m-0">#F6F8FB</dd>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">Alias of</dt>
                  <dd className="m-0">bluegray-100</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-t-8 h-64 border-2"></div>
            <div className="p-16 border-2 border-t-0 rounded-b-8">
              <h4>Milk</h4>
              <dl className="m-0 text-12">
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">HEX</dt>
                  <dd className="m-0">#FFFFFF</dd>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">Alias of</dt>
                  <dd className="m-0">white</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <div className="bg-green-200 rounded-t-8 h-64 border-2"></div>
            <div className="p-16 border-2 border-t-0 rounded-b-8">
              <h4>Mint</h4>
              <dl className="m-0 text-12">
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">HEX</dt>
                  <dd className="m-0">#CCFFEC</dd>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">Alias of</dt>
                  <dd className="m-0">green-200</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <div className="bg-yellow-100 rounded-t-8 h-64 border-2"></div>
            <div className="p-16 border-2 border-t-0 rounded-b-8">
              <h4>Banana</h4>
              <dl className="m-0 text-12">
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">HEX</dt>
                  <dd className="m-0">#FFF5C8</dd>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">Alias of</dt>
                  <dd className="m-0">yellow-100</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <div className="bg-red-200 rounded-t-8 h-64 border-2"></div>
            <div className="p-16 border-2 border-t-0 rounded-b-8">
              <h4>Salmon</h4>
              <dl className="m-0 text-12">
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">HEX</dt>
                  <dd className="m-0">#FFEFEF</dd>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">Alias of</dt>
                  <dd className="m-0">red-200</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <h3 className="mt-24">Detail colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="bg-green-600 rounded-t-8 h-64"></div>
            <div className="p-16 border-2 border-t-0 rounded-b-8">
              <h4>Lime</h4>
              <dl className="m-0 text-12">
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">HEX</dt>
                  <dd className="m-0">#007200</dd>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">Alias of</dt>
                  <dd className="m-0">green-600</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <div className="bg-green-400 rounded-t-8 h-64"></div>
            <div className="p-16 border-2 border-t-0 rounded-b-8">
              <h4>Pea</h4>
              <dl className="m-0 text-12">
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">HEX</dt>
                  <dd className="m-0">#2EE69F</dd>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">Alias of</dt>
                  <dd className="m-0">green-400</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <div className="bg-red-600 rounded-t-8 h-64"></div>
            <div className="p-16 border-2 border-t-0 rounded-b-8">
              <h4>Cherry</h4>
              <dl className="m-0 text-12">
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">HEX</dt>
                  <dd className="m-0">#D9270A</dd>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">Alias of</dt>
                  <dd className="m-0">red-600</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <div className="bg-red-400 rounded-t-8 h-64"></div>
            <div className="p-16 border-2 border-t-0 rounded-b-8">
              <h4>Watermelon</h4>
              <dl className="m-0 text-12">
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">HEX</dt>
                  <dd className="m-0">#FF5844</dd>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2">
                  <dt className="m-0">Alias of</dt>
                  <dd className="m-0">red-400</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="my-32">
        <h3>Full palette</h3>
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
      <h4>{colorName}</h4>

      <div className="grid grid-cols-5 lg:grid-cols-10 gap-10">
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
        className="width-max-width h-48 rounded-t-4 border-2"
        style={{ backgroundColor: colorHex }}
      />

      <div className="border-2 border-t-0 rounded-b-4 p-8">
        <div className="text-gray-500 font-bold text-12">{token}</div>

        <div className="mt-4 text-12 font-bold uppercase text-gray-680">
          {colorHex}
        </div>
      </div>
    </div>
  );
}

function decamelizeCaptitalize(str) {
  return decamelize(str, { separator: ' ' }).replace(/^\w/, (c) =>
    c.toUpperCase(),
  );
}
