import { makeMobFolderStructure } from './makeMobFolderStructure';
import { checkForFile } from './checkForFile';
import { userMegaDockerFolder } from '../../globals/userMegaDockerFolder';
import { IMob } from '../../classes/IMob';
import { allManikins } from '../../globals/allManikins';

it(`should make the folder for all manikins in a mob at once`, () => {
  const pathTo: string = userMegaDockerFolder;
  const folderName: string = `sometestfolder`;
  const testMob: IMob = {
    mobName: `someTestMob`,
    mobMemories: [],
    mobManikins: allManikins
  };
  console.log(`checking for folder '${folderName}' in directory '${pathTo}'`);
  console.log(checkForFile(pathTo, folderName));
  expect(checkForFile(pathTo, folderName)).toBeFalsy;
  makeMobFolderStructure(testMob);
});
