import React from "react";

const link = (title) => `#${title.toLowerCase().replaceAll(' ', '-')}`;

export class TableOfContents extends React.Component {
  constructor() {
    super();
    this.state = {
      toc: [],
    };
  }

  componentDidMount() {
    const toc = Array.from(document.querySelectorAll("main > h2")).map(
      (h2) => h2.innerText
    );
    this.setState({ toc });
  }

  render() {
    return this.state.toc.length ? (
      <nav className="toc">
        <h2>Table Of Contents</h2>
        <ul>
          {this.state.toc.map((title, i) => (
            <li key={title}>
              <a href={link(title)}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    ) : (
      ''
    );
  }
}
