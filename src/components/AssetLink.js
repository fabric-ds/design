import * as React from 'react';

export function AssetLinks(props) {
  return <div {...props} className="my-16 max-w-max"></div>;
}

export function AssetLink({ href }) {
  let children;
  let Logo;
 
  if (href.includes('figma.com')) {
    children = 'View in Figma';
    Logo = FigmaLogo;
  }
  else if (href.includes('figma.com')) {
    children = 'View in Fabric React';
    Logo = ReactLogo;
  }
  else if (href.includes('figma.com')) {
    children = 'View in Fabric Vue';
    Logo = VueLogo;
  }

  return (
    <a
      href={href}
      className="border rounded-4 inline-flex items-center align-middle no-underline hover:no-underline text-gray-800"
    >
      <div className="w-48 h-48 p-8 border-r flex">
        <Logo />
      </div>
      <div className="px-16">{children}</div>
    </a>
  );
}

const FigmaLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 300"
    width="32"
    height="32"
  >
    <path d="M50 300a50 50 0 0050-50v-50H50a50 50 0 000 100z" fill="#0acf83" />
    <path
      d="M0 150a50 50 0 0150-50h50v100H50a50 50 0 01-50-50z"
      fill="#a259ff"
    />
    <path d="M0 50A50 50 0 0150 0h50v100H50A50 50 0 010 50z" fill="#f24e1e" />
    <path d="M100 0h50a50 50 0 010 100h-50V0z" fill="#ff7262" />
    <path d="M200 150a50 50 0 11-100 0 50 50 0 01100 0z" fill="#1abcfe" />
  </svg>
);
const ReactLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 300"
    width="32"
    height="32"
  >
    <path d="M50 300a50 50 0 0050-50v-50H50a50 50 0 000 100z" fill="#0acf83" />
    <path
      d="M0 150a50 50 0 0150-50h50v100H50a50 50 0 01-50-50z"
      fill="#a259ff"
    />
    <path d="M0 50A50 50 0 0150 0h50v100H50A50 50 0 010 50z" fill="#f24e1e" />
    <path d="M100 0h50a50 50 0 010 100h-50V0z" fill="#ff7262" />
    <path d="M200 150a50 50 0 11-100 0 50 50 0 01100 0z" fill="#1abcfe" />
  </svg>
);
const VueLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 300"
    width="32"
    height="32"
  >
    <path d="M50 300a50 50 0 0050-50v-50H50a50 50 0 000 100z" fill="#0acf83" />
    <path
      d="M0 150a50 50 0 0150-50h50v100H50a50 50 0 01-50-50z"
      fill="#a259ff"
    />
    <path d="M0 50A50 50 0 0150 0h50v100H50A50 50 0 010 50z" fill="#f24e1e" />
    <path d="M100 0h50a50 50 0 010 100h-50V0z" fill="#ff7262" />
    <path d="M200 150a50 50 0 11-100 0 50 50 0 01100 0z" fill="#1abcfe" />
  </svg>
);
