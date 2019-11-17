import { makeMobFolderStructure } from './makeMobFolderStructure';
import { checkForFile } from './checkForFile';
import { userMegaDockerFolder } from '../../globals/userMegaDockerFolder';
import { IMob } from '../../classes/IMob';
import { allManikins } from '../../globals/allManikins';
import { run } from './run';

it(`should make the folder for all manikins in a mob at once`, () => {
  const pathTo: string = userMegaDockerFolder;
  const folderName: string = `sometestfolder`;
  const testMob: IMob = {
    mobName: `someTestMob`,
    mobMemories: [],
    mobManikins: allManikins
  };
  expect(checkForFile(pathTo, folderName)).toBeFalsy;
  makeMobFolderStructure(testMob);
  run(`rm -rf ${testMob.mobName}`, ['']);
});
