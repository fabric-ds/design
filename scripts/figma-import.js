#!/usr/bin/env node

/**
 * What this script does:
 *
 * 1. Fetch all pages (canvases) for a project
 * 2. Iterate over pages and fetch all nodes that are marked for export
 * 3. Fetch all SVG image URLs for all these nodes
 * 4. Fetch the SVGs from the URLs and save them to disk
 */

const ora = require("ora");
const fs = require("fs-extra");
const path = require("path");
const fetch = require("node-fetch");
const prompts = require("prompts");
const { promisify } = require("util");
const { pipeline } = require("stream");
const { createWriteStream } = require("fs");
const slugify = require("@sindresorhus/slugify");

const streamPipeline = promisify(pipeline);

// The figma project where we can find the images
const FIGMA_PROJECT_ID = "GS0SUFtIEC0qnrXZjPlbZv";

// Where we store the Figma token
let { FIGMA_TOKEN } = process.env;
const FIGMA_TOKEN_PATH = path.join(__dirname, "../", ".FIGMA_TOKEN");

(async function main() {
  const spinner = ora("Begin Figma image importer").start();

  if (!FIGMA_TOKEN) {
    spinner.text = "Reading Figma access token from " + FIGMA_TOKEN_PATH;

    FIGMA_TOKEN = await readTokenFromDisk();

    if (FIGMA_TOKEN) {
      spinner.succeed("Using Figma access token from " + FIGMA_TOKEN_PATH);
    } else {
      spinner.warn("No Figma access token found");

      const tokenPrompt = await prompts({
        type: "text",
        name: "figmaToken",
        message:
          "Enter your Figma access token (https://www.figma.com/developers/api#access-tokens)",
      });

      FIGMA_TOKEN = tokenPrompt.figmaToken;

      const { saveToken } = await prompts({
        type: "confirm",
        name: "saveToken",
        message: "Would you like to save the token?",
      });

      if (saveToken) {
        await writeTokenToDisk(FIGMA_TOKEN);
        spinner.succeed("Saved token to " + FIGMA_TOKEN_PATH);
      }
    }
  }

  const fetchOptions = { headers: { "X-FIGMA-TOKEN": FIGMA_TOKEN } };

  try {
    // Fetch files for a project and then filter out everything that isn't
    // of type CANVAS. In Figma speak, a CANVAS node is a "page".
    spinner.start(`Retrieving files for project "${FIGMA_PROJECT_ID}"`);
    const filesResult = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_PROJECT_ID}`,
      fetchOptions
    );
    const files = await filesResult.json();

    const canvasIds = files.document.children
      .filter((child) => child.type === "CANVAS")
      .map((child) => child.id);
    spinner.succeed(
      `Retrieved ${canvasIds.length} pages for project ${FIGMA_PROJECT_ID}`
    );

    // Use canvas ids (page ids) to fetch all nodes for all pages and then
    // join them all into a single array of nodes filtering out any nodes
    // that having been marked for export (presence of an exportSettings property)
    spinner.start(`Retrieving export file nodes across all pages`);
    const nodesUrl = new URL(
      `https://api.figma.com/v1/files/${FIGMA_PROJECT_ID}/nodes`
    );
    nodesUrl.searchParams.set("ids", canvasIds.join(","));
    const nodesResult = await fetch(nodesUrl, fetchOptions);
    const fileNodes = await nodesResult.json();

    const exportNodes = Object.values(fileNodes.nodes)
      .flatMap((node) => node.document.children)
      .filter((child) => !!child.exportSettings);
    spinner.succeed(
      `Retrieved ${exportNodes.length} total export nodes across all pages`
    );

    // Fetch a list of URLs to download the nodes from in SVG format.
    spinner.start(`Retrieving image URLs for nodes.`);
    const imagesUrl = new URL(
      `https://api.figma.com/v1/images/${FIGMA_PROJECT_ID}/`
    );
    imagesUrl.searchParams.set("ids", exportNodes.map((i) => i.id).join(","));
    imagesUrl.searchParams.set("format", "svg");
    const imageUrlResult = await fetch(imagesUrl, fetchOptions);
    const imageUrls = await imageUrlResult.json();
    spinner.succeed(
      `Retrieved ${Object.entries(imageUrls.images).length} image Urls`
    );

    // Download all SVGs from the URLs we fetched in the previous step
    let count = 0;
    spinner.start(`Downloading images: ${count}/${exportNodes.length}`);
    await Promise.all(
      Object.entries(imageUrls.images).map(async ([id, url]) => {
        const imageName = exportNodes.find((i) => i.id === id).name;
        await downloadSvgImage({ imageName, url });
        count = count + 1;
        spinner.text = `Downloading images: ${count}/${exportNodes.length}`;
      })
    );
    spinner.succeed(`Sucessfully downloaded ${exportNodes.length} images!`);
  } catch (err) {
    spinner.fail();
    console.log(err.message);
  }
})();

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
// function filterImages(project) {
//   const canvas = project.nodes[CANVAS_ID].document;

//   const imageNodes = canvas.children;

//   const images = imageNodes.map((i) => ({ name: i.name, id: i.id }));

//   return images;
// }

function writeTokenToDisk(token) {
  return fs.outputFile(FIGMA_TOKEN_PATH, token, "utf8");
}

/**
 * @returns {String} token
 */
async function readTokenFromDisk() {
  try {
    const token = await fs.readFile(FIGMA_TOKEN_PATH, "utf8");
    return token;
  } catch {
    return "";
  }
}
