import JSZip from 'jszip';
import { IMite } from '../../interfaces/IMite';
import { mobFileHeaderString } from '../../mobparts/mites/headers/mobFileHeaderString';
import { servicesFooterSectionString } from '../../mobparts/mites/headers/servicesFooterSectionString';
import { mobNetworksSectionString } from '../../mobparts/mites/headers/mobNetworksSectionString';
import { mobNetworkFooterSectionString } from '../../mobparts/mites/headers/mobNetworkFooterSectionString';
import { mobName } from '../../mobparts/memories/mobName';

/**
 * makes Docker Swarm .zip file
 */
export const zipDockerSwarm = (
  serviceMites: IMite[],
  networkMites: IMite[]
): string => {
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

  let zip: JSZip = new JSZip();
  zip.file(`${mobName.value}.yml`, `${ymlString}`);

  const outputPromise = zip.generateAsync({ type: 'string' });
  const result = outputPromise.finally();
  console.log(result);
  // eslint-disable-next-line no-restricted-globals
  //location.href = `data:application/zip;base64,${result}`;

  // eslint-disable-next-line no-restricted-globals
  return ymlString;
};
