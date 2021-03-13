/** @format */

//  zipKubernetesDeployment.ts
//  MegaDocker
//  a function that creates and downloads a zip file containing the user's Kubernetes deployment
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

// commented out to prevent warnings until implemented
// import JSZip from 'jszip';
import { IMite } from '../../interfaces/IMite'
import { mobFileHeaderSectionString } from '../../mobparts/mites/headers/mobFileHeaderSectionString'
import { mobServicesFooterSectionString } from '../../mobparts/mites/headers/mobServicesFooterSectionString'
import { mobNetworkHeaderSectionString } from '../../mobparts/mites/headers/mobNetworkHeaderSectionString'
import { mobNetworkFooterSectionString } from '../../mobparts/mites/headers/mobNetworkFooterSectionString'

/**
 * makes Kubernetes Pod .zip file
 */
export const zipKubernetesDeployment = (serviceMites: IMite[], networkMites: IMite[]): string => {
  // TODO: re-write this function to zip for kubernetes and remove the console.log() below
  console.log(`this is still outputting for  Docker Swarm, not Kubernetes`)
  const tempServicesYML: string[] = serviceMites.flatMap((eachMite) => eachMite.miteString)
  const tempNetworksYML: string[] = networkMites.flatMap((eachMite) => eachMite.miteString)
  const ymlOutputArray: string[] = [mobFileHeaderSectionString, ...tempServicesYML, mobServicesFooterSectionString, mobNetworkHeaderSectionString, ...tempNetworksYML, mobNetworkFooterSectionString]
  const ymlString: string = ymlOutputArray.join(``)
  return ymlString
}
