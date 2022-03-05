import { IManikin } from "../../interfaces/objectInterfaces/IManikin"
import { traefikManikin } from "../../mobparts/manikins/traefik"
import { primaryDomain } from "../../mobparts/memories/primaryDomain"
import { ldapBootstrapMegaDockerDotLdifMite } from "../../mobparts/mites/custom/ldapBootstrapMegaDockerDotLdifMite"

/**
 * adds dc values to bootstrap ldif
 */
export const populateLdifDCs: Function = (zipManikins: IManikin[], ldifAdditions: string): string => {
  const traefikIndex: number = zipManikins.indexOf(traefikManikin)
  const domainIndex: number = zipManikins[traefikIndex].memories.indexOf(primaryDomain)
  const fullDomain: string = zipManikins[traefikIndex].memories[domainIndex].memoryValue
  const tld: string = fullDomain.split(`.`)[1]
  const domain: string = fullDomain.split(`.`)[0]
  const ldifContents: string = ldapBootstrapMegaDockerDotLdifMite.miteFile.contents + ldifAdditions
  return ldifContents.split(`[[LDAPDOMAINASDCS]]`).join(`dc=${domain},dc=${tld}`)
}
