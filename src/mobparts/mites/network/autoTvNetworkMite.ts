import { IMite } from '../../../interfaces/IMite';

export const autoTvNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1011,
  miteString: `

# Begin AutoTV Network Section

 autotv:
  driver: overlay

# End AutoTV Network Section
  
`
};
