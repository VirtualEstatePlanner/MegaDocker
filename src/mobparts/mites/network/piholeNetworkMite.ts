import { IMite } from '../../../interfaces/IMite';

export const piholeNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1020,
  miteString: `

# Begin PiHole Network Section

 pihole:
  driver: overlay

# End PiHole Network Section
  
`,
};
