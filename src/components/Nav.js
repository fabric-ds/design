import React from 'react';
import Link from 'next/link';

export function Nav() {
  return (
    <nav className="bg-blueGray-100 px-24">
      <h1 className="grid gap-8 grid-flow-col justify-start items-center my-24">
        <img src="/FINN-logo-icon.svg" height="40" width="80" alt="FINN logo" />
        <span className="text-lg">Fabric</span>
      </h1>
      <ul>
        <li>
          <A alt="Home" href="/">
            Home
          </A>
        </li>
        <li>
          <div>
            <ul>
              <li>
                <A href="/color">Color</A>
              </li>
              <li>
                <A href="/icons">Icons</A>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

const A = ({ href, ...props }) => (
  <Link href={href}>
    <a {...props} />
  </Link>
);
