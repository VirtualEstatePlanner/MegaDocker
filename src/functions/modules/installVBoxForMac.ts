//  installVBoxForMac.ts
//  MegaDocker
//  installs VirtualBox for Mac from the .dmg file
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { downloadFolder } from '../../globals/downloadFolder';
import { checkForFile } from '../core/checkForFile';
import { runOrdered } from '../core/runOrdered';
import { runPrivilegedOrdered } from '../core/runPrivilegedOrdered';
import { downloadVBoxForMac } from './downloadVBoxForMac';
/**
 * installs VirtualBox for Mac from the .dmg file
 */
async function doInstallation(): Promise<void> {
  console.log(`installing VBox from disk image`);
  if (checkForFile(downloadFolder, `VirtualBox.dmg`) === false) {
    console.log(`downloading VirtualBox.dmg`);
    try {
      await downloadVBoxForMac();
    } catch (e) {
      console.log(e);
    }
    if (checkForFile(downloadFolder, `VirtualBox.dmg`) === true) {
      console.log(`mounting disk image`);
      runPrivilegedOrdered(`/usr/bin/hdiutil`, [
        `attach`,
        `/${downloadFolder}/VirtualBox.dmg`
      ]);
      // console.log(`waiting 30 seconds`);
      // runOrdered(`sleep 30`);
      console.log(`launching installer`);
      runPrivilegedOrdered(`/usr/sbin/installer`, [
        `-pkg`,
        `/Volumes/VirtualBox/VirtualBox.pkg`,
        `-target`,
        `/`
      ]);
      // console.log(`waiting 30 seconds`);
      // runOrdered(`sleep 30`);
      console.log(`ejecting disk image`);
      runPrivilegedOrdered(`/usr/sbin/diskutil`, [
        `eject`,
        `/Volumes/VirtualBox`
      ]);
    }
    // TODO needs a return that states whether or not it succeeded
  }
}

export async function installVBoxForMac(): Promise<void> {
  try {
    return doInstallation();
  } catch (e) {}
}
