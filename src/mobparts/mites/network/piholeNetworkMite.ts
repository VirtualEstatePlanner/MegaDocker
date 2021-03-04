import { IMite } from '../../../interfaces/IMite';

export const piholeNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40021,
  miteString: `

# Begin PiHole Network Section

 pihole:
  driver: overlay

# End PiHole Network Section
  
`,
};
