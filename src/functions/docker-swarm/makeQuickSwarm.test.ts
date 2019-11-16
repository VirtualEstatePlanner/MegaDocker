//  makeQuickSwarm
//  MegaDocker
//  creates default test swarm of Lunarian-named docker-machines
//  and puts them in a VirtualBox group
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run';
import { joinVMToVBoxGroup } from '../vbox/joinVMToVBoxGroup';
import { moldVM } from '../vbox/moldVM';
import { startVBoxVM } from '../vbox/startVBoxVM';
import { stopVBoxVM } from '../vbox/stopVBoxVM';
import { createRemoteSwarm } from './createRemoteSwarm';
import { getSwarmToken } from './getSwarmToken';
import { joinSwarmAsManager } from './joinSwarmAsManager';
import { joinSwarmAsWorker } from './joinSwarmAsWorker';

/**
 * @mobName - the name of the Mob folder to share with the VMs in this swarm
 * creates default test swarm of Lunarian-named docker-machines
 * and puts them in a VirtualBox group
 */
export function makeQuickSwarm(mobName: string): void {
  // stops VMs in case they already exist
  stopVBoxVM('KluYa');
  stopVBoxVM('FuSoYa');
  stopVBoxVM('Zemus');
  stopVBoxVM('Golbez');
  stopVBoxVM('Cecil');
  // basic VM configuration
  moldVM('KluYa', mobName, '8866442200aa', 2048);
  moldVM('FuSoYa', mobName, '8866442200bb', 2048);
  moldVM('Zemus', mobName, '8866442200cc', 2048);
  moldVM('Cecil', mobName, '8866442200dd', 2048);
  moldVM('Golbez', mobName, '8866442200ee', 2048);
  // restarts VMs
  startVBoxVM('KluYa');
  startVBoxVM('FuSoYa');
  startVBoxVM('Zemus');
  startVBoxVM('Cecil');
  startVBoxVM('Golbez');
  // waits for VMs to boot
  createRemoteSwarm('KluYa');
  // gets tokens to join the swarm
  const managerSwarmToken: string = getSwarmToken(true);
  const workerSwarmToken: string = getSwarmToken(false);
  // join KluYa VM to VBox group
  joinVMToVBoxGroup('KluYa', 'Swarm-Managers');
  run(`sleep(3)`);
  // join FuSoYa VM to swarm as a manager
  joinVMToVBoxGroup('FuSoYa', 'Swarm-Managers');
  // join FuSoYa VM to VBox group
  joinSwarmAsManager('FuSoYa', managerSwarmToken);
  run(`sleep(3)`);
  // join Zemus VM to swarm as a manager
  joinSwarmAsManager('Zemus', managerSwarmToken);
  // join Zemus VM to VBox group
  joinVMToVBoxGroup('Zemus', 'Swarm-Managers');
  run(`sleep(3)`);
  // join Cecil VM as worker
  joinSwarmAsWorker('Cecil', workerSwarmToken);
  joinVMToVBoxGroup('Cecil', 'Swarm-Workers');
  run(`sleep(3)`);
  // join Golbez VM as worker
  joinSwarmAsWorker('Golbez', workerSwarmToken);
  joinVMToVBoxGroup('Golbez', 'Swarm-Workers');
  run(`sleep(3)`);
}
