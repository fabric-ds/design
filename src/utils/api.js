import path, { join } from 'path';
import fs from 'fs';

const directory = join(process.cwd(), 'guides/components');

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const path = join(directory, `${realSlug}.mdx`);
  const content = fs.readFileSync(path, 'utf-8');
  return content;
}

export function getDocSlugs() {
  const filenames = fs.readdirSync(path.resolve('guides/components'));
  return filenames.map((name) => name.replace('.mdx', ''));
}
