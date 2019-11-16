import { saveFile } from './saveFile';
import { checkForFile } from './checkForFile';
import { deleteFile } from './deleteFile';
it(`should see no file`, () => {
  expect(checkForFile('.', 'testfilename.txt')).toBeFalsy;
  saveFile(
    `./`,
    `testfilename`,
    `txt`,
    `blah, blah, blah what the hell does this file even say?`
  );
  expect(checkForFile(`.`, `testfilename.txt`)).toBeTruthy;
  deleteFile(`.`, `testfilename.txt`);
  expect(checkForFile(`.`, `testfilename.txt`)).toBeFalsy;
});
