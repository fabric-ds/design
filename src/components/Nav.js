import React from 'react';
import Link from 'next/link';
import Image from './Image';
import classes from '../components/Nav.module.css';

export function Nav() {
  return (
    <nav className={classes.sidenav}>
      <h1 className="grid gap-8 grid-flow-col justify-start items-center my-24">
        <Image
          src="/FINN-logo-icon.svg"
          height="40"
          width="80"
          alt="FINN logo"
        />
        <span className="text-22">Fabric</span>
      </h1>
      <ul>
        <li>
          <A href="/">Fabric</A>
        </li>
        <li>
          <A href="/">Foundation</A>
          <div>
            <ul className={classes.multilevel}>
            <li>
                <A href="/typography">Typography</A>
              </li>
              <li>
                <A href="/color">Color</A>
              </li>
              <li>
                <A href="/iconography">Iconography</A>
              </li>
            </ul>
          </div>
        </li>
        
        <li>
          <A href="/">Layout</A>
          <div>
            <ul className={classes.multilevel}>
              <li>
                Pageholder
              </li>
              <li>
                Grid
              </li>
              <li>
                Panel
              </li>
              <li>
                <A href="/modal">modal</A>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <A href="/">Actions</A>
          <div>
            <ul className={classes.multilevel}>
            <li>
                <A href="/button">Button</A>
              </li>
              <li>
                 <A href="/link">Link</A>
              </li>
            
            </ul>
            
          </div>
        </li>
        <li>
          <A href="/">Navigation</A>
          <div>
            <ul className={classes.multilevel}>
            <li>
                <A href="/breadcrumbs">Breadcrumbs</A>
              </li>
              <li>
                <A href="/status-ribbon">Status ribbon</A>
              </li>
            </ul>
            
          </div>
        </li>
        <li>
          <A href="/">Data structure</A>
          <div>
            <ul className={classes.multilevel}>
            <li>
                <A href="/lists">Lists</A>
              </li>
              <li>
                <A href="/description-lists">Description lists</A>
              </li>
              <li>
                <A href="/data-tables">Data tables</A>
              </li>
            </ul>
            
          </div>
        </li>
        <li>
          <A href="/">Forms</A>
          <div>
            <ul className={classes.multilevel}>
              <li>
                <A href="/checkbox">Checkbox</A>
              </li>
              <li>
                <A href="/input">Input</A>
              </li>
              <li>
                <A href="/radio">Radio</A>
              </li>
              <li>
                <A href="/search">Search</A>
              </li>
              <li>
                <A href="/select">Select</A>
              </li>
              <li>
                <A href="/slider">Slider</A>
              </li>
              <li>
                <A href="/text-area">Text area</A>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <A href="/">Content</A>
          <ul className={classes.multilevel}>
            <li>
              <A href="/screenreaders">Screen readers</A>
            </li>
          </ul>
        </li>
        <li>
          <A href="/">Tools and resources</A>
          <ul className={classes.multilevel}>
            <li>
              <A href="/icons">Icons</A>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

const A = ({ href, ...props }) => (
  <Link href={href}>
    <a
      className="py-4 px-12 rounded-8 relative inline-flex items-center box-border w-full border border-solid border-transparent no-underline break-words cursor-pointer bg-transparent text-gray-700 hover:bg-gray-100 hover:border-gray-200"
      {...props}
    />
  </Link>
);
