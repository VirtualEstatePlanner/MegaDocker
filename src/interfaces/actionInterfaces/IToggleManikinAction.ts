/**
 * @format
 * @payload the index of the manikin to toggle
 */

//  IToggleManikinAction.ts
//  MEGADocker
//  interface for a React Context dispatch to toggle the selection of a manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

export interface IToggleManikinAction {
  type: `TOGGLE_MANIKIN`
  payload: number
}
