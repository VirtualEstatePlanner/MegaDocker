/** @format */

import { IMob } from '../objectInterfaces/IMob'

//  ILoadMobActionBrowser.ts
//  MEGADocker
//  interface for a React Context dispatch to load a mob file in the browser
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

export interface IUploadMobActionBrowser {
  type: `UPLOAD_MOB_FILE_BROWSER`
  payload: IMob
}
