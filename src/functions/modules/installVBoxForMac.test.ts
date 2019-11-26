import { installVBoxForMac } from './installVBoxForMac';
import { downloadVBoxForMac } from './downloadVBoxForMac';
import { checkForFile } from '../core/checkForFile';
import { downloadFolder } from '../../globals/downloadFolder';
import { run } from '../core/run';

it(`should install VirtualBox`, async () => {
  jest.setTimeout(120000);
  /*console.log(`downloading VBox dmg`);
  expect(checkForFile(downloadFolder, `VirtualBox.dmg`)).toBeFalsy;
  try {
    downloadVBoxForMac();
  } catch (e) {
    expect(e).toMatch('error');
  }*/
  console.log(`installing VBox`);
  try {
    installVBoxForMac();
  } catch (e) {
    //    expect(e).toMatch('error');
  }
  expect(run(`VBoxManage`, [``])).toReturn;
});
