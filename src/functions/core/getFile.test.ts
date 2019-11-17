import { getFile } from './getFile';
import { checkForFile } from './checkForFile';
import { deleteFile } from './deleteFile';
import { run } from './run';

it(`should download a URL to a file`, () => {
  console.log(`checking for 'downloadedfile.html' in ${process.env.PWD}`);
  console.log(checkForFile(`${process.env.PWD}`, `downloadedfile.html`));
  expect(checkForFile(`${process.env.PWD}`, `downloadedfile.html`)).toBeFalsy;
  const downloadURL: URL = new URL(
    `https://github.com/VirtualEstatePlanner/MD/blob/master/README.md`
  );
  console.log(`downloading 'downloadedfile.html' to ${process.env.PWD}`);
  getFile(`${process.env.PWD}`, `downloadedfile`, `html`, downloadURL);
  run(`sleep 15`);
  console.log(`checking for 'downloadedfile.html' in ${process.env.PWD}`);
  expect(checkForFile(`${process.env.PWD}`, `downloadedfile.html`)).toBeTruthy;
  console.log(checkForFile(`${process.env.PWD}`, `downloadedfile.html`));
  deleteFile(`${process.env.PWD}`, `downloadedfile.html`);
  console.log(`checking for 'downloadedfile.html' in ${process.env.PWD}`);
  expect(checkForFile(`${process.env.PWD}`, `downloadedfile.html`)).toBeFalsy;
});
