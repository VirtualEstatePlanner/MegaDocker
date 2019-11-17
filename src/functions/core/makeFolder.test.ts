import { makeFolder } from './makeFolder';
import { checkForFile } from './checkForFile';
import { deleteFolder } from './deleteFolder';

it(`should create a folder`, () => {
  console.log(`checking for folder ${process.env.PWD}/testdirectyory`);
  console.log(checkForFile(`${process.env.PWD}`, `testdirectory`));
  expect(checkForFile(`${process.env.PWD}`, `testdirectory`)).toBeFalsy;
  console.log(`checking for folder ${process.env.PWD}/testdirectyory`);
  console.log(checkForFile(`${process.env.PWD}`, `testdirectory`));
  makeFolder(`${process.env.PWD}`, `testdirectory`);
  expect(checkForFile(`${process.env.PWD}`, `testdirectory`)).toBeTruthy;
  console.log(`checking for folder ${process.env.PWD}/testdirectyory`);
  console.log(checkForFile(`${process.env.PWD}`, `testdirectory`));
  deleteFolder(`${process.env.PWD}`, `testdirectory`);
  expect(checkForFile(`${process.env.PWD}`, `testdirectory`)).toBeFalsy;
});
