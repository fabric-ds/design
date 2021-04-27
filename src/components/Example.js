import React from 'react';

export function Example(props) {
    if (props.good) {
      return <div className="border-green-500 border-l-4 bg-gray-300">
        <img src={props.picture} alt="" />
      </div>;
    } else if(props.bad) {
      return <div className="border-red-500 border-l-4 bg-gray-300">
        <img src={props.picture} alt="" />
      </div>;
    }
}
