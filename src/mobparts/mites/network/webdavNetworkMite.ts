import { IMite } from '../../../interfaces/IMite';

export const webdavNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1027,
  miteString: `

#Begin Webdav Network Section

 webdav:
  driver: overlay

#End Webdav Network Section

`,
};
