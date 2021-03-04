import { IMite } from '../../../interfaces/IMite';

export const styleguidistNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1025,
  miteString: `

# Begin Styleguidist Network Section

 styleguidist:
  driver: overlay

# End Styleguidist Network Section

`,
};
