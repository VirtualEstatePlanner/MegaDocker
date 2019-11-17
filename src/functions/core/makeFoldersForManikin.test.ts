import { checkForFile } from './checkForFile';
import { makeFolder } from './makeFolder';
import { deleteFolder } from './deleteFolder';
import { makeFoldersForManikin } from './makeFoldersForManikin';
import { IManikin } from '../../classes/IManikin';
import { IMob } from '../../classes/IMob';
import { userMegaDockerFolder } from '../../globals/userMegaDockerFolder';
import defaultIcon from '../../images/manikin-icons/defaultIcon.png';

const myTestManikin: IManikin = {
  name: `myTestingManikin`,
  manikinIcon: defaultIcon,
  description: `it has multiple folders`,
  isCore: false,
  isSelected: true,
  mites: [],
  ports: [],
  folder: `my-test-manikin-folder`,
  subfolders: [
    `my-first-subfolder`,
    `my-second-subfolder`,
    `my-third-subfolder`,
    `my-fourth-subfolder`,
    `my-fifth-subfolder`
  ],
  memories: []
};
const myTestMob: IMob = {
  mobName: `someTestMob`,
  mobManikins: [myTestManikin],
  mobMemories: []
};

it(`should find a folder with five given folders inside of it`, () => {
  expect(checkForFile(`${userMegaDockerFolder}`, `${myTestMob.mobName}`))
    .toBeFalsy;
  makeFolder(`${userMegaDockerFolder}`, `${myTestMob.mobName}`);
  expect(checkForFile(`${userMegaDockerFolder}`, `${myTestMob.mobName}`))
    .toBeTruthy;
  expect(
    checkForFile(
      `${userMegaDockerFolder}/${myTestMob.mobName}`,
      myTestManikin.folder
    )
  ).toBeFalsy;
  makeFoldersForManikin(myTestMob, myTestManikin);
  expect(
    checkForFile(
      `${userMegaDockerFolder}/${myTestMob.mobName}`,
      myTestManikin.folder
    )
  ).toBeTruthy;
  expect(
    checkForFile(
      `${userMegaDockerFolder}/${myTestMob.mobName}/${myTestManikin.folder}`,
      myTestManikin.subfolders[0]
    )
  ).toBeTruthy;
  expect(
    checkForFile(
      `${userMegaDockerFolder}/${myTestMob.mobName}/${myTestManikin.folder}`,
      myTestManikin.subfolders[1]
    )
  ).toBeTruthy;
  expect(
    checkForFile(
      `${userMegaDockerFolder}/${myTestMob.mobName}/${myTestManikin.folder}`,
      myTestManikin.subfolders[2]
    )
  ).toBeTruthy;
  expect(
    checkForFile(
      `${userMegaDockerFolder}/${myTestMob.mobName}/${myTestManikin.folder}`,
      myTestManikin.subfolders[3]
    )
  ).toBeTruthy;
  expect(
    checkForFile(
      `${userMegaDockerFolder}/${myTestMob.mobName}/${myTestManikin.folder}`,
      myTestManikin.subfolders[4]
    )
  ).toBeTruthy;
  deleteFolder(
    `${userMegaDockerFolder}/${myTestMob.mobName}/${myTestManikin.folder}`,
    myTestManikin.subfolders[4]
  );
  deleteFolder(
    `${userMegaDockerFolder}/${myTestMob.mobName}/${myTestManikin.folder}`,
    myTestManikin.subfolders[3]
  );
  deleteFolder(
    `${userMegaDockerFolder}/${myTestMob.mobName}/${myTestManikin.folder}`,
    myTestManikin.subfolders[2]
  );
  deleteFolder(
    `${userMegaDockerFolder}/${myTestMob.mobName}/${myTestManikin.folder}`,
    myTestManikin.subfolders[1]
  );
  deleteFolder(
    `${userMegaDockerFolder}/${myTestMob.mobName}/${myTestManikin.folder}`,
    myTestManikin.subfolders[0]
  );
  deleteFolder(
    `${userMegaDockerFolder}`,
    `${myTestMob.mobName}/${myTestManikin.folder}`
  );
  deleteFolder(`${userMegaDockerFolder}`, `${myTestMob.mobName}`);
});
