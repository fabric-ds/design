import React from 'react';
import Link from 'next/link';

import classes from './Nav.module.css';

export function Nav() {
  return (
    <nav className={classes.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/color">
        <a>Color</a>
      </Link>
    </nav>
  );
}
