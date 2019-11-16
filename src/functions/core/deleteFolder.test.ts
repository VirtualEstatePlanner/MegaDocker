import { makeFolder } from './makeFolder';
import { checkForFile } from './checkForFile';
import { deleteFolder } from './deleteFolder';

it(`should delete a folder`, () => {
  expect(checkForFile(`./`, `testdirectory`)).toBeFalsy;
  makeFolder(`./`, `testdirectory`);
  expect(checkForFile(`./`, `testdirectory`)).toBeTruthy;
  deleteFolder(`./`, `testdirectory`);
  expect(checkForFile(`./`, `testdirectory`)).toBeFalsy;
});
