# [Fabric Design](https://opensource.finn.no/fabric-design)

## Development

Start the development server, with hot reloading:

```sh
npm run dev
```

## Documentation images

The examples images used on this site are maintained in this [Figma project](https://www.figma.com/file/xsiFr7BReeN66qqrdqnV5C/FINN-Fabric-Design-System?node-id=27%3A67).

There is a [script](./scripts/figma-import.js) that extracts the images and stores them in [the static folder](./public/figma/). Then you can refer them then using `<img>` tags with relative paths.

Whenever a Github build runs, the import script will be run and the imported files will then be included in the final docs build. For local development, run the `npm run import` script as needed. You will need a Figma token to do so as described in the following section.

### Figma access token

If you are running the import script for the first time, it will prompt your for a [Figma access token](https://www.figma.com/developers/api#access-tokens). The token is is required to access Figma's API. It can be generated on your Figma account settings page.

The import script may store the token to a local file, so you won't have to supply the token again on subsequent runs.

### Import script

To update the images, run the following script. If it has a valid Figma access token (see above), it will proceed to download all the image files into the `public/figma` folder

```sh
npm run import
```

### Troubleshooting

#### Auth

If the scripts authentication issues, you could try to create a new access token and delete the local file `.FIGMA_TOKEN` before running the script again.

#### Figma project structure

The script is probably not resilient to changes in the structure of the Figma project. Changes there will probably require an update of the import script.
