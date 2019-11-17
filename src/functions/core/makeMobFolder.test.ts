import { checkForFile } from './checkForFile';
import { makeFolder } from './makeFolder';
import { deleteFolder } from './deleteFolder';
import { IMob } from '../../classes/IMob';
import { allManikins } from '../../globals/allManikins';
import { userMegaDockerFolder } from '../../globals/userMegaDockerFolder';

it(`should create an example mob folder`, () => {
  const testMob: IMob = {
    mobManikins: allManikins,
    mobName: `Our Testing Mob`,
    mobMemories: []
  };
  const folderName: string = `${testMob.mobName}`;
  expect(checkForFile(userMegaDockerFolder, folderName)).toBeFalsy;
  makeFolder(userMegaDockerFolder, folderName);
  expect(checkForFile(userMegaDockerFolder, folderName)).toBeTruthy;
  deleteFolder(userMegaDockerFolder, folderName);
  expect(checkForFile(userMegaDockerFolder, folderName)).toBeFalsy;
});
