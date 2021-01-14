import * as React from 'react';

export function AssetLinks(props) {
  return <div {...props} className="grid gap-10"></div>;
}

export function AssetLink({ href }) {
  let children;

  if (href.includes('figma.com')) {
    children = 'Figma';
  }

  return <a href={href}>{children}</a>;
}
