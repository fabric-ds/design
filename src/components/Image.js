import * as React from 'react';

const isProd = process.env.NODE_ENV === 'production';

/**
 * Image component with base path support for static files.
 *
 * The base path defined in next.config.js doesn't affect static files in the public folder.
 */
export default function Image({ src, ...props }) {
  if (src && isProd && src.startsWith('/')) {
    src = '/fabric-design' + src;
  }

  return <img src={src} {...props} />;
}
