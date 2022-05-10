import React from 'react';
import classes from '../components/Good.module.css';

export function Good(props) {
  const { className, ...rest } = props;
  return (
    <section
      // className={`${classes.good} relative border-solid border-0 border-l-4 border-green-500 bg-gray-100 p-5 rounded-r flex align-middle justify-center`}
      // {...props}
      className={`${classes.good} relative border-solid border-0 border-l-4 border-green-500 bg-gray-100 p-5 rounded-r flex align-middle justify-center ${className}`}
      {...rest}
    />
  );
}
