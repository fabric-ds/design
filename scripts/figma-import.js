#!/usr/bin/env node
const ora = require('ora');
const fs = require('fs-extra');
const path = require('path');
const fetch = require('node-fetch');
const prompts = require('prompts');
const { promisify } = require('util');
const { pipeline } = require('stream');
const { createWriteStream } = require('fs');
const slugify = require('@sindresorhus/slugify');

const streamPipeline = promisify(pipeline);

// The figma project where we can find the images
const FIGMA_PROJECT_ID = 'GS0SUFtIEC0qnrXZjPlbZv';

// The id of the page where the images are found
const CANVAS_ID = '2:15';

// Where we store the Figma token
const FIGMA_TOKEN_PATH = path.join(__dirname, '../', '.FIGMA_TOKEN');

(async function main() {
  const spinner = ora(
    'Reading Figma access token from ' + FIGMA_TOKEN_PATH
  ).start();

  let figmaToken = await readTokenFromDisk();

  if (figmaToken) {
    spinner.succeed('Using Figma access token from ' + FIGMA_TOKEN_PATH);
  } else {
    spinner.warn('No Figma access token found');

    const tokenPrompt = await prompts({
      type: 'text',
      name: 'figmaToken',
      message:
        'Enter your Figma access token (https://www.figma.com/developers/api#access-tokens)',
    });

    figmaToken = tokenPrompt.figmaToken;

    const { saveToken } = await prompts({
      type: 'confirm',
      name: 'saveToken',
      message: 'Would you like to save the token?',
    });

    if (saveToken) {
      await writeTokenToDisk(figmaToken);
      spinner.succeed('Saved token to ' + FIGMA_TOKEN_PATH);
    }
  }

  spinner.start('Loading Figma project');

  let project;
  try {
    project = await fetchProject(figmaToken);
    spinner.succeed();
  } catch (e) {
    spinner.fail('Unable to load Figma project: ' + e.message);
    return;
  }

  let images;
  try {
    spinner.start('Parsing Figma project');
    images = filterImages(project);
    spinner.succeed();
  } catch (e) {
    spinner.fail('Unable to parse images from Figma project: ' + e.message);
    return;
  }

  let urls;
  try {
    spinner.start(`Found ${images.length} images. Getting download URLs`);
    urls = await fetchImageUrls(images, figmaToken);
    spinner.succeed();
  } catch (e) {
    spinner.fail('Unable to get image URLs: ' + e.message);
    return;
  }

  let count = 0;
  spinner.start(`Downloading images: ${count}/${images.length}`);

  await Promise.all(
    Object.entries(urls.images).map(async ([id, url]) => {
      const imageName = images.find((i) => i.id === id).name;

      await downloadSvgImage({ imageName, url });

      count = count + 1;
      spinner.text = `Downloading images: ${count}/${images.length}`;
    })
  );

  spinner.succeed();

  spinner.succeed(`Sucessfully downloaded ${images.length} images!`);
})();

/**
 * Get the Figma project
 */
async function fetchProject(figmaToken) {
  const res = await fetch(
    `https://api.figma.com/v1/files/${FIGMA_PROJECT_ID}/nodes/?ids=${CANVAS_ID}`,
    {
      headers: {
        'X-FIGMA-TOKEN': figmaToken,
      },
    }
  );

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.err);
  }

  return json;
}

/**
 * Get download urls for the images
 *
 * @returns { images: {[id]: string}};
 */
async function fetchImageUrls(images, figmaToken) {
  const url = new URL(`https://api.figma.com/v1/images/${FIGMA_PROJECT_ID}/`);

  url.searchParams.set('ids', images.map((i) => i.id).join(','));
  url.searchParams.set('format', 'svg');

  const res = await fetch(url, {
    headers: {
      'X-FIGMA-TOKEN': figmaToken,
    },
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.err);
  }

  return json;
}

/**
 * Get the SVG image
 * - Note: this was PNG, but the quality was _awful_
 */
async function downloadSvgImage({ imageName, url }) {
  const res = await fetch(url);
  //   const svg = await res.blob();

  const name = slugify(imageName);

  const path = `${__dirname}/../public/figma/${name}.svg`;

  return streamPipeline(res.body, createWriteStream(path));
}

/**
 * Get the images in the Figma Project
 *
 * @returns Array<{id: string, name: string}>
 */
function filterImages(project) {
  const canvas = project.nodes[CANVAS_ID].document;

  const imageNodes = canvas.children;

  const images = imageNodes.map((i) => ({ name: i.name, id: i.id }));

  return images;
}

function writeTokenToDisk(token) {
  return fs.outputFile(FIGMA_TOKEN_PATH, token, 'utf8');
}

/**
 * @returns {String} token
 */
async function readTokenFromDisk() {
  try {
    const token = await fs.readFile(FIGMA_TOKEN_PATH, 'utf8');
    return token;
  } catch {
    return '';
  }
}
