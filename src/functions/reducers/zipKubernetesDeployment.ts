import { IMite } from '../../interfaces/IMite';
import { mobFileHeaderString } from '../../mobparts/mites/headers/mobFileHeaderString';
import { servicesFooterSectionString } from '../../mobparts/mites/headers/servicesFooterSectionString';
import { mobNetworksSectionString } from '../../mobparts/mites/headers/mobNetworksSectionString';
import { mobNetworkFooterSectionString } from '../../mobparts/mites/headers/mobNetworkFooterSectionString';

/**
 * makes Kubernetes Pod .zip file
 */
export const zipKubernetesDeployment = (
  serviceMites: IMite[],
  networkMites: IMite[]
): string => {
  // TODO: fix this function
  console.log(`this is still not outputting for kubernetes`);
  const tempServicesYML: string[] = serviceMites.flatMap(
    (eachMite) => eachMite.miteString
  );
  const tempNetworksYML: string[] = networkMites.flatMap(
    (eachMite) => eachMite.miteString
  );
  const ymlOutputArray: string[] = [
    mobFileHeaderString,
    ...tempServicesYML,
    servicesFooterSectionString,
    mobNetworksSectionString,
    ...tempNetworksYML,
    mobNetworkFooterSectionString
  ];
  const ymlString: string = ymlOutputArray.join(``);
  return ymlString;
};
