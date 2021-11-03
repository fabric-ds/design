import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export const CodeBlock = (props) => {
  return (
    <SyntaxHighlighter language={props.className?.replace(/language-/, '')}>
      {props.children}
    </SyntaxHighlighter>
  );
};
