import hexRgb from 'hex-rgb';
import { styled } from 'linaria/react';
import React from 'react';
import ColorValues from './ColorValues';
import Details from './Details';
import Preview from './Preview';
import slugify from '@sindresorhus/slugify';

const formatHexToRgb = (value) => {
  // Strip out the alpha channel as it's not used
  const [r, g, b] = hexRgb(value, { format: 'array' });
  return [r, g, b].join(', ');
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 190px);
  grid-gap: 1rem;
  margin: 1rem 0;
`;

const Panel = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  && a {
    color: var(--color-licorice);
  }
`;

const Palette = ({ colors }) => {
  return (
    <Wrapper>
      {colors.map(({ label, value, css }) => {
        const slug = slugify(label);
        const classNames = css ? [].concat(css) : false;

        return (
          <Panel key={value} id={slug}>
            <Preview backgroundColor={value} />
            <Details>
              <h4>
                <a href={`#${slug}`}>{label}</a>
              </h4>
              <ColorValues>
                <dt>HEX</dt>
                <dd>{value}</dd>
                <dt>RGB</dt>
                <dd>{formatHexToRgb(value)}</dd>
                {classNames && (
                  <>
                    <dt>CSS</dt>
                    {classNames.map((className) => (
                      <dd key={className}>{className}</dd>
                    ))}
                  </>
                )}
              </ColorValues>
            </Details>
          </Panel>
        );
      })}
    </Wrapper>
  );
};

export default Palette;
