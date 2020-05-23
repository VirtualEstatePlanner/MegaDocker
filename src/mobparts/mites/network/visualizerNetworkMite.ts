import { IMite } from '../../../interfaces/IMite';

export const visualizerNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1024,
  miteString: `

#Begin Visualizer Network Section

 visualizer:
  driver: overlay

#End Webdav Network Section

`,
};
