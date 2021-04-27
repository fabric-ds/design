import React from "react";
import ReactMarkdown from 'react-markdown'

function Markdown(props) {
  return <ReactMarkdown className="guideline-description">{props.children}</ReactMarkdown>;
}

export function Guideline(props) {
  const children = React.Children.map(props.children, (child, i) => {
    console.log(child, i)
    if (i === 0 && typeof child === "string")
      return <Markdown>{child}</Markdown>;
    return child;
  });
  return <div className="flex flex-row">{[]}</div>;
}
