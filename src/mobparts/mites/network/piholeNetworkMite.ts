import { IMite } from '../../../interfaces/IMite';

export const piholeNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1017,
  miteString: `

#Begin PiHole Network Section

 pihole:
  driver: overlay

#End PiHole Network Section
  
`,
};
