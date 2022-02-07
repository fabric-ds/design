import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { iconsPath } from '@fabric-ds/icons';

import '@fabric-ds/icons';

export default function Icons({ iconsBySize, iconSizes }) {
  return (
    <>
      <Head>
        <title>Icons | FINN Fabric</title>
      </Head>

      <h1 className="mb-16">Icons</h1>

      <p className="mb-64">
        Fabric's icon set is designed to help users understand actions, information and draw attention to elements.
        Review the{' '}
        <Link href="/iconography">
          <a>Iconography guidelines</a>
        </Link>{' '}
        to understand how to use our icons.
      </p>

      <FilterableIconGrid iconsBySize={iconsBySize} iconSizes={iconSizes} />
    </>
  );
}

const FilterableIconGrid = ({ iconsBySize, iconSizes }) => {
  const [filterText, setFilterText] = React.useState('');

  return (
    <>
      <input
        className="w-1/3 mb-16"
        label="Filter icons"
        onChange={(e) => setFilterText(e.target.value)}
        value={filterText}
      />

      {iconSizes.map((size, i) => (
        <IconsForSize icons={iconsBySize[i]} size={size} key={size} filterText={filterText} />
      ))}
    </>
  );
};

const IconsForSize = ({ icons, size, filterText }) => {
  const filteredIcons = filterText.trim() !== '' ? icons.filter((icon) => icon.name.includes(filterText)) : icons;

  return (
    <section className="bg-gray-100 rounded-8 p-24 mb-24">
      <h2 className="mb-16 h3">
        {size}
        &nbsp;
        <span className="text-16 text-gray-500">
          ({filteredIcons.length}/{icons.length})
        </span>
      </h2>
      <div
        className="grid gap-24"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, 100px)',
        }}
      >
        {filteredIcons.map((icon) => (
          <div className="text-center" key={icon.name}>
            <div
              className="mx-auto mb-8 bg-white rounded-4 h-56 flex items-center justify-center flex-col"
              dangerouslySetInnerHTML={{ __html: icon.data }}
            />

            <div className="text-12">{icon.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export function getStaticProps() {
  const iconSizes = fs.readdirSync(iconsPath);

  const iconsBySize = iconSizes.map((size) => {
    const iconNames = fs.readdirSync(path.join(iconsPath, size));

    return iconNames.map((fileName) => {
      const svgPath = path.join(iconsPath, size, fileName);
      const data = fs.readFileSync(svgPath, 'utf-8');

      return {
        name: path.parse(svgPath).name,
        data,
      };
    });
  });

  return {
    props: { iconsBySize, iconSizes },
  };
}
