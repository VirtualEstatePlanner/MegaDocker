import { makeFolder } from './makeFolder';
import { checkForFile } from './checkForFile';
import { deleteFolder } from './deleteFolder';

it(`should delete a folder`, () => {
  console.log(`checking for folder 'testdirectory' in ${process.env.PWD}`);
  console.log(checkForFile(`${process.env.PWD}`, `testdirectory`));
  expect(checkForFile(`${process.env.PWD}`, `testdirectory`)).toBeFalsy;
  console.log(`making folder 'testdirectory' in ${process.env.PWD}`);
  makeFolder(`${process.env.PWD}`, `testdirectory`);
  console.log(`checking for folder 'testdirectory' in ${process.env.PWD}`);
  console.log(checkForFile(`${process.env.PWD}`, `testdirectory`));
  expect(checkForFile(`${process.env.PWD}`, `testdirectory`)).toBeTruthy;
  console.log(`deleting folder 'testdirectory' from ${process.env.PWD}`);
  deleteFolder(`${process.env.PWD}`, `testdirectory`);
  console.log(`checking for folder 'testdirectory' in ${process.env.PWD}`);
  console.log(checkForFile(`${process.env.PWD}`, `testdirectory`));
  expect(checkForFile(`${process.env.PWD}`, `testdirectory`)).toBeFalsy;
});
