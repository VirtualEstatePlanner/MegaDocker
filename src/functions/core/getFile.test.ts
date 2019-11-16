import { getFile } from './getFile';
import { checkForFile } from './checkForFile';

it(`should download a URL to a file`, () => {
  console.log(checkForFile(`./`, `downloadedfile.html`));
  expect(checkForFile(`./`, `downloadedfile.html`)).toBeFalsy;
  const downloadURL: URL = new URL(`https://www.google.com`);
  getFile(`./`, `downloadedfile`, `html`, downloadURL);
  console.log(checkForFile(`./`, `downloadedfile.html`));
  expect(checkForFile(`./`, `downloadedfile.html`)).toBeTruthy;
});
