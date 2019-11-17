import { deleteFile } from './deleteFile';
import { saveFile } from './saveFile';
import { checkForFile } from './checkForFile';

it(`should delete a file`, () => {
  expect(checkForFile(`${process.env.PWD}`, `sometestfile.txt`)).toBeFalsy;
  saveFile(
    `${process.env.PWD}`,
    `sometestfile`,
    `txt`,
    `sometestfile needs contents`
  );
  expect(checkForFile(`${process.env.PWD}`, `sometestfile.txt`)).toBeTruthy;
  deleteFile(`${process.env.PWD}`, `./sometestfile.txt`);
  expect(checkForFile(`${process.env.PWD}`, `sometestfile.txt`)).toBeFalsy;
});
