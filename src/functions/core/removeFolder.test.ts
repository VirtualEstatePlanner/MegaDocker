import { makeFolder } from './makeFolder';
import { checkForFile } from './checkForFile';
import { removeFolder } from './removeFolder';

it(`should delete a folder`, () => {
  expect(checkForFile(`./`, `testdirectory`)).toBeFalsy;
  makeFolder(`./`, `testdirectory`);
  expect(checkForFile(`./`, `testdirectory`)).toBeTruthy;
  removeFolder(`./`, `testdirectory`);
  expect(checkForFile(`./`, `testdirectory`)).toBeFalsy;
});
