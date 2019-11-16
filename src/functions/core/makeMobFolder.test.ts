import { checkForFile } from './checkForFile';
import { makeFolder } from './makeFolder';
import { deleteFolder } from './deleteFolder';

it(`should create an example mob folder`, () => {
  const pathTo: string = `./`;
  const folderName: string = `sometestfolder`;
  expect(checkForFile(pathTo, folderName)).toBeFalsy;
  makeFolder(pathTo, folderName);
  expect(checkForFile(pathTo, folderName)).toBeTruthy;
  deleteFolder(pathTo, folderName);
  expect(checkForFile(pathTo, folderName)).toBeFalsy;
});
