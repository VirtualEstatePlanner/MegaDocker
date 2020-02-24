import { IMite } from '../../../interfaces/IMite';

export const skoposNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1015,
  miteString: `

#Begin Skopos Network Section

 skopos:
  driver: overlay

#End Skopos Network Section
  
`
};
