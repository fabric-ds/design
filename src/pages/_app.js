import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

import { Bad } from '../components/Bad';
import { Good } from '../components/Good';
import { Fig } from '../components/Fig';
import { Nav } from '../components/Nav';
import classes from '../components/App.module.css';
import Footer from '../components/Footer';

const shortcodes = {
  Bad,
  Good,
  Fig,
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
            <main className={classes.md}>
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
