/** @format */

import { IMite } from '../../../interfaces/IMite'

export const webdavNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40063,
  miteString: `

# Begin WebDAV Network Section

 webdav:
  driver: overlay

# End WebDAV Network Section

`,
}
