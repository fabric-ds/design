export const CodeBlock = (props) => {
  return (
    <SyntaxHighlighter language={props.className?.replace(/language-/, '')}>
      {props.children}
    </SyntaxHighlighter>
  );
};
