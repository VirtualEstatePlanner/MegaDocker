/** @format */

//  getCloudflareHosts.ts
//  MEGADocker
//  creates a string of cloudflare hostnames from an ITraefikedServiceMite[]
//  Created by George Georgulas IV on 3/5/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../interfaces/miteTypeInterfaces/ITraefikedServiceMite'

/**
 * @param traefikMites the ITraefikedServiceMite[] containing hosts for cloudflare to point to
 * @returns a string of hostnames in double quotes
 */
export const getCloudflareHosts: Function = (traefikMites: ITraefikedServiceMite[]): string =>
  traefikMites
    .map((eachTraefikedMite: ITraefikedServiceMite) => eachTraefikedMite.webInterfaceHostnames)
    .flat()
    .join()
    .split(',')
    .join('" "')
