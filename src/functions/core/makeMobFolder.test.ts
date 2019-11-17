import { checkForFile } from './checkForFile';
import { makeFolder } from './makeFolder';
import { deleteFolder } from './deleteFolder';
import { IMob } from '../../classes/IMob';
import { allManikins } from '../../globals/allManikins';

it(`should create an example mob folder`, () => {
  const testMob: IMob = {
    mobManikins: allManikins,
    mobName: `Our Testing Mob`,
    mobMemories: []
  };
  const pathTo: string = `${process.env.PWD}`;
  const folderName: string = `sometestfolder`;
  console.log(`checking for folder '${folderName}' in directory '${pathTo}'`);
  console.log(checkForFile(pathTo, folderName));
  expect(checkForFile(pathTo, folderName)).toBeFalsy;
  console.log(`making folder '${folderName}' in directory '${pathTo}'`);
  makeFolder(pathTo, folderName);
  console.log(`checking for folder '${folderName}' in directory '${pathTo}'`);
  console.log(checkForFile(pathTo, folderName));
  expect(checkForFile(pathTo, folderName)).toBeTruthy;
  console.log(`deleting folder '${folderName}' from directory '${pathTo}'`);
  deleteFolder(pathTo, folderName);
  console.log(`checking for folder '${folderName}' in directory '${pathTo}'`);
  console.log(checkForFile(pathTo, folderName));
  expect(checkForFile(pathTo, folderName)).toBeFalsy;
});
