/** @format */

// commented out to prevent warnings until implemented
// import JSZip from 'jszip';
import { IMite } from '../../interfaces/IMite'
import { mobFileHeaderString } from '../../mobparts/mites/headers/mobFileHeaderString'
import { servicesFooterSectionString } from '../../mobparts/mites/headers/servicesFooterSectionString'
import { mobNetworkHeaderSectionString } from '../../mobparts/mites/headers/mobNetworkHeaderSectionString'
import { mobNetworkFooterSectionString } from '../../mobparts/mites/headers/mobNetworkFooterSectionString'

/**
 * makes Kubernetes Pod .zip file
 */
export const zipKubernetesDeployment = (serviceMites: IMite[], networkMites: IMite[]): string => {
  // TODO: re-write this function to zip for kubernetes and remove the console.log() below
  console.log(`this is still not outputting for kubernetes`)
  const tempServicesYML: string[] = serviceMites.flatMap((eachMite) => eachMite.miteString)
  const tempNetworksYML: string[] = networkMites.flatMap((eachMite) => eachMite.miteString)
  const ymlOutputArray: string[] = [mobFileHeaderString, ...tempServicesYML, servicesFooterSectionString, mobNetworkHeaderSectionString, ...tempNetworksYML, mobNetworkFooterSectionString]
  const ymlString: string = ymlOutputArray.join(``)
  return ymlString
}
