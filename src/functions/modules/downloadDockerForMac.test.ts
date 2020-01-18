import { checkForFile } from '../core/checkForFile';
import { deleteFile } from '../core/deleteFile';
import { detectOS } from '../core/detectOS';
import { downloadDockerForMac } from './downloadDockerForMac';
import { downloadFolder } from '../../globals/downloadFolder';
import opener from 'opener';

it(`should download the Docker.dmg`, async () => {
  jest.setTimeout(270000);
  expect(checkForFile(downloadFolder, `Docker.dmg`)).toBeFalsy;
  try {
    await downloadDockerForMac();
  } catch (e) {
    expect(e).toMatch('error');
  }
  expect(checkForFile(downloadFolder, `Docker.dmg`)).toBeTruthy;
  if (detectOS[0] === `darwin `) {
    opener(`${downloadFolder}/Docker.dmg`);
    //    run(``)
  }
  deleteFile(downloadFolder, `Docker.dmg`);
  expect(checkForFile(downloadFolder, `Docker.dmg`)).toBeFalsy;
});
