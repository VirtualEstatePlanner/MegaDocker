import { makeMobFolderStructure } from './makeMobFolderStructure';
import { checkForFile } from './checkForFile';
import { userMegaDockerFolder } from '../../globals/userMegaDockerFolder';
import { IMob } from '../../classes/IMob';
import { allManikins } from '../../globals/allManikins';
import { deleteFolder } from './deleteFolder';

it(`should make the folder for all manikins in a mob at once`, () => {
  const testMob: IMob = {
    mobName: `someTestMob`,
    mobMemories: [],
    mobManikins: allManikins
  };
  // check that mob folder isn't there
  expect(checkForFile(userMegaDockerFolder, testMob.mobName)).toBeFalsy;
  // make folder structure
  makeMobFolderStructure(testMob);
  // check that mob folder is there
  expect(checkForFile(userMegaDockerFolder, testMob.mobName)).toBeTruthy;
  for (const eachManikin of testMob.mobManikins) {
    if (testMob.mobManikins !== []) {
      for (const eachSubfolder of eachManikin.subfolders) {
        // check that each manikin subfolder is there
        expect(
          checkForFile(
            `${userMegaDockerFolder}/${testMob.mobName}/${eachManikin.folder}`,
            `${eachSubfolder}`
          )
        ).toBeTruthy;
      }
    }
  }
  // delete test folders
  for (const eachManikin of testMob.mobManikins) {
    if (testMob.mobManikins !== []) {
      for (const eachSubfolder of eachManikin.subfolders) {
        // delete each manikin subfolder
        deleteFolder(
          `${userMegaDockerFolder}/${testMob.mobName}/${eachManikin.folder}`,
          `${eachSubfolder}`
        );
      }
    }
    for (const eachManikin of testMob.mobManikins) {
      if (testMob.mobManikins !== []) {
        for (const eachSubfolder of eachManikin.subfolders) {
          // check that each subfolder was deleted
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
        // delete each manikin folder
        deleteFolder(
          `${userMegaDockerFolder}/${testMob.mobName}`,
          `${eachManikin.folder}`
        );
      }
    }
    // delete mob folder
    deleteFolder(userMegaDockerFolder, testMob.mobName);
  }
});
