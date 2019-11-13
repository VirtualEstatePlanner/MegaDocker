//  startMob.ts
//  MegaDocker
//  saves a YML file to disk and runs the Mob that file describes
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

//tslint:disable
import { run } from '../core/run';
import { IManikin } from '../../classes/IManikin';
import { makeMobFolder } from '../core/makeMobFolder';
import { makeFoldersForManikin } from '../core/makeFoldersForManikin';
import { homedir } from 'os';
import { userMob } from '../../globals/_globals';

/**
 * saves a YML file to disk and runs the Mob that file describes
 */

export function startMob(): void {
  // IMPLEMENT
  const chosenManikins: IManikin[] = [];
  const stackFileName: string = `${userMob.mobName}.yml`;

  /*userMob.storagePath = `${userMegaDockerFolder}.${userMob.mobName}`;
    userMob.filePath: Path = userMob.storagePath.path;
    makeMobFolder(mobName, homedir.toString());
    makeYMLFile(stackFileName);
    for (chosenManikins.forEach) {
        makeFoldersForManikin(manikin, manikin.subfolders);
    }
    run(
        '/usr/local/bin/docker',
        ['stack',
        'deploy',
        '-c',
        `${userMob.filePath}/${userMob.mobName}.yml`,
        `${userMob.mobName}`]);*/
}
