import React, { useEffect, useState } from 'react';

const slugify = (title) => `${title.toLowerCase().replaceAll(' ', '-')}`;

export function TableOfContents() {
  const [elements, setElements] = useState([]);
  const [toc, setToc] = useState([]);

  useEffect(() => {
    if (elements.length) return;
    setElements(document.querySelectorAll('main > h2'));
  });

  useEffect(() => {
    if (toc.length) return;

    const mappedElements = [...elements].map((el) => {
      const text = el.childNodes[0].nodeValue;
      el.id = slugify(text);
      el.className = `title ${el.className}`;
      return text;
    });

    setToc(mappedElements);
  }, [elements]);

  return toc.length ? (
    <nav className="mt-20">
      <h2>Table Of Contents</h2>
      <ul>
        {toc.map((title, i) => (
          <li key={title}>
            <a href={`#${slugify(title)}`}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    ''
  );
}
