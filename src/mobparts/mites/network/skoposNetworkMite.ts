import { IMite } from '../../../interfaces/IMite';

export const skoposNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1015,
  miteString: `

#Begin Skopos Network Section

 swarmpit:
  driver: overlay

#End Skopos Network Section
  
`
};
