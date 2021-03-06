/** @format */

//  getHostUsername.ts
//  MEGADocker
//  retrieves the username for the current user on this host
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { userInfo } from 'os'

export const hostUsername: string = userInfo().username
