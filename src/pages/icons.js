import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { Fig } from '../components/Fig';
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

      <h1 className="mb-16">Icons</h1>

      <p className="u-t4 mb-64">
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
        className="w-1/3 u-mb16"
        label="Filter icons"
        onChange={(e) => setFilterText(e.target.value)}
        value={filterText}
      />

      {iconSizes.map((size, i) => (
        <IconsForSize
          icons={iconsBySize[i]}
          size={size}
          key={size}
          filterText={filterText}
        />
      ))}
    </>
  );
};

const IconsForSize = ({ icons, size, filterText }) => {
  const filteredIcons =
    filterText.trim() !== ''
      ? icons.filter((icon) => icon.name.includes(filterText))
      : icons;

  return (
    <Fig>
      <h2 className="mb-16 text-22">
        {size}
        &nbsp;
        <span className="u-b1 u-stone">
          ({filteredIcons.length}/{icons.length})
        </span>
      </h2>
      <div
        style={{
          display: 'grid',
          gap: '26px',
          gridTemplateColumns: 'repeat(auto-fill, 100px)',
        }}
      >
        {filteredIcons.map((icon) => (
          <div className="text-center" key={icon.name}>
            <div
              className="mx-auto mb-8"
              style={{
                backgroundColor: 'white',
                borderRadius: '4px',
                height: '52px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              dangerouslySetInnerHTML={{ __html: icon.data }}
            />

            <div className="u-d1">{icon.name}</div>
          </div>
        ))}
      </div>
    </Fig>
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
