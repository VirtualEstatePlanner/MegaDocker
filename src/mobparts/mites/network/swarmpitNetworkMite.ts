import { IMite } from '../../../interfaces/IMite';

export const swarmpitNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1022,
  miteString: `

#Begin Swarmpit Network Section

 swarmpit:
  driver: overlay

#End Swarmpit Network Section

`,
};
