import React from 'react';
import Link from 'next/link';

import classes from './Nav.module.css';

export function Nav() {
  return (
    <nav className={classes.sidenav}>
      <div className={classes.sidenav__heading}>[Tottallyawsome logo]</div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
          <div className={classes.multilevel}>
            <ul>
              <li>
                <Link href="/">
                  <a>Principles</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Changelog</a>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href="/">
            <a>Foundation</a>
          </Link>
          <div className={classes.multilevel}>
            <ul>
              <li>
                <Link href="/color">
                  <a>Color</a>
                </Link>
              </li>
              <li>
                <Link href="/icons">
                  <a>Icons</a>
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
