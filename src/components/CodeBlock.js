import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CodeBlock = (props) => {
  return (
    <SyntaxHighlighter language={props.className?.replace(/language-/, '')} style={nord}>
      {props.children}
    </SyntaxHighlighter>
  );
};
