import { IMite } from '../../../interfaces/IMite';

export const plexNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1021,
  miteString: `

# Begin Plex Network Section

 plex:
  driver: overlay

# End Plex Network Section
  
`,
};
