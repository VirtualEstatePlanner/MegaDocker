import { makeFolder } from './makeFolder';
import { checkForFile } from './checkForFile';
import { deleteFolder } from './deleteFolder';

it(`should create a folder`, () => {
  expect(checkForFile(`${process.env.PWD}`, `testdirectory`)).toBeFalsy;
  makeFolder(`${process.env.PWD}`, `testdirectory`);
  expect(checkForFile(`${process.env.PWD}`, `testdirectory`)).toBeTruthy;
  deleteFolder(`${process.env.PWD}`, `testdirectory`);
  expect(checkForFile(`${process.env.PWD}`, `testdirectory`)).toBeFalsy;
});
