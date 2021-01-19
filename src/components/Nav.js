import React from 'react';
import Link from 'next/link';
import Image from './Image';
import classes from '../components/Nav.module.css';

export function Nav() {
  return (
  
    <nav className={classes.sidenav} >
      <h1 className="grid gap-8 grid-flow-col justify-start items-center my-24">
        <Image
          src="/FINN-logo-icon.svg"
          height="40"
          width="80"
          alt="FINN logo"
        />
        <span className="text-lg">Fabric</span>
      </h1>
      <ul>
        <li>
          <A href="/">
            Fabric
          </A>
        </li>
        <li>
          <A href="/">
            Foundation
          </A>
          <div>
            <ul className={classes.multilevel}>
              <li>
                <A href="/color">Color</A>
              </li>
              <li>
                <A href="/icons">Icons</A>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <A href="/">
            Content
          </A>
          <ul className={classes.multilevel}>
            <li>
                <A href="/screenreaders">ScreenReaders</A>
            </li>
          </ul>
        </li>
        <li>
          <A href="/">
            Tools and resources
          </A>
          <ul className={classes.multilevel}>
            <li><A href="/">Fabric Elements</A></li>
            <li><A href="/">Fabric React</A></li>
            <li><A href="/">Fabric Vue</A></li>
          </ul>
        </li>
      </ul>
    </nav>
 
  );
}

const A = ({ href, ...props }) => (
  <Link href={href}>
    <a className="py-4 px-12 rounded-md relative inline-flex items-center box-border w-full border border-solid border-transparent no-underline break-words cursor-pointer bg-transparent text-gray-700 hover:bg-gray-100 hover:border-gray-200" {...props} />
  </Link>
);

