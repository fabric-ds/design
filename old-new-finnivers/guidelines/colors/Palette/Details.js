import { styled } from 'linaria/react';
import { rhythm } from '../../../../src/utils/typography';

const Details = styled.div`
  padding: 0 ${rhythm(1 / 2)};

  && h4 {
    margin-top: ${rhythm(1 / 2)};
  }
`;

export default Details;
