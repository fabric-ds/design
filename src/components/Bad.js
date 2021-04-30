import React from 'react';
import classes from '../components/Bad.module.css';

export function Bad(props) {
  return (
    <section
      className={`${classes.bad} relative border-solid border-0 border-l-4 border-red-500 bg-gray-100 p-5 rounded-r flex align-middle justify-center`}
      {...props}
    />
  );
}
