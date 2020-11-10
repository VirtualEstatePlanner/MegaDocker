import { IMite } from '../../../interfaces/IMite';

export const webdavNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1028,
  miteString: `

#Begin Webdav Network Section

 webdav:
  driver: overlay

#End Webdav Network Section

`,
};
