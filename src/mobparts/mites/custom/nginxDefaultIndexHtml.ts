import { ICustomMite } from '../../../interfaces/ICustomMite';

export const nginxDefaultIndexHtml: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 3008,
  miteFile: {
    path: `nginx/pages`,
    name: `index`,
    extension: `html`,
    contents: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Asap"
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>MEGADocker</title>
  </head>
  <body>
    <div id="root">
      <h1>
        Welcome to MegaDocker!
      </h1>
      <p>
        You should populate your /nginx/pages folder inside of your mob folder with some actual content.
      </p>
    </div>
  </body>
</html>
    `
  }
};
