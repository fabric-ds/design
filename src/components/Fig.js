import React from 'react';

const divStyle = {
  minHeight: '200px',
};

export function Fig(props) {
  return (
    <figure 
      className="bg-gray-100 p-5 rounded-r flex align-middle justify-center " 
      style={divStyle}
      {...props} 
    />
  );
}
