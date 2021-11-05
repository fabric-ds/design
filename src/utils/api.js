import path, { join } from 'path';
import fs from 'fs';

const docPath = 'docs/components';
export const guidePath = 'docs/guides';
const directory = join(process.cwd(), docPath);

// Can probably generalize these functions and take params to switch between doc and guide

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const path = join(directory, `${realSlug}.mdx`);
  const content = fs.readFileSync(path, 'utf-8');
  return content;
}

export function getDocSlugs() {
  const filenames = fs.readdirSync(path.resolve(docPath));
  return filenames.map((name) => name.replace('.mdx', ''));
}

export function getGuideContentBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const path = join(guidePath, `${realSlug}.mdx`);
  const content = fs.readFileSync(path, 'utf-8');
  return content;
}
