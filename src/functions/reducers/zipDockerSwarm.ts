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
export const zipDockerSwarm = async (
  serviceMites: IMite[],
  networkMites: IMite[]
): Promise<string> => {
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

  const makeZip = async (): Promise<string> => {
    let zip: JSZip = new JSZip();
    zip.file(`${mobName.value}.yml`, `${ymlString}`);
    zip.folder(`traefik`).folder(`data`);
    const zippedOutput = zip.generateAsync({ type: `string` });
    return zippedOutput;
  };

  return makeZip();
};
