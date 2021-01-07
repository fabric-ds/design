import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { iconsPath } from '@finn-no/fabric-icons';
import { TextField } from '@finn-no/troika-react-textfield';

import '@finn-no/troika-css-panel/dist/panel.css';
import '@finn-no/troika-react-textfield/style.css';
import '@finn-no/fabric-icons';

export default function Icons({ iconsBySize, iconSizes }) {
  return (
    <>
      <Head>
        <title>Icons | FINN Fabric</title>
      </Head>

      <h1 className="u-mb16">Icons</h1>

      <p className="u-t4 u-mb64">
        Fabric's icon set is designed to help users understand actions,
        information and draw attention to elements. Review the{' '}
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
      <TextField
        className="u-size1of3"
        label="Filter icons"
        onChange={(e) => setFilterText(e.target.value)}
        value={filterText}
      />
      <div
        className="panel panel--neutral u-mh0"
        style={{ display: 'grid', gap: '3rem' }}
      >
        {iconSizes.map((size, i) => (
          <IconsForSize
            icons={iconsBySize[i]}
            size={size}
            key={size}
            filterText={filterText}
          />
        ))}
      </div>
    </>
  );
};

const IconsForSize = ({ icons, size, filterText }) => {
  const filteredIcons =
    filterText.trim() !== ''
      ? icons.filter((icon) => icon.name.includes(filterText))
      : icons;

  return (
    <section>
      <h2
        // FIXME: use inline styles here, as the CSS meant to apply to markdown pages hits this page as well :(
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          marginBottom: '2rem',
        }}
      >
        {size}
        &nbsp;
        <span className="u-d1">
          ({filteredIcons.length}/{icons.length})
        </span>
      </h2>
      <div
        style={{
          display: 'grid',
          gap: '35px',
          gridTemplateColumns: 'repeat(auto-fill, 100px)',
          justifyContent: 'center',
        }}
      >
        {filteredIcons.map((icon) => (
          <div className="u-text-center" key={icon.name}>
            <div
              className="u-mha u-mb16"
              dangerouslySetInnerHTML={{ __html: icon.data }}
            />

            <div className="u-d1">{icon.name}</div>
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
