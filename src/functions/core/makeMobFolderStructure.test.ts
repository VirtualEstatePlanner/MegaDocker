import { makeMobFolderStructure } from './makeMobFolderStructure';
import { checkForFile } from './checkForFile';
import { userMegaDockerFolder } from '../../globals/userMegaDockerFolder';
import { IMob } from '../../interfaces/IMob';
import { allManikins } from '../../globals/allManikins';
import { deleteFolder } from './deleteFolder';

it(`should make the folder for all manikins in a mob at once`, () => {
  const testMob: IMob = {
    mobName: `someTestMob`,
    mobMemories: [],
    mobManikins: allManikins
  };
  expect(checkForFile(userMegaDockerFolder, testMob.mobName)).toBeFalsy;
  makeMobFolderStructure(testMob);
  expect(checkForFile(userMegaDockerFolder, testMob.mobName)).toBeTruthy;
  for (const eachManikin of testMob.mobManikins) {
    if (testMob.mobManikins !== []) {
      for (const eachSubfolder of eachManikin.subfolders) {
        expect(
          checkForFile(
            `${userMegaDockerFolder}/${testMob.mobName}/${eachManikin.folder}`,
            `${eachSubfolder}`
          )
        ).toBeTruthy;
      }
    }
  }
  for (const eachManikin of testMob.mobManikins) {
    if (testMob.mobManikins !== []) {
      for (const eachSubfolder of eachManikin.subfolders) {
        deleteFolder(
          `${userMegaDockerFolder}/${testMob.mobName}/${eachManikin.folder}`,
          `${eachSubfolder}`
        );
      }
    }
    for (const eachManikin of testMob.mobManikins) {
      if (testMob.mobManikins !== []) {
        for (const eachSubfolder of eachManikin.subfolders) {
          expect(
            checkForFile(
              `${userMegaDockerFolder}/${testMob.mobName}/${eachManikin.folder}`,
              `${eachSubfolder}`
            )
          ).toBeFalsy;
        }
      }
    }
    for (const eachManikin of testMob.mobManikins) {
      if (testMob.mobManikins !== []) {
        deleteFolder(
          `${userMegaDockerFolder}/${testMob.mobName}`,
          `${eachManikin.folder}`
        );
      }
    }
    deleteFolder(userMegaDockerFolder, testMob.mobName);
  }
});
