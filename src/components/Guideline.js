import React from 'react';
import { Good } from './Good';
import { Bad } from './Bad';
import { Fig } from './Fig';
import classes from '../components/Guideline.module.css';

export function Guideline(props) {
  const { title, children, image, goodImage, badImage } = props;

  return (
    <div className={`grid md:grid-cols-2 mb-16 ${title ? 'mt-48' : ''}`}>
      <div className="col-span1 pr-48">
        <h3>{title}</h3>
        {children}
      </div>

      <div className="col-span1 pr-48">
        {image && (
          <div className="col-span1">
            <Fig>
              <img src={`./figma/${image}`} alt="" />
            </Fig>
          </div>
        )}
        {goodImage && (
          <Good className="mb-16">
            <img src={`./figma/${goodImage}`} alt="" />
          </Good>
        )}
        {badImage && (
          <Bad className="mb-16">
            <img src={`./figma/${badImage}`} alt="" />
          </Bad>
        )}
      </div>
    </div>
  );
}

