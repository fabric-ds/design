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

export default function Icons({ icons }) {
  return (
    <>
      <Head>
        <title>Icons | Fabric</title>
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

      <FilterableIconGrid icons={icons} />
    </>
  );
}

const FilterableIconGrid = ({ icons }) => {
  const [filterText, setFilterText] = React.useState('');

  const filteredIcons =
    filterText.trim() !== ''
      ? icons.filter((icon) => icon.name.includes(filterText))
      : icons;

  return (
    <>
      <TextField
        className="u-size1of3"
        label="Filter icons"
        onChange={(e) => setFilterText(e.target.value)}
        value={filterText}
      />
      <div className="panel panel--neutral u-mh0">
        <div
          className="u-mt16"
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
                style={{ width: 24, height: 24 }}
              />

              <div className="u-d1">{icon.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export function getStaticProps() {
  const iconNames = fs.readdirSync(iconsPath);

  const icons = iconNames.map((fileName) => {
    const svgPath = path.join(iconsPath, fileName);
    const data = fs.readFileSync(svgPath, 'utf-8');

    return {
      name: path.parse(svgPath).name,
      data,
    };
  });

  return {
    props: { icons },
  };
}
