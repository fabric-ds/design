import React from "react";
import markdownIt from "markdown-it";

const md = markdownIt({
    html:         true,        // Enable HTML tags in source
    xhtmlOut:     true,        // Use '/' to close single tags (<br />).
    breaks:       true,
});

function PostTemplate(props) {
  React.useEffect(
    () =>
      Promise.all([
        import("../components/guideline-element"),
        import("../components/example-image"),
        import("../components/example-description"),
      ]),
    []
  );
  return <div dangerouslySetInnerHTML={{ __html: props.content }}></div>;
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  const content = await import(`./${slug}.md`);
  return { content: md.render(content.default) };
};

export default PostTemplate;
