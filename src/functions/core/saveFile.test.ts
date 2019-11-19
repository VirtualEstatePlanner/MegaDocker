import { saveFile } from './saveFile';
import { checkForFile } from './checkForFile';
import { deleteFile } from './deleteFile';
it(`should save a file to disk`, () => {
  expect(checkForFile(`${process.env.PWD}`, `testfilename.txt`)).toBeFalsy;
  saveFile(
    `${process.env.PWD}`,
    `testfilename`,
    `txt`,
    `so what the hell does this file even say?`
  );
  expect(checkForFile(`${process.env.PWD}`, `testfilename.txt`)).toBeTruthy;
  deleteFile(`${process.env.PWD}`, `testfilename.txt`);
  expect(checkForFile(`${process.env.PWD}`, `testfilename.txt`)).toBeFalsy;
});
