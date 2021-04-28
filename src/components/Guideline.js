import React from "react";
import { Good } from "./Good";
import { Bad } from "./Bad";
import { Fig } from "./Fig";


export function Guideline(props) {
  const { title, children, image, good, bad } = props;
  let ImageComponent = () => (<div></div>);
  ImageComponent = Fig;
  if (good) ImageComponent = Good;
  if (bad) ImageComponent = Bad;
  return <div className={`grid md:grid-cols-2 mb-16 ${title ? "mt-48" : ""}`}>
    <div className="col-span1">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
    <div className="col-span1">
    <ImageComponent>
      <img src={`/figma/${image}`} alt="" />
    </ImageComponent>
    </div>
  </div>;
}
