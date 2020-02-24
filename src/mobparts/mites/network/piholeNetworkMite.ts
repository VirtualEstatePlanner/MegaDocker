import { IMite } from '../../../interfaces/IMite';

export const piholeNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1011,
  miteString: `

#Begin Skopos Network Section

 pihole:
  driver: overlay

#End Skopos Network Section
  
`
};
