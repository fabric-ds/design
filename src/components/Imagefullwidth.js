import React from 'react';
import { Fig } from './Fig';

const divStyle = {
  minHeight: '200px',
};

export function Imagefullwidth(props) {
  const { image, title } = props;
  return (
    <Fig>  
      <img src={`./figma/${image}`} alt={title} />
    </Fig>
  );
}

