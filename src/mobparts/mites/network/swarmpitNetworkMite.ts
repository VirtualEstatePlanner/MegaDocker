import { IMite } from '../../../interfaces/IMite';

export const swarmpitNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1016,
  miteString: `

#Begin Swarmpit Network Section

 swarmpit:
  driver: overlay

#End Swarmpit Network Section

`
};
