import React from 'react';
import { Good } from './Good';
import { Bad } from './Bad';
import { Fig } from './Fig';
import classes from '../components/Guideline.module.css';

export function Guideline(props) {
  const { title, children, image, good, bad } = props;
  let ImageComponent = () => <div></div>;
  if (image && good) ImageComponent = Good;
  else if (image && bad) ImageComponent = Bad;
  else if (image) ImageComponent = Fig;

  return (
    <div className={`grid md:grid-cols-2 mb-16 ${title ? 'mt-48' : ''}`}>
      <div className="col-span1 pr-48">
        <h3>{title}</h3>
        {children}
      </div>
      <div className="col-span1">
        <ImageComponent>
          <img src={`./figma/${image}`} alt="" />
        </ImageComponent>
      </div>
    </div>
  );
}
