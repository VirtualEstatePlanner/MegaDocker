import { checkForFile } from './checkForFile';
import { deleteFile } from './deleteFile';
import { getFile } from './getFile';
import { doesNotReject } from 'assert';

it(`should download a URL to a file`, async () => {
  expect(checkForFile(`${process.env.PWD}`, `downloadedfile.md`)).toBeFalsy;
  const downloadURL: string = `https://raw.githubusercontent.com/VirtualEstatePlanner/CRATE/master/README.md`;
  try {
    await getFile(`${process.env.PWD}`, `downloadedfile.md`, downloadURL);
  } catch (e) {
    expect(e).toMatch('error');
  }
  expect(checkForFile(`${process.env.PWD}`, `downloadedfile.md`)).toBeTruthy;
  deleteFile(`${process.env.PWD}`, `downloadedfile.md`);
  expect(checkForFile(`${process.env.PWD}`, `downloadedfile.md`)).toBeFalsy;
});
