import path, { join } from 'path';
import fs from 'fs';

const docPath = 'docs/components';
const guidePath = 'docs/guides';
const directory = join(process.cwd(), docPath);

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const path = join(directory, `${realSlug}.mdx`);
  const content = fs.readFileSync(path, 'utf-8');
  return content;
}

export function getGuideContentBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const path = join(guidePath, `${realSlug}.mdx`);
  const content = fs.readFileSync(path, 'utf-8');
  return content;
}

export function getDocSlugs() {
  const filenames = fs.readdirSync(path.resolve(docPath));
  return filenames.map((name) => name.replace('.mdx', ''));
}
