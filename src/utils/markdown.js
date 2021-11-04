import { TableOfContents } from '../components/TableOfContents';
import { Bad } from '../components/Bad';
import { Good } from '../components/Good';
import { Fig } from '../components/Fig';
import { Guideline } from '../components/Guideline';
import { AssetLink, AssetLinks } from '../components/AssetLink';
import { CodeBlock } from '../components/CodeBlock';

export const components = {
  TableOfContents,
  AssetLink,
  AssetLinks,
  Bad,
  Good,
  Guideline,
  Fig,
  pre: (props) => <div {...props} />,
  code: (props) => <CodeBlock {...props} />,
};
