import { TableOfContents } from '../components/TableOfContents';
import { Bad } from '../components/Bad';
import { Good } from '../components/Good';
import { Fig } from '../components/Fig';
import { Guideline } from '../components/Guideline';
import { AssetLink, AssetLinks } from '../components/AssetLink';

export const shortcodes = {
  TableOfContents,
  AssetLink,
  AssetLinks,
  Bad,
  Good,
  Guideline,
  Fig,
  h1: (props) => <h1 className="mt-12" {...props} />,
  h2: (props) => <h2 className="mt-12" {...props} />,
  h3: (props) => <h3 className="mt-12" {...props} />,
  h4: (props) => <h4 className="mt-12" {...props} />,
  h5: (props) => <h5 className="mt-12" {...props} />,
  h6: (props) => <h6 className="mt-12" {...props} />,
  p: (props) => <p className="pb-16" {...props} />,
  ul: (props) => <ul className="pb-16 list-disc list-inside" {...props} />,
  ol: (props) => <ol className="pb-16 list-decimal list-inside" {...props} />,
  dl: (props) => <dl className="pb-16" {...props} />,
  li: (props) => <li className="pb-4" {...props} />,
  table: (props) => <table className="mb-16 p-0 w-full" {...props} />,
  tr: (props) => (
    <tr className="border-t border-gray-300 bg-white m-0 p-0" {...props} />
  ),
  th: (props) => (
    <th
      className="border border-gray-300 bg-white m-0 py-6 px-14 text-left"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border border-gray-300 bg-white m-0 py-6 px-14 text-left"
      {...props}
    />
  ),
  pre: (props) => <pre className="pb-16" {...props} />,
  main: (props) => <main className="break-words" {...props} />,
  strong: (props) => <strong className="strong" {...props} />,
  hr: (props) => (
    <hr className="border-none text-gray-300 h-4 p-0" {...props} />
  ),
};
