import { checkForFile } from './checkForFile';
import { makeFoldersForManikin } from './makeFoldersForManikin';
import { IManikin } from '../../classes/IManikin';
import { userMegaDockerFolder } from '../../globals/userMegaDockerFolder';
import defaultIcon from '../../images/manikin-icons/defaultIcon.png';

const myTestManikin: IManikin = {
  name: `my subfolder testing manikin`,
  manikinIcon: defaultIcon,
  description: `it has multiple folders`,
  isCore: false,
  isSelected: false,
  mites: [],
  ports: [],
  folder: `my-test-manikin`,
  subfolders: [
    `my-first-subfolder`,
    `my-second-subfolder`,
    `my-third-subfolder`
  ],
  memories: []
};

it(`should find a folder with three folders inside of it`, () => {
  expect(checkForFile(`${userMegaDockerFolder}`, myTestManikin.folder))
    .toBeFalsy;
  makeFoldersForManikin(myTestManikin);
  expect(checkForFile(`${userMegaDockerFolder}`, myTestManikin.folder))
    .toBeTruthy;
  expect(
    checkForFile(
      `${userMegaDockerFolder}/${myTestManikin.folder}`,
      myTestManikin.subfolders[0]
    )
  ).toBeTruthy;
  expect(
    checkForFile(
      `${userMegaDockerFolder}/${myTestManikin.folder}`,
      myTestManikin.subfolders[1]
    )
  ).toBeTruthy;
  expect(
    checkForFile(
      `${userMegaDockerFolder}/${myTestManikin.folder}`,
      myTestManikin.subfolders[2]
    )
  ).toBeTruthy;
});
