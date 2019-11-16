import { makeMobFolderStructure } from './makeMobFolderStructure';
import { checkForFile } from './checkForFile';
import { userMegaDockerFolder } from '../../globals/userMegaDockerFolder';

it(`should make the folder for all manikins in a mob at once`, () => {
  expect(checkForFile(userMegaDockerFolder, ``)).toBeTruthy;
});
