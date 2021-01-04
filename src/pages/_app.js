import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

import 'tailwindcss/tailwind.css';
import { Bad } from '../components/Bad';
import { Good } from '../components/Good';
import { Fig } from '../components/Fig';
import { Nav } from '../components/Nav';
import classes from '../components/App.module.css';
const shortcodes = {
  Bad, Good, Fig,
};

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FINN Fabric</title>
      </Head>
      <MDXProvider components={shortcodes}>
        <div className={classes.layout}>
          <Nav />

          <div className={classes.content}>
            <main className={classes.md}>
              <Component {...pageProps} />
            </main>
            <footer>This footer is suspiciously empty</footer>
          </div>
        </div>
      </MDXProvider>
    </>
  );
}

export default App;
