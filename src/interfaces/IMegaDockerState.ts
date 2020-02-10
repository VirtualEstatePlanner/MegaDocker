import { IManikin } from './IManikin';
import { IMemory } from './IMemory';
import { IMite } from './IMite';

/**
 * the interface for the Application State
 * @manikinTableContents the menu on the left - {...allManikins}
 * @selectedManikins the user's mob
 * @memoryTableContents the menu on the right - the memories for the mob
 * @allMobMites every mite in the mob (to Array.filter against)
 * @dockerComposeMites every docker compose mite
 * @kubernetesMites every kubernetes mite
 * @mobDServiceMites docker-compose service yml mites
 * @mobDNetworkMites docker-compose network yml mites
 * @mobKServiceMites docker-compose service yml mites
 * @mobKNetworkMites docker-compose network yml mites
 * @mobCustomMites non-yml mites
 * @infoContent
 */
export interface IMegaDockerState {
  manikinTableContents: IManikin[];
  selectedManikins: IManikin[];
  memoryTableContents: IMemory[];
  allMobMites: IMite[];
  mobDServiceMites: IMite[];
  mobDNetworkMites: IMite[];
  mobCustomMites: IMite[];
  infoContent: string;
  ymlOutput: string;
}
