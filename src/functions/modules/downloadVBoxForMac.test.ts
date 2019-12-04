import { checkForFile } from '../core/checkForFile';
import { deleteFile } from '../core/deleteFile';
import { detectOS } from '../core/detectOS';
import { downloadVBoxForMac } from './downloadVBoxForMac';
import { downloadFolder } from '../../globals/downloadFolder';
import opener from 'opener';

it(`should download the VirtualBox.dmg`, async () => {
  jest.setTimeout(120000);
  expect(checkForFile(downloadFolder, `VirtualBox.dmg`)).toBeFalsy;
  try {
    await downloadVBoxForMac();
  } catch (e) {
    expect(e).toMatch('error');
  }
  expect(checkForFile(downloadFolder, `VirtualBox.dmg`)).toBeTruthy;
  if (detectOS[0] === `darwin `) {
    opener(`${downloadFolder}/VirtualBox.dmg`);
    //  run(``);
  }
  deleteFile(downloadFolder, `VirtualBox.dmg`);
  expect(checkForFile(downloadFolder, `VirtualBox.dmg`)).toBeFalsy;
});
