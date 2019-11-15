import { getFile } from './getFile';
import { checkForFile } from './checkForFile';
import { userMegaDockerFolder } from '../../globals/userMegaDockerFolder';

it(`should download a URL to a file`, () => {
  expect(checkForFile(`./`, `downloadedfile.html`)).toBeFalsy;
  const downloadURL: URL = new URL(`https://www.google.com`);
  getFile(`./`, `downloadedfile`, `html`, downloadURL);
  expect(checkForFile(`./`, `downloadedfile.html`)).toBeTruthy;
});
