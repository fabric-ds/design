import { styled } from 'linaria/react';
import { options, rhythm, scale } from '../../../../src/utils/typography';

const ColorValuesFont = scale(-2 / 8);

const ColorValues = styled.dl`
  && {
    display: inline-grid;
    grid-template-columns: [key] min-content [value] auto;
    align-items: center;

    dt,
    dd {
      font-size: ${ColorValuesFont.fontSize};
      line-height: ${ColorValuesFont.lineHeight};
    }

    dt {
      grid-column: key;
      color: var(--troika-stone);
      font-weight: ${options.bodyWeight};
      margin: 0 ${rhythm(1 / 2)} 0 0;
    }

    dd {
      grid-column: value;
      margin: ${rhythm(1 / 32)} 0;
      white-space: nowrap;
    }
  }
`;

export default ColorValues;
