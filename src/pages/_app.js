import React from 'react';
import Head from 'next/head';
import { MDXProvider } from "@mdx-js/react";
import { TableOfContents } from "../components/TableOfContents";
import { Bad } from "../components/Bad";
import { Good } from "../components/Good";
import { Fig } from "../components/Fig";
import { Guideline } from "../components/Guideline";
import { AssetLink, AssetLinks } from "../components/AssetLink";
import classes from "../components/App.module.css";
import Footer from "../components/Footer";

const shortcodes = {
  TableOfContents,
  AssetLink,
  AssetLinks,
  Bad,
  Good,
  Guideline,
  Fig,
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
  tr: (props) => (
    <tr className="border-t border-gray-300 bg-white m-0 p-0" {...props} />
  ),
  th: (props) => (
    <th
      className="border border-gray-300 bg-white m-0 py-6 px-14 text-left"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border border-gray-300 bg-white m-0 py-6 px-14 text-left"
      {...props}
    />
  ),
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
      <f-docs-template>
        <script
          data-for="sidebar"
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              category: "Design",
              items: [
                {
                  title: "Fabric",
                  open: false,
                  items: [
                    {
                      title: "Principles",
                      href: "?page=principles",
                    },
                    {
                      title: "What's new",
                      href: "?page=new",
                    },
                    {
                      title: "Getting started",
                      href: "?page=started",
                    },
                  ],
                },
                {
                  title: "Foundations",
                  open: false,
                  items: [
                    {
                      title: "Test",
                      href: "?page=test",
                    },
                    {
                      title: "Something else",
                      href: "?page=else",
                    },
                  ],
                },
                { title: "Components", open: false },
                { title: "Resources", open: false },
              ],
            }),
          }}
        ></script>
        <div
          slot="banner"
          class="mx-auto p-32"
          style={{ "max-width": "1024px" }}
        >
          <h1 className="text-white">
            <span className="h3">Welcome to</span> <br />
            Fabric Design system
          </h1>
        </div>
        <section slot="content">
          <MDXProvider components={shortcodes}>
            <main>
              <Component {...pageProps} />
            </main>
            <Footer />
          </MDXProvider>
        </section>
      </f-docs-template>
    </>
  );
}

export default App;
