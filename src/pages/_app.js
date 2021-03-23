import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

import { Bad } from '../components/Bad';
import { Good } from '../components/Good';
import { Fig } from '../components/Fig';
import { Nav } from '../components/Nav';
import Image from 'next/image';
import { AssetLink, AssetLinks } from '../components/AssetLink';
import classes from '../components/App.module.css';
import Footer from '../components/Footer';

const shortcodes = {
  AssetLink,
  AssetLinks,
  Bad,
  Good,
  Fig,
  Image: (props) => <Image {...props} />,
  h1: (props) => <h1 className="mt-32" {...props} />,
  h2: (props) => <h2 className="mt-32" {...props} />,
  h3: (props) => <h3 className="mt-32" {...props} />,
  h4: (props) => <h4 className="mt-32" {...props} />,
  h5: (props) => <h5 className="mt-32" {...props} />,
  h6: (props) => <h6 className="mt-32" {...props} />,
  p: (props) => <p className="pb-16" {...props} />,
  ul: (props) => <ul className="pb-16 list-disc list-inside" {...props} />, 
  ol: (props) => <ol className="pb-16 list-decimal list-inside" {...props} />, 
  dl: (props) => <dl className="pb-16" {...props} />, 
  li: (props) => <li className="pb-4" {...props} />, 
  table: (props) => <table className="mb-16 p-0 w-full" {...props} />,
  tr: (props) => <tr className="border-t border-gray-300 bg-white m-0 p-0" {...props} />,
  th: (props) => <th className="border border-gray-300 bg-white m-0 py-6 px-14 text-left" {...props} />,
  td: (props) => <td className="border border-gray-300 bg-white m-0 py-6 px-14 text-left" {...props} />,  
  pre: (props) => <pre className="pb-16" {...props} />,
  main: (props) => <main className="break-words" {...props} />,
  strong: (props) => <strong className="strong" {...props} />,
  hr: (props) => (
    <hr className="border-none text-gray-300 h-4 p-0" {...props} />
  ),
};

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FINN Fabric</title>
      </Head>
      <MDXProvider components={shortcodes}>
        <div
          className="grid h-screen"
          style={{ gridTemplateColumns: '256px 1fr' }}
        >
          <Nav />

          <div
            className="grid justify-center p-40"
            style={{
              gridTemplateColumns: 'minmax(auto, 900px)',
              gridTemplateRows: '1fr auto',
            }}
          >
            <main>
              <Component {...pageProps} />
            </main>

            <Footer />
          </div>
        </div>
      </MDXProvider>
    </>
  );
}

export default App;
