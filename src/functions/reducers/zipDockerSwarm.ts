import JSZip from 'jszip';
import fileSaver from 'file-saver';
import { IZipDockerCompose } from '../../interfaces/IZipDockerCompose';
import { IMemory } from '../../interfaces/IMemory';
import { IManikin } from '../../interfaces/IManikin';
import { IMite } from '../../interfaces/IMite';
import { mobFileHeaderString } from '../../mobparts/mites/headers/mobFileHeaderString';
import { servicesFooterSectionString } from '../../mobparts/mites/headers/servicesFooterSectionString';
import { mobNetworksSectionString } from '../../mobparts/mites/headers/mobNetworksSectionString';
import { mobNetworkFooterSectionString } from '../../mobparts/mites/headers/mobNetworkFooterSectionString';
import { traefikManikin } from '../../mobparts/manikins/traefik';
import { mobName } from '../../mobparts/memories/mobName';

/**
 * makes Docker Swarm .zip file
 */
export const zipDockerSwarm = (zipCompose: IZipDockerCompose): JSZip => {
  let zip: JSZip = JSZip();

  let zipMemories: IMemory[] = [...zipCompose.memories];
  let zipManikins: IManikin[] = [...zipCompose.manikins];

  const traefikIndex = zipManikins.indexOf(traefikManikin);
  const mobNameIndex = zipManikins[traefikIndex].memories.indexOf(mobName);

  /**
   * attaches memory values from UI to selected manikins
   */
  const applyMemories: VoidFunction = () => {
    const memoryMap = () => {
      zipMemories.map((memory: IMemory) => {
        const checkIfMemoryIsIncluded: VoidFunction = () => {
          zipManikins.map((manikin: IManikin) => {
            const updateManikinMemory: VoidFunction = () => {
              if (manikin.memories.includes(memory)) {
                const manMemIndex: number = manikin.memories.indexOf(memory);
                manikin.memories[manMemIndex].value = memory.value;
              }
            };
            return updateManikinMemory;
          });
        };
        return checkIfMemoryIsIncluded;
      });
    };
    return memoryMap;
  };

  /**
   * makes docker-compose.yml file
   */
  const createDockerComposeYmlFile = async (): Promise<string> => {
    const mites: IMite[] = zipManikins.flatMap((eachManikin: IManikin) =>
      eachManikin.mites.map((eachMite: IMite) => eachMite)
    );

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

    const ymlString: string = ymlOutputArray.join(``);

    const makeZip = async (): Promise<string> => {
      // applyMemories();
      // makeFolders();
      try {
        zip
          .folder(`${zipManikins[traefikIndex].memories[mobNameIndex].value}`)
          .file(
            `${zipManikins[traefikIndex].memories[mobNameIndex].value}.yml`,
            `${ymlString}`
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
  const makeFolders: Function = (): void => {
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

  applyMemories();
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

  console.log(zip.files, zip);
  return zip;
};
