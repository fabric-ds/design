import React from "react";
import { Good } from "./Good";
import { Bad } from "./Bad";

export function Guideline(props) {
  const { title, children, image, good, bad } = props;
  let ImageComponent = () => (<div></div>);
  if (good) ImageComponent = Good;
  if (bad) ImageComponent = Bad;
  return <div>
    <h2>{title}</h2>
    <p>{children}</p>
    <ImageComponent>
      <img src={`/figma/${image}`} alt="" />
    </ImageComponent>
  </div>;
}
