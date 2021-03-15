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
import { mobSecretsHeaderSectionString } from '../../mobparts/mites/headers/mobSecretsHeaderSectionString'
import { mobSecretsFooterSectionString } from '../../mobparts/mites/headers/mobSecretsFooterSectionString'

/**
 * makes Kubernetes Pod .zip file
 */
export const zipKubernetesDeployment = (serviceMites: IMite[], networkMites: IMite[]): string => {
  // TODO: re-write this function to zip for kubernetes
  const tempServicesYML: string[] = serviceMites.flatMap((eachMite) => eachMite.miteString)
  const tempNetworksYML: string[] = networkMites.flatMap((eachMite) => eachMite.miteString)
  const ymlOutputArray: string[] = [
    mobFileHeaderSectionString.miteString,
    ...tempServicesYML,
    mobServicesFooterSectionString.miteString,
    mobNetworkHeaderSectionString.miteString,
    ...tempNetworksYML,
    mobNetworkFooterSectionString.miteString,
    mobSecretsHeaderSectionString.miteString,
    mobSecretsFooterSectionString.miteString,
  ]
  const ymlString: string = ymlOutputArray.join(``)
  return ymlString
}
