import React from 'react';

const divStyle = {
  minHeight: '200px',
};

export function Fig(props) {
  const { image, title } = props;
  return (
    <figure 
      className="bg-gray-100 mb-16 flex align-middle justify-center items-center" 
      style={divStyle}
      {...props} 
    />
  );
}
