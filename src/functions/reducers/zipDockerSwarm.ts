import JSZip from 'jszip';
import fileSaver from 'file-saver';
import { IMemory } from '../../interfaces/IMemory';
import { IManikin } from '../../interfaces/IManikin';
import { IMite } from '../../interfaces/IMite';
import { IZipDockerCompose } from '../../interfaces/IZipDockerCompose';
import { mobFileHeaderString } from '../../mobparts/mites/headers/mobFileHeaderString';
import { servicesFooterSectionString } from '../../mobparts/mites/headers/servicesFooterSectionString';
import { mobNetworksSectionString } from '../../mobparts/mites/headers/mobNetworksSectionString';
import { mobNetworkFooterSectionString } from '../../mobparts/mites/headers/mobNetworkFooterSectionString';
import { traefikManikin } from '../../mobparts/manikins/traefik';
import { mobName } from '../../mobparts/memories/mobName';

/**
 * makes .zip file for docker-compose
 */
export const zipDockerSwarm = (zipCompose: IZipDockerCompose): JSZip => {
  let zip: JSZip = JSZip();

  let zipMemories: IMemory[] = [...zipCompose.memories];
  let zipManikins: IManikin[] = [...zipCompose.manikins];

  const traefikIndex = zipManikins.indexOf(traefikManikin);
  const mobNameIndex = zipManikins[traefikIndex].memories.indexOf(mobName);

  const mites: IMite[] = zipManikins.flatMap((eachManikin: IManikin) =>
    eachManikin.mites.map((eachMite: IMite) => eachMite)
  );

  /**
   * updates yml with variables from memories
   * @param ymlInput the initial string to change
   * @param memories the memories to apply
   */
  const updateYMLWithMemoryValues: Function = (
    ymlInput: string,
    memories: IMemory[]
  ): string => {
    let workingYml: string = ymlInput;

    memories.forEach((eachMemory: IMemory) => {
      console.log(eachMemory.memoryMarker, eachMemory.value);
      let tempYml = workingYml
        .split(eachMemory.memoryMarker)
        .join(eachMemory.value);
      console.log(tempYml);
      workingYml = tempYml;
    });

    const finalYml = workingYml;
    return finalYml;
  };

  const services: string[] = mites
    .filter((eachMite: IMite) => eachMite.type === `DockerSwarmService`)
    .sort((mite1, mite2): number => {
      if (mite1.miteIndex > mite2.miteIndex) {
        return 1;
      }
      if (mite1.miteIndex < mite2.miteIndex) {
        return -1;
      }
      return 0;
    })
    .map((eachMite: IMite) => eachMite.miteString);

  const networks: string[] = mites
    .filter((eachMite: IMite) => eachMite.type === `DockerSwarmNetwork`)
    .sort((mite1, mite2): number => {
      if (mite1.miteIndex > mite2.miteIndex) {
        return 1;
      }
      if (mite1.miteIndex < mite2.miteIndex) {
        return -1;
      }
      return 0;
    })
    .map((eachMite: IMite) => eachMite.miteString);

  const ymlOutputArray: string[] = [
    mobFileHeaderString,
    ...services,
    servicesFooterSectionString,
    mobNetworksSectionString,
    ...networks,
    mobNetworkFooterSectionString
  ];

  let ymlString: string = ymlOutputArray.join(``);

  /**
   * makes docker-compose.yml file
   */
  const createDockerComposeYmlFile = async (): Promise<string> => {
    const makeZip = async (): Promise<string> => {
      try {
        zip
          .folder(`${zipManikins[traefikIndex].memories[mobNameIndex].value}`)
          .file(
            `${zipManikins[traefikIndex].memories[mobNameIndex].value}.yml`,
            `${updateYMLWithMemoryValues(ymlString, zipMemories)}`
          );

        const output = await zip.generateAsync({
          type: `binarystring`
        });

        return output;
      } catch {
        return `zip failed`;
      }
    };

    return makeZip();
  };

  /**
   * generates manikin folders and subfolders
   */
  const makeFolders: VoidFunction = (): void => {
    // eslint-disable-next-line array-callback-return
    zipManikins.map((eachManikin: IManikin) => {
      const subs = eachManikin.subfolders;
      for (let eachSubfolder in subs) {
        zip
          .folder(`${zipManikins[traefikIndex].memories[mobNameIndex].value}`)
          .folder(eachManikin.folder)
          .folder(subs[eachSubfolder]);
      }
    });
  };

  createDockerComposeYmlFile();
  makeFolders();
  zip
    .generateAsync({
      compression: `DEFLATE`,
      compressionOptions: { level: 9 },
      type: `blob`
    })
    .then(function(content) {
      fileSaver.saveAs(
        content,
        `${zipManikins[traefikIndex].memories[mobNameIndex].value}.zip`
      );
    });

  return zip;
};
